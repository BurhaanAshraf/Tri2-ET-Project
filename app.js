let state = {
  activeQuizId: null,
  questions: [],
  currentIndex: 0,
  answers: {},
  locked: {},
  timerInterval: null,
  totalTimeRemaining: 0,
  config: {},
  pendingConfirmAction: null,
};

const screens = {
  home: document.getElementById("home-screen"),
  settings: document.getElementById("settings-screen"),
  create: document.getElementById("create-screen"),
  quiz: document.getElementById("quiz-screen"),
  result: document.getElementById("result-screen"),
  manage: document.getElementById("manage-screen"),
};

const ui = {
  quizGrid: document.getElementById("quiz-grid"),
  timerDisplay: document.getElementById("timer-display"),
  timeLeft: document.getElementById("time-left"),
  questionText: document.getElementById("question-text"),
  optionsContainer: document.getElementById("options-container"),
  progressFill: document.getElementById("q-progress-fill"),
  progressText: document.getElementById("q-progress-text"),
  catTag: document.getElementById("q-category-tag"),
  btnNext: document.getElementById("btn-next"),
  btnPrev: document.getElementById("btn-prev"),
  btnSubmitAns: document.getElementById("btn-submit-answer"),
  btnFinish: document.getElementById("btn-finish-quiz"),
};

document.addEventListener("DOMContentLoaded", () => {
  initHome();

  document.getElementById("btn-settings").addEventListener("click", () => {
    const config = DataManager.getSettings();
    document.getElementById("setting-num-questions").value = config.count;
    document.getElementById("setting-time-per-q").value = config.timePerQ;
    switchScreen("settings");
  });

  document
    .getElementById("btn-create-menu")
    .addEventListener("click", openCreateScreen);
  document
    .getElementById("btn-manage")
    .addEventListener("click", openManageScreen);

  document
    .getElementById("btn-save-settings")
    .addEventListener("click", saveSettings);
  document
    .getElementById("btn-back-home")
    .addEventListener("click", () => switchScreen("home"));
  document
    .getElementById("btn-back-manage")
    .addEventListener("click", () => switchScreen("home"));
  document
    .getElementById("btn-restart")
    .addEventListener("click", () => switchScreen("home"));

  document
    .getElementById("create-form")
    .addEventListener("submit", handleCreateQuestion);

  ui.btnNext.addEventListener("click", () => changeQuestion(1));
  ui.btnPrev.addEventListener("click", () => changeQuestion(-1));
  ui.btnSubmitAns.addEventListener("click", lockAnswer);
  ui.btnFinish.addEventListener("click", calculateResults);

  document
    .getElementById("btn-end-early")
    .addEventListener("click", requestEndQuiz);

  const catModal = document.getElementById("category-modal");
  document
    .getElementById("btn-create-category")
    .addEventListener("click", () => {
      document.getElementById("new-cat-name").value = "";
      catModal.classList.remove("hidden");
    });
  document
    .getElementById("btn-cancel-cat")
    .addEventListener("click", () => catModal.classList.add("hidden"));
  document
    .getElementById("btn-save-cat")
    .addEventListener("click", handleCreateCategory);

  document.getElementById("btn-confirm-no").addEventListener("click", () => {
    document.getElementById("confirm-modal").classList.add("hidden");
    state.pendingConfirmAction = null;
  });
  document
    .getElementById("btn-confirm-yes")
    .addEventListener("click", executeConfirmAction);

  document
    .getElementById("btn-close-alert")
    .addEventListener("click", () =>
      document.getElementById("alert-modal").classList.add("hidden"),
    );

  document
    .getElementById("manage-filter")
    .addEventListener("change", renderManageList);
});

function switchScreen(screenName) {
  Object.values(screens).forEach((s) => s.classList.remove("active", "hidden"));
  Object.values(screens).forEach((s) => s.classList.add("hidden"));
  screens[screenName].classList.remove("hidden");
  screens[screenName].classList.add("active");
  if (screenName === "home") initHome();
}

function initHome() {
  ui.quizGrid.innerHTML = "";
  const all = DataManager.getAllQuizzes();

  Object.keys(all).forEach((key) => {
    const quiz = all[key];
    const count = quiz.questions.length;

    const btn = document.createElement("div");
    btn.className = "quiz-card-btn";

    let html = `${quiz.title}<span>${count} Questions</span>`;

    // Add Delete Button for Custom Quizzes
    if (key.startsWith("custom_")) {
      html += `<button class="btn-delete-cat" title="Delete Category">✕</button>`;
    }

    btn.innerHTML = html;

    // Handle Clicks
    btn.onclick = (e) => {
      // Check if Delete Button was clicked
      if (e.target.classList.contains("btn-delete-cat")) {
        e.stopPropagation(); // Stop quiz from starting
        requestDeleteCategory(key);
      } else {
        startQuiz(key);
      }
    };

    ui.quizGrid.appendChild(btn);
  });
}

function requestDeleteCategory(key) {
  showConfirm("Delete this entire category and all its questions?", () => {
    DataManager.deleteQuiz(key);
    initHome();
  });
}

function handleCreateCategory() {
  const name = document.getElementById("new-cat-name").value.trim();
  if (!name) return;

  DataManager.createQuiz(name);
  document.getElementById("category-modal").classList.add("hidden");
  initHome();
}

function openCreateScreen() {
  const select = document.getElementById("new-q-target");
  select.innerHTML = "";
  const all = DataManager.getAllQuizzes();

  Object.keys(all).forEach((key) => {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = all[key].title;
    select.appendChild(opt);
  });

  switchScreen("create");
}

function handleCreateQuestion(e) {
  e.preventDefault();
  const targetId = document.getElementById("new-q-target").value;

  const newQ = {
    question: document.getElementById("new-q-text").value,
    options: [
      document.getElementById("new-opt-1").value,
      document.getElementById("new-opt-2").value,
      document.getElementById("new-opt-3").value,
      document.getElementById("new-opt-4").value,
    ],
    answer: parseInt(document.getElementById("new-correct-opt").value),
  };

  DataManager.addQuestion(targetId, newQ);

  const msg = document.getElementById("create-msg");
  msg.textContent = "Question Added Successfully!";
  document.getElementById("create-form").reset();
  setTimeout(() => (msg.textContent = ""), 2000);
}

function startQuiz(quizId) {
  const quizData = DataManager.getQuiz(quizId);
  if (quizData.questions.length === 0) {
    showAlert("This category has no questions yet! Add some first.");
    return;
  }

  state.activeQuizId = quizId;
  state.config = DataManager.getSettings();

  const allQ = [...quizData.questions];
  const safeCount = Math.min(state.config.count, allQ.length);
  state.questions = allQ.sort(() => 0.5 - Math.random()).slice(0, safeCount);

  state.currentIndex = 0;
  state.answers = {};
  state.locked = {};
  state.totalTimeRemaining = state.questions.length * state.config.timePerQ;

  ui.catTag.textContent = quizData.title;
  ui.timerDisplay.classList.remove("hidden");
  ui.btnFinish.classList.add("hidden");
  ui.btnNext.classList.remove("hidden");

  switchScreen("quiz");
  renderQuestion();
  startTimer();
}

function startTimer() {
  clearInterval(state.timerInterval);
  updateTimerUI();
  state.timerInterval = setInterval(() => {
    state.totalTimeRemaining--;
    updateTimerUI();
    if (state.totalTimeRemaining <= 0) {
      clearInterval(state.timerInterval);
      calculateResults();
    }
  }, 1000);
}

function updateTimerUI() {
  const min = Math.floor(state.totalTimeRemaining / 60);
  const sec = state.totalTimeRemaining % 60;
  ui.timeLeft.textContent = `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
}

function renderQuestion() {
  const q = state.questions[state.currentIndex];

  const currentNum = state.currentIndex + 1;
  const totalNum = state.questions.length;
  const pct = (currentNum / totalNum) * 100;

  ui.progressFill.style.width = pct + "%";
  ui.progressText.textContent = `${currentNum}/${totalNum}`;
  ui.questionText.textContent = `${currentNum}. ${q.question}`;

  ui.optionsContainer.innerHTML = "";
  q.options.forEach((opt, idx) => {
    const btn = document.createElement("div");
    btn.className = "option-btn";
    btn.textContent = opt;
    btn.onclick = () => selectOption(idx);

    if (state.answers[state.currentIndex] === idx)
      btn.classList.add("selected");

    if (state.locked[state.currentIndex]) {
      btn.style.pointerEvents = "none";
      if (idx === q.answer) btn.classList.add("locked-correct");
      else if (state.answers[state.currentIndex] === idx)
        btn.classList.add("locked-wrong");
    }
    ui.optionsContainer.appendChild(btn);
  });

  ui.btnPrev.disabled = state.currentIndex === 0;

  if (state.currentIndex === state.questions.length - 1) {
    ui.btnNext.classList.add("hidden");
    ui.btnFinish.classList.remove("hidden");
  } else {
    ui.btnNext.classList.remove("hidden");
    ui.btnFinish.classList.add("hidden");
  }

  ui.btnSubmitAns.disabled =
    state.locked[state.currentIndex] ||
    state.answers[state.currentIndex] === undefined;
  ui.btnSubmitAns.textContent = state.locked[state.currentIndex]
    ? "Locked"
    : "Submit Answer";
}

function selectOption(idx) {
  if (state.locked[state.currentIndex]) return;
  state.answers[state.currentIndex] = idx;
  renderQuestion();
}

function lockAnswer() {
  if (state.answers[state.currentIndex] === undefined) return;
  state.locked[state.currentIndex] = true;
  renderQuestion();
}

function changeQuestion(dir) {
  state.currentIndex += dir;
  renderQuestion();
}

function calculateResults() {
  clearInterval(state.timerInterval);
  ui.timerDisplay.classList.add("hidden");

  let correct = 0,
    wrong = 0,
    unsolved = 0;
  state.questions.forEach((q, idx) => {
    const ans = state.answers[idx];
    if (ans === undefined) unsolved++;
    else if (ans === q.answer) correct++;
    else wrong++;
  });

  const score = Math.max(0, correct * 10 - wrong * 2);
  document.getElementById("final-score").textContent = score;
  document.getElementById("res-correct").textContent = correct;
  document.getElementById("res-wrong").textContent = wrong;
  document.getElementById("res-unsolved").textContent = unsolved;

  switchScreen("result");
}

function requestEndQuiz() {
  showConfirm("End quiz now? Unsolved questions will count as zero.", () => {
    calculateResults();
  });
}

function openManageScreen() {
  const select = document.getElementById("manage-filter");
  select.innerHTML = "";
  const all = DataManager.getAllQuizzes();
  Object.keys(all).forEach((key) => {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = all[key].title;
    select.appendChild(opt);
  });

  renderManageList();
  switchScreen("manage");
}

function renderManageList() {
  const list = document.getElementById("manage-list");
  list.innerHTML = "";
  const quizId = document.getElementById("manage-filter").value;
  const quiz = DataManager.getQuiz(quizId);

  if (!quiz || quiz.questions.length === 0) {
    list.innerHTML =
      '<p style="text-align:center; padding:20px">No questions here.</p>';
    return;
  }

  quiz.questions.forEach((q) => {
    const div = document.createElement("div");
    div.className = "q-item";
    div.innerHTML = `<span>${q.question}</span>`;

    const delBtn = document.createElement("button");
    delBtn.className = "btn-delete";
    delBtn.textContent = "Delete";
    delBtn.onclick = () => requestDelete(quizId, q.id);

    div.appendChild(delBtn);
    list.appendChild(div);
  });
}

function requestDelete(quizId, qId) {
  showConfirm("Are you sure you want to delete this question?", () => {
    DataManager.deleteQuestion(quizId, qId);
    renderManageList();
  });
}

function showConfirm(msg, action) {
  document.getElementById("confirm-title").textContent = "Confirm";
  document.getElementById("confirm-msg").textContent = msg;
  state.pendingConfirmAction = action;
  document.getElementById("confirm-modal").classList.remove("hidden");
}

function executeConfirmAction() {
  if (state.pendingConfirmAction) {
    state.pendingConfirmAction();
  }
  document.getElementById("confirm-modal").classList.add("hidden");
  state.pendingConfirmAction = null;
}

function saveSettings() {
  const count = parseInt(
    document.getElementById("setting-num-questions").value,
  );
  const time = parseInt(document.getElementById("setting-time-per-q").value);
  DataManager.saveSettings({ count, timePerQ: time });
  switchScreen("home");
}

function showAlert(msg) {
  document.getElementById("alert-msg").textContent = msg;
  document.getElementById("alert-modal").classList.remove("hidden");
}
