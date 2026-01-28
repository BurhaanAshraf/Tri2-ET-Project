MasterQuiz
A responsive, multi-niche quiz web application built entirely with vanilla JavaScript.
🎯 Purpose
MasterQuiz is designed to be a lightweight yet powerful platform for testing knowledge. It allows users to challenge themselves with pre-built topics or create entirely new custom quizzes. The project serves as a demonstration of effective DOM manipulation, state management, and data persistence without the need for external frameworks.

🚀 Key Features
6 Pre-built Categories: Tech, History, Science, Geography, Movies, and Sports (25 questions each).
Custom Creation: Users can create new categories and add their own questions.
Settings: Adjustable timer and question count per quiz.
Responsive UI: Fully adaptive design that works seamlessly on Desktop, Tablet, and Mobile.
Local Storage: Custom questions, categories, and settings are saved automatically in the browser.
Management: Delete specific questions or entire custom categories.

🛠️ How It's Made
The project uses a modular architecture with standard web technologies:
HTML5: Single-page architecture where different "screens" (Home, Quiz, Results) are toggled dynamically.
CSS3: Custom styling using CSS Variables, Flexbox, and Grid. Includes comprehensive media queries for mobile responsiveness.
JavaScript (ES6+):
data.js: A dedicated data layer that handles the question bank and interfaces with localStorage (CRUD operations).
app.js: Handles the application logic, game loop (timer, scoring), and DOM updates.

 Project Structure
index.html - Main structure and modal definitions.
style.css - Visual styling and responsive design rules.
data.js - Database logic and default question sets.
app.js - UI interaction and quiz engine logic.
