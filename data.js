const defaultQuizzes = {
  tech: {
    title: "Technology",
    questions: [
      {
        id: 101,
        question: "What does CPU stand for?",
        options: [
          "Central Process Unit",
          "Central Processing Unit",
          "Computer Personal Unit",
          "Central Processor Unit",
        ],
        answer: 1,
      },
      {
        id: 102,
        question: "Which language is used for web structure?",
        options: ["Python", "Java", "HTML", "C++"],
        answer: 2,
      },
      {
        id: 103,
        question: "What is the brain of the computer?",
        options: ["RAM", "CPU", "HDD", "Mouse"],
        answer: 1,
      },
      {
        id: 104,
        question: "What does CSS stand for?",
        options: [
          "Cascading Style Sheets",
          "Creative Style Sheets",
          "Computer Style Sheets",
          "Colorful Style Sheets",
        ],
        answer: 0,
      },
      {
        id: 105,
        question: "Which consists of 8 bits?",
        options: ["Byte", "Bit", "Kilobyte", "Megabyte"],
        answer: 0,
      },
      {
        id: 106,
        question: "Who founded Microsoft?",
        options: ["Steve Jobs", "Bill Gates", "Elon Musk", "Mark Zuckerberg"],
        answer: 1,
      },
      {
        id: 107,
        question: "What is the full form of RAM?",
        options: [
          "Read Access Memory",
          "Random Access Memory",
          "Run Accept Memory",
          "None",
        ],
        answer: 1,
      },
      {
        id: 108,
        question: "Which is a programming language?",
        options: ["HTML", "HTTP", "Python", "FTP"],
        answer: 2,
      },
      {
        id: 109,
        question: "What does HTTP stand for?",
        options: [
          "HyperText Transfer Protocol",
          "HyperText Test Protocol",
          "High Transfer Protocol",
          "None",
        ],
        answer: 0,
      },
      {
        id: 110,
        question: "Which company owns Android?",
        options: ["Apple", "Google", "Microsoft", "Samsung"],
        answer: 1,
      },
      {
        id: 111,
        question: "1024 Kilobytes is equal to?",
        options: ["1 MB", "1 GB", "1 TB", "1 KB"],
        answer: 0,
      },
      {
        id: 112,
        question: "Main circuit board in a computer?",
        options: ["Motherboard", "Fatherboard", "Keyboard", "Breadboard"],
        answer: 0,
      },
      {
        id: 113,
        question: "Which is an input device?",
        options: ["Monitor", "Printer", "Mouse", "Speaker"],
        answer: 2,
      },
      {
        id: 114,
        question: "Correct extension for Python file?",
        options: [".py", ".python", ".pt", ".p"],
        answer: 0,
      },
      {
        id: 115,
        question: "What does GUI stand for?",
        options: [
          "Graphical User Interface",
          "Global User Interface",
          "General User Interface",
          "Guidance User Interface",
        ],
        answer: 0,
      },
      {
        id: 116,
        question: "Which is not an OS?",
        options: ["Windows", "Linux", "Oracle", "DOS"],
        answer: 2,
      },
      {
        id: 117,
        question: "Smallest unit of data?",
        options: ["Bit", "Byte", "Nibble", "KB"],
        answer: 0,
      },
      {
        id: 118,
        question: "Which key is used to refresh?",
        options: ["F2", "F5", "F1", "F12"],
        answer: 1,
      },
      {
        id: 119,
        question: "Founder of Facebook?",
        options: ["Mark Zuckerberg", "Jack Dorsey", "Jeff Bezos", "Tim Cook"],
        answer: 0,
      },
      {
        id: 120,
        question: "Which is a volatile memory?",
        options: ["ROM", "RAM", "HDD", "SSD"],
        answer: 1,
      },
      {
        id: 121,
        question: "Full form of Wi-Fi?",
        options: [
          "Wireless Fidelity",
          "Wireless Find",
          "Wired Fidelity",
          "None",
        ],
        answer: 0,
      },
      {
        id: 122,
        question: "Which protocol sends email?",
        options: ["HTTP", "FTP", "SMTP", "IP"],
        answer: 2,
      },
      {
        id: 123,
        question: "Inventor of WWW?",
        options: ["Tim Berners-Lee", "Vint Cerf", "Bob Kahn", "Steve Jobs"],
        answer: 0,
      },
      {
        id: 124,
        question: "Binary system uses?",
        options: ["0 and 1", "1 and 2", "0 to 9", "None"],
        answer: 0,
      },
      {
        id: 125,
        question: "What is Linux?",
        options: ["Malware", "Operating System", "Application", "Hardware"],
        answer: 1,
      },
    ],
  },
  history: {
    title: "History",
    questions: [
      {
        id: 201,
        question: "Who was the first US President?",
        options: ["Lincoln", "Washington", "Jefferson", "Adams"],
        answer: 1,
      },
      {
        id: 202,
        question: "Start of WWI?",
        options: ["1914", "1918", "1939", "1945"],
        answer: 0,
      },
      {
        id: 203,
        question: "Who built the Pyramids?",
        options: ["Romans", "Greeks", "Egyptians", "Mayans"],
        answer: 2,
      },
      {
        id: 204,
        question: "Who discovered America?",
        options: ["Columbus", "Magellan", "Cook", "Vasco da Gama"],
        answer: 0,
      },
      {
        id: 205,
        question: "First man on Moon?",
        options: ["Aldrin", "Armstrong", "Collins", "Gagarin"],
        answer: 1,
      },
      {
        id: 206,
        question: "Year of US Independence?",
        options: ["1776", "1789", "1800", "1600"],
        answer: 0,
      },
      {
        id: 207,
        question: "Who was Napoleon?",
        options: [
          "French Emperor",
          "British King",
          "German General",
          "Russian Tsar",
        ],
        answer: 0,
      },
      {
        id: 208,
        question: "Empire of Julius Caesar?",
        options: ["Greek", "Roman", "Ottoman", "Persian"],
        answer: 1,
      },
      {
        id: 209,
        question: "Titanic sank in?",
        options: ["1910", "1912", "1915", "1920"],
        answer: 1,
      },
      {
        id: 210,
        question: "Who wrote the Declaration of Independence?",
        options: ["Washington", "Jefferson", "Hamilton", "Franklin"],
        answer: 1,
      },
      {
        id: 211,
        question: "War between North and South US?",
        options: ["Civil War", "Revolutionary War", "Cold War", "World War"],
        answer: 0,
      },
      {
        id: 212,
        question: "Ancient civilization in Indus Valley?",
        options: ["Harappan", "Mayan", "Incan", "Aztec"],
        answer: 0,
      },
      {
        id: 213,
        question: "Queen of Egypt?",
        options: ["Cleopatra", "Nefertiti", "Hatshepsut", "Isis"],
        answer: 0,
      },
      {
        id: 214,
        question: "When did WWII end?",
        options: ["1940", "1942", "1945", "1950"],
        answer: 2,
      },
      {
        id: 215,
        question: "Who was the Iron Lady?",
        options: ["Thatcher", "Merkel", "Gandhi", "Meir"],
        answer: 0,
      },
      {
        id: 216,
        question: "Currency of Romans?",
        options: ["Denarius", "Dollar", "Euro", "Pound"],
        answer: 0,
      },
      {
        id: 217,
        question: "Capital of Aztec Empire?",
        options: ["Tenochtitlan", "Cusco", "Machu Picchu", "Lima"],
        answer: 0,
      },
      {
        id: 218,
        question: "Who invented the telephone?",
        options: ["Bell", "Edison", "Tesla", "Marconi"],
        answer: 0,
      },
      {
        id: 219,
        question: "First female Prime Minister of India?",
        options: ["Indira Gandhi", "Pratibha Patil", "Sonia Gandhi", "None"],
        answer: 0,
      },
      {
        id: 220,
        question: "Nelson Mandela was president of?",
        options: ["Kenya", "South Africa", "Nigeria", "Ghana"],
        answer: 1,
      },
      {
        id: 221,
        question: "Wall fell in Berlin in?",
        options: ["1989", "1991", "1980", "1995"],
        answer: 0,
      },
      {
        id: 222,
        question: "Genghis Khan was leader of?",
        options: ["Mongols", "Huns", "Turks", "Chinese"],
        answer: 0,
      },
      {
        id: 223,
        question: "Magna Carta signed in?",
        options: ["1215", "1492", "1066", "1776"],
        answer: 0,
      },
      {
        id: 224,
        question: "Joan of Arc was from?",
        options: ["England", "France", "Spain", "Germany"],
        answer: 1,
      },
      {
        id: 225,
        question: "Founder of Buddhism?",
        options: ["Siddhartha Gautama", "Ashoka", "Confucius", "Laozi"],
        answer: 0,
      },
    ],
  },
  science: {
    title: "Science",
    questions: [
      {
        id: 301,
        question: "Symbol for Water?",
        options: ["HO", "H2O", "O2", "CO2"],
        answer: 1,
      },
      {
        id: 302,
        question: "Planet closest to Sun?",
        options: ["Venus", "Mars", "Mercury", "Earth"],
        answer: 2,
      },
      {
        id: 303,
        question: "Powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Wall"],
        answer: 1,
      },
      {
        id: 304,
        question: "Symbol for Iron?",
        options: ["Ir", "Fe", "In", "I"],
        answer: 1,
      },
      {
        id: 305,
        question: "Hardest natural substance?",
        options: ["Gold", "Iron", "Diamond", "Silver"],
        answer: 2,
      },
      {
        id: 306,
        question: "Gas we breathe in?",
        options: ["Oxygen", "Carbon", "Nitrogen", "Helium"],
        answer: 0,
      },
      {
        id: 307,
        question: "Speed of light?",
        options: ["300,000 km/s", "150,000 km/s", "1000 km/s", "Unknown"],
        answer: 0,
      },
      {
        id: 308,
        question: "Largest organ in body?",
        options: ["Liver", "Heart", "Skin", "Lungs"],
        answer: 2,
      },
      {
        id: 309,
        question: "Center of an atom?",
        options: ["Electron", "Proton", "Nucleus", "Neutron"],
        answer: 2,
      },
      {
        id: 310,
        question: "Who proposed gravity?",
        options: ["Einstein", "Newton", "Galileo", "Darwin"],
        answer: 1,
      },
      {
        id: 311,
        question: "Boiling point of water?",
        options: ["100 C", "90 C", "110 C", "0 C"],
        answer: 0,
      },
      {
        id: 312,
        question: "Red planet?",
        options: ["Jupiter", "Mars", "Saturn", "Venus"],
        answer: 1,
      },
      {
        id: 313,
        question: "Study of life?",
        options: ["Biology", "Physics", "Chemistry", "Geology"],
        answer: 0,
      },
      {
        id: 314,
        question: "Process plants make food?",
        options: ["Photosynthesis", "Respiration", "Digestion", "None"],
        answer: 0,
      },
      {
        id: 315,
        question: "Number of bones in adult human?",
        options: ["206", "208", "210", "200"],
        answer: 0,
      },
      {
        id: 316,
        question: "Atomic number of Carbon?",
        options: ["6", "12", "14", "8"],
        answer: 0,
      },
      {
        id: 317,
        question: "Charge of electron?",
        options: ["Positive", "Negative", "Neutral", "Unknown"],
        answer: 1,
      },
      {
        id: 318,
        question: "Nearest star to Earth?",
        options: ["Proxima Centauri", "Sun", "Sirius", "Alpha Centauri"],
        answer: 1,
      },
      {
        id: 319,
        question: "Largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
        answer: 1,
      },
      {
        id: 320,
        question: "Penicillin discovered by?",
        options: ["Fleming", "Pasteur", "Curie", "Darwin"],
        answer: 0,
      },
      {
        id: 321,
        question: "Which blood cells fight infection?",
        options: ["Red", "White", "Platelets", "Plasma"],
        answer: 1,
      },
      {
        id: 322,
        question: "DNA stands for?",
        options: [
          "Deoxyribonucleic Acid",
          "Deoxyribogenetic Acid",
          "Dual Nitrogen Acid",
          "None",
        ],
        answer: 0,
      },
      {
        id: 323,
        question: "Freezing point of water?",
        options: ["0 C", "32 C", "10 C", "-10 C"],
        answer: 0,
      },
      {
        id: 324,
        question: "pH of pure water?",
        options: ["5", "7", "9", "1"],
        answer: 1,
      },
      {
        id: 325,
        question: "Most abundant gas in air?",
        options: ["Oxygen", "Nitrogen", "Argon", "CO2"],
        answer: 1,
      },
    ],
  },
  geo: {
    title: "Geography",
    questions: [
      {
        id: 401,
        question: "Largest continent?",
        options: ["Africa", "Asia", "Europe", "America"],
        answer: 1,
      },
      {
        id: 402,
        question: "Longest river?",
        options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
        answer: 0,
      },
      {
        id: 403,
        question: "Capital of France?",
        options: ["Rome", "Berlin", "Paris", "Madrid"],
        answer: 2,
      },
      {
        id: 404,
        question: "Smallest country?",
        options: ["Monaco", "Vatican City", "Malta", "Nauru"],
        answer: 1,
      },
      {
        id: 405,
        question: "Desert in Africa?",
        options: ["Gobi", "Sahara", "Kalahari", "Arabian"],
        answer: 1,
      },
      {
        id: 406,
        question: "Highest mountain?",
        options: ["K2", "Everest", "Fuji", "Kilimanjaro"],
        answer: 1,
      },
      {
        id: 407,
        question: "Country with most people?",
        options: ["India", "China", "USA", "Russia"],
        answer: 0,
      },
      {
        id: 408,
        question: "Capital of Japan?",
        options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
        answer: 2,
      },
      {
        id: 409,
        question: "Ocean between US and Europe?",
        options: ["Pacific", "Atlantic", "Indian", "Arctic"],
        answer: 1,
      },
      {
        id: 410,
        question: "Number of US states?",
        options: ["48", "50", "52", "49"],
        answer: 1,
      },
      {
        id: 411,
        question: "Where is the Eiffel Tower?",
        options: ["Italy", "France", "Spain", "Germany"],
        answer: 1,
      },
      {
        id: 412,
        question: "Capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        answer: 2,
      },
      {
        id: 413,
        question: "Land of Rising Sun?",
        options: ["China", "Japan", "Korea", "Vietnam"],
        answer: 1,
      },
      {
        id: 414,
        question: "River in London?",
        options: ["Thames", "Seine", "Danube", "Rhine"],
        answer: 0,
      },
      {
        id: 415,
        question: "Largest ocean?",
        options: ["Atlantic", "Pacific", "Indian", "Arctic"],
        answer: 1,
      },
      {
        id: 416,
        question: "Country shaped like a boot?",
        options: ["Spain", "Italy", "Greece", "Portugal"],
        answer: 1,
      },
      {
        id: 417,
        question: "Capital of Canada?",
        options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
        answer: 3,
      },
      {
        id: 418,
        question: "Which is not in Europe?",
        options: ["France", "Brazil", "Germany", "Poland"],
        answer: 1,
      },
      {
        id: 419,
        question: "Great Barrier Reef is in?",
        options: ["Australia", "USA", "Brazil", "India"],
        answer: 0,
      },
      {
        id: 420,
        question: "Canal in Egypt?",
        options: ["Panama", "Suez", "Erie", "Grand"],
        answer: 1,
      },
      {
        id: 421,
        question: "Capital of Brazil?",
        options: ["Rio", "Sao Paulo", "Brasilia", "Lima"],
        answer: 2,
      },
      {
        id: 422,
        question: "Coldest continent?",
        options: ["Europe", "Antarctica", "Asia", "America"],
        answer: 1,
      },
      {
        id: 423,
        question: "Capital of Russia?",
        options: ["St Petersburg", "Moscow", "Kiev", "Minsk"],
        answer: 1,
      },
      {
        id: 424,
        question: "Amazon Rainforest is in?",
        options: ["Africa", "South America", "Asia", "Europe"],
        answer: 1,
      },
      {
        id: 425,
        question: "Capital of India?",
        options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        answer: 1,
      },
    ],
  },
  movies: {
    title: "Movies",
    questions: [
      {
        id: 501,
        question: "Who played Iron Man?",
        options: [
          "Chris Evans",
          "Robert Downey Jr",
          "Chris Hemsworth",
          "Mark Ruffalo",
        ],
        answer: 1,
      },
      {
        id: 502,
        question: "Director of Titanic?",
        options: ["Spielberg", "Cameron", "Nolan", "Scorsese"],
        answer: 1,
      },
      {
        id: 503,
        question: "Simba is from?",
        options: ["Aladdin", "Lion King", "Frozen", "Mulan"],
        answer: 1,
      },
      {
        id: 504,
        question: "Highest grossing movie?",
        options: ["Avatar", "Endgame", "Titanic", "Star Wars"],
        answer: 0,
      },
      {
        id: 505,
        question: "Toy Story is by?",
        options: ["Dreamworks", "Pixar", "Sony", "Blue Sky"],
        answer: 1,
      },
      {
        id: 506,
        question: "Played Jack Sparrow?",
        options: ["Brad Pitt", "Johnny Depp", "Tom Cruise", "Will Smith"],
        answer: 1,
      },
      {
        id: 507,
        question: "Wizard of Oz villain?",
        options: ["Wicked Witch", "Voldemort", "Joker", "Thanos"],
        answer: 0,
      },
      {
        id: 508,
        question: "Rocky is a movie about?",
        options: ["Football", "Boxing", "Tennis", "Golf"],
        answer: 1,
      },
      {
        id: 509,
        question: "Nemo is a?",
        options: ["Shark", "Clownfish", "Whale", "Crab"],
        answer: 1,
      },
      {
        id: 510,
        question: "Dark Knight hero?",
        options: ["Superman", "Batman", "Flash", "Aquaman"],
        answer: 1,
      },
      {
        id: 511,
        question: "Played Harry Potter?",
        options: ["Radcliffe", "Grint", "Watson", "Felton"],
        answer: 0,
      },
      {
        id: 512,
        question: "Shrek is an?",
        options: ["Elf", "Ogre", "Giant", "Dwarf"],
        answer: 1,
      },
      {
        id: 513,
        question: "James Bond code?",
        options: ["001", "007", "777", "911"],
        answer: 1,
      },
      {
        id: 514,
        question: "Star Wars villain?",
        options: ["Vader", "Joker", "Sauron", "Thanos"],
        answer: 0,
      },
      {
        id: 515,
        question: "Played Forrest Gump?",
        options: ["Hanks", "Cruise", "Pitt", "Ford"],
        answer: 0,
      },
      {
        id: 516,
        question: "Matrix main character?",
        options: ["Neo", "Morpheus", "Trinity", "Smith"],
        answer: 0,
      },
      {
        id: 517,
        question: "Godfather director?",
        options: ["Coppola", "Scorsese", "Tarantino", "Kubrick"],
        answer: 0,
      },
      {
        id: 518,
        question: "Frozen princess?",
        options: ["Elsa", "Belle", "Cinderella", "Ariel"],
        answer: 0,
      },
      {
        id: 519,
        question: "Played Wolverine?",
        options: ["Jackman", "Reynolds", "Affleck", "Bale"],
        answer: 0,
      },
      {
        id: 520,
        question: "City in La La Land?",
        options: ["NY", "LA", "Chicago", "Miami"],
        answer: 1,
      },
      {
        id: 521,
        question: "Lord of the Rings object?",
        options: ["Sword", "Ring", "Shield", "Crown"],
        answer: 1,
      },
      {
        id: 522,
        question: "Played Joker (2008)?",
        options: ["Leto", "Ledger", "Phoenix", "Nicholson"],
        answer: 1,
      },
      {
        id: 523,
        question: "Movie with dinosaurs?",
        options: ["Jurassic Park", "Jaws", "Alien", "ET"],
        answer: 0,
      },
      {
        id: 524,
        question: "Home Alone boy?",
        options: ["Kevin", "John", "Mike", "Tom"],
        answer: 0,
      },
      {
        id: 525,
        question: "Terminator actor?",
        options: ["Stallone", "Schwarzenegger", "Willis", "Van Damme"],
        answer: 1,
      },
    ],
  },
  sports: {
    title: "Sports",
    questions: [
      {
        id: 601,
        question: "How long is a soccer match?",
        options: ["45 min", "60 min", "90 min", "100 min"],
        answer: 2,
      },
      {
        id: 602,
        question: "National sport of Canada?",
        options: ["Soccer", "Cricket", "Ice Hockey", "Baseball"],
        answer: 2,
      },
      {
        id: 603,
        question: "Usain Bolt is a?",
        options: ["Swimmer", "Sprinter", "Boxer", "Cyclist"],
        answer: 1,
      },
      {
        id: 604,
        question: "NBA is related to?",
        options: ["Baseball", "Basketball", "Football", "Hockey"],
        answer: 1,
      },
      {
        id: 605,
        question: "How many players in cricket team?",
        options: ["10", "11", "9", "12"],
        answer: 1,
      },
      {
        id: 606,
        question: "Winner of 2018 World Cup?",
        options: ["France", "Brazil", "Germany", "Argentina"],
        answer: 0,
      },
      {
        id: 607,
        question: "Michael Phelps sport?",
        options: ["Running", "Swimming", "Jumping", "Diving"],
        answer: 1,
      },
      {
        id: 608,
        question: "Where were first modern Olympics?",
        options: ["Paris", "London", "Athens", "Rome"],
        answer: 2,
      },
      {
        id: 609,
        question: "Max score in bowling?",
        options: ["200", "300", "100", "500"],
        answer: 1,
      },
      {
        id: 610,
        question: "Super Bowl sport?",
        options: ["Soccer", "American Football", "Rugby", "Tennis"],
        answer: 1,
      },
      {
        id: 611,
        question: "Roger Federer plays?",
        options: ["Golf", "Tennis", "Squash", "Badminton"],
        answer: 1,
      },
      {
        id: 612,
        question: "Tiger Woods plays?",
        options: ["Golf", "Tennis", "Chess", "Poker"],
        answer: 0,
      },
      {
        id: 613,
        question: "How many rings in Olympic logo?",
        options: ["4", "5", "6", "7"],
        answer: 1,
      },
      {
        id: 614,
        question: "Color of yellow card?",
        options: ["Warning", "Dismissal", "Goal", "Foul"],
        answer: 0,
      },
      {
        id: 615,
        question: "Babe Ruth sport?",
        options: ["Baseball", "Cricket", "Hockey", "Football"],
        answer: 0,
      },
      {
        id: 616,
        question: "Muhammad Ali sport?",
        options: ["Wrestling", "Boxing", "Judo", "Karate"],
        answer: 1,
      },
      {
        id: 617,
        question: "Tour de France is?",
        options: ["Car Race", "Bike Race", "Marathon", "Boat Race"],
        answer: 1,
      },
      {
        id: 618,
        question: "Wimbledon sport?",
        options: ["Tennis", "Cricket", "Rugby", "Polo"],
        answer: 0,
      },
      {
        id: 619,
        question: "Shape of rugby ball?",
        options: ["Round", "Oval", "Square", "Flat"],
        answer: 1,
      },
      {
        id: 620,
        question: "Grand Slam sport?",
        options: ["Tennis", "Football", "Hockey", "Boxing"],
        answer: 0,
      },
      {
        id: 621,
        question: "Standard golf course holes?",
        options: ["9", "12", "18", "20"],
        answer: 2,
      },
      {
        id: 622,
        question: "FIFA sport?",
        options: ["Basketball", "Soccer", "Tennis", "Golf"],
        answer: 1,
      },
      {
        id: 623,
        question: "How many bases in baseball?",
        options: ["3", "4", "5", "2"],
        answer: 1,
      },
      {
        id: 624,
        question: "Virat Kohli sport?",
        options: ["Tennis", "Cricket", "Hockey", "Football"],
        answer: 1,
      },
      {
        id: 625,
        question: "Where is NBA based?",
        options: ["UK", "USA", "China", "India"],
        answer: 1,
      },
    ],
  },
};

const DataManager = {
  getAllQuizzes: () => {
    const stored = localStorage.getItem("masterQuiz_multi_data");
    if (!stored) {
      localStorage.setItem(
        "masterQuiz_multi_data",
        JSON.stringify(defaultQuizzes),
      );
      return defaultQuizzes;
    }

    const parsed = JSON.parse(stored);
    if (!parsed["sports"]) {
      parsed["sports"] = defaultQuizzes["sports"];
      localStorage.setItem("masterQuiz_multi_data", JSON.stringify(parsed));
    }

    return parsed;
  },

  getQuiz: (quizId) => {
    const all = DataManager.getAllQuizzes();
    return all[quizId];
  },

  createQuiz: (title) => {
    const all = DataManager.getAllQuizzes();
    const id = "custom_" + Date.now();
    all[id] = { title: title, questions: [] };
    localStorage.setItem("masterQuiz_multi_data", JSON.stringify(all));
    return true;
  },

  deleteQuiz: (quizId) => {
    const all = DataManager.getAllQuizzes();
    if (all[quizId]) {
      delete all[quizId];
      localStorage.setItem("masterQuiz_multi_data", JSON.stringify(all));
      return true;
    }
    return false;
  },

  addQuestion: (quizId, newQ) => {
    const all = DataManager.getAllQuizzes();
    if (!all[quizId]) return false;

    newQ.id = Date.now();
    all[quizId].questions.push(newQ);
    localStorage.setItem("masterQuiz_multi_data", JSON.stringify(all));
    return true;
  },

  deleteQuestion: (quizId, qId) => {
    const all = DataManager.getAllQuizzes();
    if (!all[quizId]) return false;

    all[quizId].questions = all[quizId].questions.filter((q) => q.id !== qId);
    localStorage.setItem("masterQuiz_multi_data", JSON.stringify(all));
    return true;
  },

  getSettings: () => {
    const stored = localStorage.getItem("masterQuiz_settings");
    return stored ? JSON.parse(stored) : { count: 10, timePerQ: 30 };
  },

  saveSettings: (settings) => {
    localStorage.setItem("masterQuiz_settings", JSON.stringify(settings));
  },
};
