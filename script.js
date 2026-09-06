const QUESTION_BANK = [
  {
    question: 'Which of the following best describes artificial intelligence?',
    options: ['Systems that mimic human reasoning', 'A type of network cable', 'A machine learning chip only', 'A database format'],
    correctAnswer: 'Systems that mimic human reasoning',
    explanation: 'AI refers to systems that can perform tasks that typically require human intelligence, such as pattern recognition and decision-making.',
    category: 'AI',
    difficulty: 'Easy',
    topic: 'Machine Learning'
  },
  {
    question: 'What is a major benefit of supervised learning?',
    options: ['It learns from correctly labeled examples', 'It does not need data', 'It replaces all hardware', 'It only works offline'],
    correctAnswer: 'It learns from correctly labeled examples',
    explanation: 'Supervised learning trains models using labeled datasets, helping the model learn correct input-output mappings.',
    category: 'AI',
    difficulty: 'Easy',
    topic: 'Supervised Learning'
  },
  {
    question: 'Which option is a common AI application?',
    options: ['Image classification', 'Signal amplifier', 'Harbor inspection', 'Mechanical wrench'],
    correctAnswer: 'Image classification',
    explanation: 'Image classification is a common AI use case where models identify objects or features in images.',
    category: 'AI',
    difficulty: 'Easy',
    topic: 'Computer Vision'
  },
  {
    question: 'What does NLP stand for?',
    options: ['Natural Language Processing', 'Network Logic Protocol', 'Neural Link Program', 'Numeric Learning Platform'],
    correctAnswer: 'Natural Language Processing',
    explanation: 'NLP enables machines to understand and generate human language.',
    category: 'AI',
    difficulty: 'Easy',
    topic: 'NLP'
  },
  {
    question: 'Which algorithm is commonly used for classification tasks?',
    options: ['Decision Tree', 'Compression Tool', 'USB Driver', 'Router Firmware'],
    correctAnswer: 'Decision Tree',
    explanation: 'Decision trees are widely used for classification and regression by splitting data based on feature values.',
    category: 'AI',
    difficulty: 'Medium',
    topic: 'Classification'
  },
  {
    question: 'What is the purpose of a neural network?',
    options: ['To model complex patterns in data', 'To replace every sensor', 'To encrypt Wi-Fi', 'To store static files'],
    correctAnswer: 'To model complex patterns in data',
    explanation: 'Neural networks are designed to capture complex patterns and relationships in large datasets.',
    category: 'AI',
    difficulty: 'Medium',
    topic: 'Neural Networks'
  },
  {
    question: 'Which statement best describes bias in AI?',
    options: ['It occurs when a model reflects unfair patterns in training data', 'It makes hardware faster', 'It improves battery life', 'It is only a software version issue'],
    correctAnswer: 'It occurs when a model reflects unfair patterns in training data',
    explanation: 'Bias in AI typically comes from imbalanced or unfair training data and leads to skewed predictions.',
    category: 'AI',
    difficulty: 'Medium',
    topic: 'AI Ethics'
  },
  {
    question: 'Why is feature engineering important in AI?',
    options: ['It helps models learn from meaningful input attributes', 'It changes network protocols', 'It reduces storage capacity', 'It eliminates all errors'],
    correctAnswer: 'It helps models learn from meaningful input attributes',
    explanation: 'Feature engineering transforms raw data into useful patterns that improve model performance.',
    category: 'AI',
    difficulty: 'Medium',
    topic: 'Data Preparation'
  },
  {
    question: 'Which metric is commonly used to evaluate classification accuracy?',
    options: ['Accuracy score', 'CPU clock', 'Bandwidth', 'Signal amplitude'],
    correctAnswer: 'Accuracy score',
    explanation: 'Accuracy measures the proportion of correct predictions among all predictions.',
    category: 'AI',
    difficulty: 'Hard',
    topic: 'Model Evaluation'
  },
  {
    question: 'What is the main role of overfitting prevention in machine learning?',
    options: ['To help the model generalize to new data', 'To add more hardware', 'To bypass validation', 'To reduce internet speeds'],
    correctAnswer: 'To help the model generalize to new data',
    explanation: 'Preventing overfitting keeps the model from memorizing training data and failing on unseen data.',
    category: 'AI',
    difficulty: 'Hard',
    topic: 'Generalization'
  },
  {
    question: 'Which device is most closely associated with the Internet of Things?',
    options: ['Smart thermostat', 'Word processor', 'Desk lamp only', 'Spreadsheet template'],
    correctAnswer: 'Smart thermostat',
    explanation: 'A smart thermostat connects to a network and responds to sensor or user inputs, which is a classic IoT device.',
    category: 'IoT',
    difficulty: 'Easy',
    topic: 'Smart Devices'
  },
  {
    question: 'What does IoT stand for?',
    options: ['Internet of Things', 'Internal Operating Technology', 'Integrated Output Transfer', 'Internet of Tunnels'],
    correctAnswer: 'Internet of Things',
    explanation: 'IoT refers to the network of physical devices connected to the internet and each other.',
    category: 'IoT',
    difficulty: 'Easy',
    topic: 'Internet of Things'
  },
  {
    question: 'Which of the following is a typical IoT sensor?',
    options: ['Temperature sensor', 'Printer cable', 'Spreadsheet cell', 'USB port'],
    correctAnswer: 'Temperature sensor',
    explanation: 'Temperature sensors collect environmental data that can be processed and acted upon by connected systems.',
    category: 'IoT',
    difficulty: 'Easy',
    topic: 'Sensors'
  },
  {
    question: 'Why are IoT devices often connected through Wi-Fi or Bluetooth?',
    options: ['To exchange data and communicate remotely', 'To stop all internet access', 'To eliminate storage', 'To create static webpages'],
    correctAnswer: 'To exchange data and communicate remotely',
    explanation: 'IoT devices rely on wireless communication to send data, receive commands, and integrate into larger systems.',
    category: 'IoT',
    difficulty: 'Easy',
    topic: 'Connectivity'
  },
  {
    question: 'Which security issue is a common concern in IoT systems?',
    options: ['Weak authentication', 'Overheating keyboards', 'Color calibration', 'Database compression'],
    correctAnswer: 'Weak authentication',
    explanation: 'Weak or default authentication puts devices at risk of unauthorized access and manipulation.',
    category: 'IoT',
    difficulty: 'Medium',
    topic: 'IoT Security'
  },
  {
    question: 'What is edge computing in IoT?',
    options: ['Processing data closer to the device rather than in the cloud', 'Increasing network cables', 'Downloading more files', 'Reformatting databases'],
    correctAnswer: 'Processing data closer to the device rather than in the cloud',
    explanation: 'Edge computing reduces latency by processing data near the source device instead of sending everything to a central server.',
    category: 'IoT',
    difficulty: 'Medium',
    topic: 'Edge Computing'
  },
  {
    question: 'Which protocol is commonly used in low-power IoT networks?',
    options: ['MQTT', 'PNG', 'JPEG', 'CSS'],
    correctAnswer: 'MQTT',
    explanation: 'MQTT is a lightweight messaging protocol often used in constrained IoT environments.',
    category: 'IoT',
    difficulty: 'Medium',
    topic: 'Protocols'
  },
  {
    question: 'What is a smart city example of IoT?',
    options: ['Traffic monitoring systems', 'Manual paper maps', 'Text-only forms', 'Traditional radio clocks'],
    correctAnswer: 'Traffic monitoring systems',
    explanation: 'Traffic monitoring uses connected sensors and analytics to improve road efficiency and safety.',
    category: 'IoT',
    difficulty: 'Medium',
    topic: 'Smart Cities'
  },
  {
    question: 'Why is device interoperability important in IoT?',
    options: ['It allows different systems to communicate and work together', 'It reduces the number of devices', 'It prevents internet access', 'It shortens battery life'],
    correctAnswer: 'It allows different systems to communicate and work together',
    explanation: 'Interoperability is essential so devices from different vendors can exchange data and coordinate effectively.',
    category: 'IoT',
    difficulty: 'Hard',
    topic: 'System Integration'
  },
  {
    question: 'What is the primary purpose of a gateway in an IoT network?',
    options: ['To connect devices to one another or to a cloud platform', 'To print documents', 'To upload photos to a printer', 'To create power supply'],
    correctAnswer: 'To connect devices to one another or to a cloud platform',
    explanation: 'Gateways act as intermediary points that aggregate data from devices and route it to cloud services or other systems.',
    category: 'IoT',
    difficulty: 'Hard',
    topic: 'Gateway Architecture'
  },
  {
    question: 'Which is a practical example of AI in IoT systems?',
    options: ['Predictive maintenance for machinery', 'Static HTML page creation', 'Manual note-taking only', 'Replacing all sensors with paper'],
    correctAnswer: 'Predictive maintenance for machinery',
    explanation: 'AI can analyze sensor data to predict equipment failures before they happen, improving reliability and reducing downtime.',
    category: 'Mixed',
    difficulty: 'Easy',
    topic: 'Predictive Maintenance'
  },
  {
    question: 'What is a common use of AI in smart homes?',
    options: ['Recognizing user habits and automating routines', 'Removing internet connectivity', 'Replacing all electrical circuits', 'Converting data into paper files'],
    correctAnswer: 'Recognizing user habits and automating routines',
    explanation: 'AI in smart homes can learn patterns and automate actions like lighting, climate, and security preferences.',
    category: 'Mixed',
    difficulty: 'Easy',
    topic: 'Smart Home AI'
  },
  {
    question: 'Which technology is most associated with real-time data analytics in IoT?',
    options: ['Streaming telemetry dashboards', 'Low-level text formatting', 'Tamper-proof paper logs', 'Manual spreadsheet reviews'],
    correctAnswer: 'Streaming telemetry dashboards',
    explanation: 'IoT systems often stream live data into dashboards so users can monitor conditions and respond quickly.',
    category: 'Mixed',
    difficulty: 'Medium',
    topic: 'Monitoring'
  },
  {
    question: 'How can AI improve security in IoT networks?',
    options: ['By detecting unusual patterns and suspicious activity', 'By disabling every connection', 'By replacing all devices', 'By eliminating the need for updates'],
    correctAnswer: 'By detecting unusual patterns and suspicious activity',
    explanation: 'AI-based security systems can analyze network traffic and detect abnormal patterns that may indicate a breach.',
    category: 'Mixed',
    difficulty: 'Medium',
    topic: 'Cybersecurity'
  },
  {
    question: 'Which statement best reflects the relationship between AI and IoT?',
    options: ['AI makes sense of the large volumes of data produced by IoT systems', 'AI replaces all physical devices', 'IoT eliminates the need for data processing', 'AI and IoT are unrelated'],
    correctAnswer: 'AI makes sense of the large volumes of data produced by IoT systems',
    explanation: 'AI helps interpret the vast streams of data generated by connected devices, enabling smarter automation and insight.',
    category: 'Mixed',
    difficulty: 'Hard',
    topic: 'AI + IoT Integration'
  },
  {
    question: 'What is one reason cloud platforms are important for IoT?',
    options: ['They provide centralized storage, analytics, and management', 'They are only used for static banners', 'They disable sensor readings', 'They replace all local devices'],
    correctAnswer: 'They provide centralized storage, analytics, and management',
    explanation: 'Cloud systems aggregate data from many IoT devices and provide the processing and storage needed for large-scale deployments.',
    category: 'Mixed',
    difficulty: 'Hard',
    topic: 'Cloud IoT'
  }
];

const STORAGE_KEYS = {
  theme: 'aiIotQuizTheme',
  leaderboard: 'aiIotQuizLeaderboard',
  history: 'aiIotQuizHistory',
  bookmarks: 'aiIotQuizBookmarks',
  achievements: 'aiIotQuizAchievements',
  dailyChallenge: 'aiIotQuizDailyChallenge',
  playerName: 'aiIotQuizPlayerName'
};

const DEFAULT_ACHIEVEMENTS = [
  { id: 'first-quiz', name: 'First Quiz', description: 'Complete your first round', unlocked: false },
  { id: 'perfect-score', name: 'Perfect Score', description: 'Score 100% in a quiz', unlocked: false },
  { id: 'speed-master', name: 'Speed Master', description: 'Finish a round quickly', unlocked: false },
  { id: 'streak-master', name: 'Streak Master', description: 'Reach a best streak of 10', unlocked: false },
  { id: 'ai-explorer', name: 'AI Explorer', description: 'Complete an AI quiz', unlocked: false },
  { id: 'iot-explorer', name: 'IoT Explorer', description: 'Complete an IoT quiz', unlocked: false },
  { id: 'quiz-champion', name: 'Quiz Champion', description: 'Complete 10 quizzes', unlocked: false }
];

const appState = {
  currentPage: 'home',
  userName: '',
  category: 'AI',
  difficulty: 'Easy',
  quizMode: 'Practice Mode',
  selectedQuestions: [],
  currentQuestionIndex: 0,
  selectedAnswers: [],
  correctCount: 0,
  wrongCount: 0,
  unansweredCount: 0,
  score: 0,
  percentage: 0,
  accuracy: 0,
  timeTaken: 0,
  timeLeft: 15,
  timerId: null,
  timerStartedAt: null,
  questionAnswered: false,
  quizStartTime: null,
  results: null,
  currentStreak: 0,
  bestStreak: 0,
  powerUps: { fiftyFifty: true, extraTime: true, skip: true },
  hintUsed: false,
  bookmarks: []
};

function initializeApp() {
  try {
    applyStoredTheme();
    bindUIEvents();
    initializeQuizDefaults();
    initHeroSlider();
    updateLeaderboard();
    updateHistory();
    loadBookmarks();
    updateAchievements();
    updateAnalytics();
    initDailyChallenge();
    renderDailyChallenge();
    showPage('home');
  } catch (error) {
    console.error('App initialization failed:', error);
    setConfigMessage('The app could not initialize correctly. Please refresh the page.');
  }
}

function initHeroSlider() {
  const slides = document.querySelectorAll('.feature-slide');
  const dots = document.querySelectorAll('.dot');

  if (!slides.length) return;

  let currentSlide = 0;
  const rotateSlides = () => {
    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === currentSlide);
    });

    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });

    currentSlide = (currentSlide + 1) % slides.length;
  };

  rotateSlides();
  setInterval(rotateSlides, 2600);
}

function bindUIEvents() {
  const startQuizBtn = document.getElementById('startQuizBtn');
  if (startQuizBtn) startQuizBtn.addEventListener('click', startQuiz);

  const startQuizBtnSecondary = document.getElementById('startQuizBtnSecondary');
  if (startQuizBtnSecondary) startQuizBtnSecondary.addEventListener('click', startQuiz);

  const howToPlayBtn = document.getElementById('howToPlayBtn');
  if (howToPlayBtn) {
    howToPlayBtn.addEventListener('click', () => {
      const panel = document.getElementById('howToPlayPanel');
      if (panel) panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  const viewLeaderboardBtn = document.getElementById('viewLeaderboardBtn');
  if (viewLeaderboardBtn) viewLeaderboardBtn.addEventListener('click', () => showPage('leaderboard'));

  const playDailyChallengeBtn = document.getElementById('playDailyChallengeBtn');
  if (playDailyChallengeBtn) playDailyChallengeBtn.addEventListener('click', startDailyChallenge);

  const retryQuizBtn = document.getElementById('retryQuizBtn');
  if (retryQuizBtn) retryQuizBtn.addEventListener('click', resetQuiz);

  const reviewAnswersBtn = document.getElementById('reviewAnswersBtn');
  if (reviewAnswersBtn) reviewAnswersBtn.addEventListener('click', () => {
    const container = document.getElementById('reviewAnswersContainer');
    if (container) container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  const homeBtn = document.getElementById('homeBtn');
  if (homeBtn) homeBtn.addEventListener('click', () => showPage('home'));

  const leaderboardBtn = document.getElementById('leaderboardBtn');
  if (leaderboardBtn) leaderboardBtn.addEventListener('click', () => showPage('leaderboard'));

  const historyBtn = document.getElementById('historyBtn');
  if (historyBtn) historyBtn.addEventListener('click', () => showPage('history'));

  const clearHistoryBtn = document.getElementById('clearHistoryBtn');
  if (clearHistoryBtn) clearHistoryBtn.addEventListener('click', clearHistory);

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);

  const nextQuestionBtn = document.getElementById('nextQuestionBtn');
  if (nextQuestionBtn) nextQuestionBtn.addEventListener('click', nextQuestion);

  const bookmarkBtn = document.getElementById('bookmarkBtn');
  if (bookmarkBtn) bookmarkBtn.addEventListener('click', toggleBookmark);

  const hintBtn = document.getElementById('hintBtn');
  if (hintBtn) hintBtn.addEventListener('click', useHint);

  const power50Btn = document.getElementById('power50Btn');
  if (power50Btn) power50Btn.addEventListener('click', () => usePowerUp('fiftyFifty'));

  const powerTimeBtn = document.getElementById('powerTimeBtn');
  if (powerTimeBtn) powerTimeBtn.addEventListener('click', () => usePowerUp('extraTime'));

  const powerSkipBtn = document.getElementById('powerSkipBtn');
  if (powerSkipBtn) powerSkipBtn.addEventListener('click', () => usePowerUp('skip'));

  document.querySelectorAll('[data-page]').forEach((button) => {
    button.addEventListener('click', () => {
      const page = button.dataset.page;
      if (page === 'quiz' && !appState.selectedQuestions.length) {
        setConfigMessage('Start a quiz from the Home page first.');
        showPage('home');
        return;
      }
      showPage(page);
    });
  });

  document.querySelectorAll('.leaderboard-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.leaderboard-tab').forEach((item) => item.classList.toggle('active', item === tab));
    });
  });

  document.querySelectorAll('input[name="category"]').forEach((input) => {
    input.addEventListener('change', () => {
      appState.category = input.value;
      updateSelectionState();
    });
  });

  document.querySelectorAll('input[name="difficulty"]').forEach((input) => {
    input.addEventListener('change', () => {
      appState.difficulty = input.value;
      updateSelectionState();
    });
  });

  document.querySelectorAll('input[name="quizMode"]').forEach((input) => {
    input.addEventListener('change', () => {
      appState.quizMode = input.value;
      updateSelectionState();
    });
  });
}

function initializeQuizDefaults() {
  const savedName = readStoredValue(STORAGE_KEYS.playerName, '');
  const input = document.getElementById('playerNameInput');
  if (savedName && input) {
    input.value = savedName;
    appState.userName = savedName;
  }

  appState.selectedQuestions = [];
  appState.currentQuestionIndex = 0;
  appState.selectedAnswers = [];
  appState.questionAnswered = false;
  appState.results = null;
  clearTimer();
  setConfigMessage('');
  updateSelectionState();
  updateQuizHeader();
}

function updateSelectionState() {
  document.querySelectorAll('[data-category-option]').forEach((label) => {
    const input = label.querySelector('input');
    label.classList.toggle('selected', input && input.checked);
  });

  document.querySelectorAll('[data-difficulty-option]').forEach((label) => {
    const input = label.querySelector('input');
    label.classList.toggle('selected', input && input.checked);
  });

  document.querySelectorAll('[data-mode-option]').forEach((label) => {
    const input = label.querySelector('input');
    label.classList.toggle('selected', input && input.checked);
  });
}

function startQuiz() {
  const playerNameInput = document.getElementById('playerNameInput');
  const playerName = playerNameInput ? playerNameInput.value.trim() : '';

  if (!playerName) {
    setConfigMessage('Please enter a player name before starting the quiz.');
    if (playerNameInput) playerNameInput.focus();
    return;
  }

  appState.userName = playerName;
  writeStoredValue(STORAGE_KEYS.playerName, playerName);

  appState.selectedQuestions = buildQuestionSet(appState.category, appState.difficulty, appState.quizMode);
  if (!appState.selectedQuestions.length) {
    setConfigMessage('No questions were available for the selected settings.');
    return;
  }

  resetSessionState();
  appState.quizStartTime = Date.now();
  showPage('quiz');
  loadQuestion();
}

function buildQuestionSet(category, difficulty, mode) {
  let pool = QUESTION_BANK.filter((question) => {
    const categoryMatches = category === 'Mixed' ? true : question.category === category || question.category === 'Mixed';
    const difficultyMatches = question.difficulty === difficulty;
    return categoryMatches && difficultyMatches;
  });

  if (!pool.length) {
    pool = QUESTION_BANK.filter((question) => category === 'Mixed' ? true : question.category === category || question.category === 'Mixed');
  }

  if (!pool.length) pool = QUESTION_BANK;

  const shuffled = shuffleArray(pool);
  let count = 6;

  if (mode === 'Quick Quiz') count = 5;
  if (mode === 'Timed Challenge') count = 8;
  if (mode === 'Survival Mode') count = 10;
  if (difficulty === 'Hard') count += 2;

  return shuffled.slice(0, Math.min(count, shuffled.length));
}

function resetSessionState() {
  appState.currentQuestionIndex = 0;
  appState.selectedAnswers = new Array(appState.selectedQuestions.length).fill(null);
  appState.correctCount = 0;
  appState.wrongCount = 0;
  appState.unansweredCount = 0;
  appState.score = 0;
  appState.currentStreak = 0;
  appState.bestStreak = 0;
  appState.questionAnswered = false;
  appState.hintUsed = false;
  appState.powerUps = { fiftyFifty: true, extraTime: true, skip: true };
  appState.timeLeft = appState.quizMode === 'Timed Challenge' ? 10 : 15;
  appState.timerStartedAt = null;
  appState.timeTaken = 0;
  appState.results = null;
  clearTimer();
  const nextButton = document.getElementById('nextQuestionBtn');
  if (nextButton) nextButton.classList.add('hidden');
  const feedbackBox = document.getElementById('feedbackBox');
  if (feedbackBox) {
    feedbackBox.textContent = '';
    feedbackBox.className = 'feedback-box';
  }
  renderPowerUps();
  updateQuizHeader();
}

function updateQuizHeader() {
  const scoreBadge = document.getElementById('scoreBadge');
  if (scoreBadge) scoreBadge.textContent = String(appState.score);

  const streakValue = document.getElementById('currentStreakValue');
  if (streakValue) streakValue.textContent = String(appState.currentStreak);

  const bestStreakValue = document.getElementById('bestStreakValue');
  if (bestStreakValue) bestStreakValue.textContent = String(appState.bestStreak);

  const quizModeValue = document.getElementById('quizModeValue');
  if (quizModeValue) quizModeValue.textContent = appState.quizMode;
}

function loadQuestion() {
  const totalQuestions = appState.selectedQuestions.length;
  if (!totalQuestions || appState.currentQuestionIndex >= totalQuestions) {
    finishQuiz();
    return;
  }

  clearTimer();
  const currentQuestion = appState.selectedQuestions[appState.currentQuestionIndex];

  appState.questionAnswered = false;
  appState.hintUsed = false;
  appState.timeLeft = appState.quizMode === 'Timed Challenge' ? 10 : 15;
  appState.timerStartedAt = Date.now();

  const questionMeta = document.getElementById('questionMeta');
  if (questionMeta) questionMeta.textContent = `Question ${appState.currentQuestionIndex + 1} of ${totalQuestions}`;

  const scoreBadge = document.getElementById('scoreBadge');
  if (scoreBadge) scoreBadge.textContent = String(appState.score);

  const questionText = document.getElementById('questionText');
  if (questionText) questionText.textContent = currentQuestion.question;

  const timerBadge = document.getElementById('timerBadge');
  if (timerBadge) {
    timerBadge.textContent = `${appState.timeLeft}s`;
    timerBadge.classList.remove('timer-warning', 'timer-danger');
  }

  const progressLabel = document.getElementById('progressLabel');
  if (progressLabel) progressLabel.textContent = `${Math.round(((appState.currentQuestionIndex + 1) / totalQuestions) * 100)}%`;

  const progressFill = document.getElementById('progressFill');
  if (progressFill) progressFill.style.width = `${((appState.currentQuestionIndex + 1) / totalQuestions) * 100}%`;

  const options = shuffleArray([...currentQuestion.options]);
  const optionsContainer = document.getElementById('optionsContainer');
  if (optionsContainer) {
    optionsContainer.innerHTML = '';
    options.forEach((option, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'answer-option';
      button.dataset.option = option;
      button.setAttribute('aria-label', `Answer option ${index + 1}: ${option}`);
      button.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${option}</span>`;
      button.addEventListener('click', () => selectAnswer(option));
      optionsContainer.appendChild(button);
    });
  }

  const feedbackBox = document.getElementById('feedbackBox');
  if (feedbackBox) {
    feedbackBox.textContent = 'Choose the best answer before time runs out.';
    feedbackBox.className = 'feedback-box';
  }

  const bookmarkBtn = document.getElementById('bookmarkBtn');
  if (bookmarkBtn) bookmarkBtn.textContent = isBookmarked(currentQuestion.question) ? 'Bookmarked' : 'Bookmark';

  const hintBtn = document.getElementById('hintBtn');
  if (hintBtn) hintBtn.disabled = false;

  const nextQuestionBtn = document.getElementById('nextQuestionBtn');
  if (nextQuestionBtn) nextQuestionBtn.classList.add('hidden');

  renderPowerUps();
  startTimer();
}

function startTimer() {
  clearTimer();
  appState.timerId = window.setInterval(() => {
    appState.timeLeft -= 1;
    const timerBadge = document.getElementById('timerBadge');
    if (timerBadge) {
      timerBadge.textContent = `${appState.timeLeft}s`;
      if (appState.timeLeft <= 5) timerBadge.classList.add('timer-warning');
      if (appState.timeLeft <= 3) {
        timerBadge.classList.remove('timer-warning');
        timerBadge.classList.add('timer-danger');
      }
    }

    if (appState.timeLeft <= 0) {
      handleTimeUp();
    }
  }, 1000);
}

function clearTimer() {
  if (appState.timerId) {
    window.clearInterval(appState.timerId);
    appState.timerId = null;
  }
}

function selectAnswer(selectedOption) {
  if (appState.questionAnswered) return;

  const currentQuestion = appState.selectedQuestions[appState.currentQuestionIndex];
  appState.questionAnswered = true;
  appState.selectedAnswers[appState.currentQuestionIndex] = selectedOption;
  clearTimer();

  const isCorrect = selectedOption === currentQuestion.correctAnswer;
  const answerButtons = document.querySelectorAll('.answer-option');

  answerButtons.forEach((button) => {
    const optionValue = button.dataset.option;
    const selected = optionValue === selectedOption;
    const correct = optionValue === currentQuestion.correctAnswer;

    button.disabled = true;
    button.classList.toggle('selected', selected);
    button.classList.toggle('correct', correct);
    button.classList.toggle('incorrect', selected && !correct);
  });

  const feedbackBox = document.getElementById('feedbackBox');
  if (isCorrect) {
    appState.correctCount += 1;
    appState.currentStreak += 1;
    appState.bestStreak = Math.max(appState.bestStreak, appState.currentStreak);
    appState.score += 100 + (appState.currentStreak - 1) * 10;
    if (feedbackBox) {
      feedbackBox.className = 'feedback-box success';
      feedbackBox.innerHTML = `<span class="feedback-title">Correct!</span><span>${currentQuestion.explanation}</span>`;
    }
  } else {
    appState.wrongCount += 1;
    appState.currentStreak = 0;
    appState.score = Math.max(0, appState.score - 25);
    if (feedbackBox) {
      feedbackBox.className = 'feedback-box error';
      feedbackBox.innerHTML = `<span class="feedback-title">Incorrect.</span><span>The correct answer was <strong>${currentQuestion.correctAnswer}</strong>. ${currentQuestion.explanation}</span>`;
    }
  }

  const scoreBadge = document.getElementById('scoreBadge');
  if (scoreBadge) scoreBadge.textContent = String(appState.score);

  const streakValue = document.getElementById('currentStreakValue');
  if (streakValue) streakValue.textContent = String(appState.currentStreak);

  const bestStreakValue = document.getElementById('bestStreakValue');
  if (bestStreakValue) bestStreakValue.textContent = String(appState.bestStreak);

  const nextQuestionBtn = document.getElementById('nextQuestionBtn');
  if (nextQuestionBtn) {
    nextQuestionBtn.classList.remove('hidden');
    nextQuestionBtn.textContent = appState.currentQuestionIndex === appState.selectedQuestions.length - 1 ? 'Finish Quiz' : 'Next Question';
  }
}

function handleTimeUp() {
  if (appState.questionAnswered) return;

  const currentQuestion = appState.selectedQuestions[appState.currentQuestionIndex];
  appState.questionAnswered = true;
  appState.selectedAnswers[appState.currentQuestionIndex] = null;
  appState.unansweredCount += 1;
  appState.currentStreak = 0;
  clearTimer();

  const answerButtons = document.querySelectorAll('.answer-option');
  answerButtons.forEach((button) => {
    const isCorrect = button.dataset.option === currentQuestion.correctAnswer;
    button.disabled = true;
    button.classList.toggle('correct', isCorrect);
  });

  const feedbackBox = document.getElementById('feedbackBox');
  if (feedbackBox) {
    feedbackBox.className = 'feedback-box error';
    feedbackBox.innerHTML = `<span class="feedback-title">Time's up!</span><span>The correct answer was <strong>${currentQuestion.correctAnswer}</strong>. ${currentQuestion.explanation}</span>`;
  }

  const nextQuestionBtn = document.getElementById('nextQuestionBtn');
  if (nextQuestionBtn) {
    nextQuestionBtn.classList.remove('hidden');
    nextQuestionBtn.textContent = appState.currentQuestionIndex === appState.selectedQuestions.length - 1 ? 'Finish Quiz' : 'Next Question';
  }
}

function nextQuestion() {
  if (!appState.questionAnswered && appState.timeLeft > 0) {
    handleTimeUp();
  }

  if (appState.currentQuestionIndex < appState.selectedQuestions.length - 1) {
    appState.currentQuestionIndex += 1;
    loadQuestion();
    return;
  }

  finishQuiz();
}

function finishQuiz() {
  clearTimer();

  const totalQuestions = appState.selectedQuestions.length || 1;
  const answeredCount = appState.correctCount + appState.wrongCount;

  appState.percentage = Math.round((appState.correctCount / totalQuestions) * 100);
  appState.accuracy = answeredCount > 0 ? Math.round((appState.correctCount / answeredCount) * 100) : 0;
  appState.timeTaken = appState.quizStartTime ? Math.max(0, Math.round((Date.now() - appState.quizStartTime) / 1000)) : 0;

  const results = calculateResults();
  appState.results = results;
  saveResult(results);
  updateLeaderboard();
  updateHistory();
  renderResults(results);
  updateAchievements();
  updateAnalytics();
  showPage('results');
}

function calculateResults() {
  const totalQuestions = appState.selectedQuestions.length || 1;
  const answeredCount = appState.correctCount + appState.wrongCount;
  const unanswered = Math.max(0, totalQuestions - answeredCount);

  return {
    playerName: appState.userName,
    score: Math.max(0, appState.score),
    percentage: appState.percentage,
    accuracy: appState.accuracy,
    correct: appState.correctCount,
    wrong: appState.wrongCount,
    unanswered,
    category: appState.category,
    difficulty: appState.difficulty,
    mode: appState.quizMode,
    bestStreak: appState.bestStreak,
    timeTaken: appState.timeTaken,
    averageTime: appState.quizStartTime ? Math.round((appState.timeTaken / totalQuestions) * 10) / 10 : 0,
    date: new Date().toISOString(),
    reviewAnswers: appState.selectedQuestions.map((question, index) => ({
      question: question.question,
      userAnswer: appState.selectedAnswers[index] || 'No answer',
      correctAnswer: question.correctAnswer,
      explanation: question.explanation,
      isCorrect: appState.selectedAnswers[index] === question.correctAnswer,
      category: question.category,
      difficulty: question.difficulty
    }))
  };
}

function renderResults(results) {
  const resultTitle = document.getElementById('resultTitle');
  if (resultTitle) resultTitle.textContent = `${results.playerName}'s Results`;

  const finalScore = document.getElementById('finalScore');
  if (finalScore) finalScore.textContent = String(results.score);

  const resultScore = document.getElementById('resultScore');
  if (resultScore) resultScore.textContent = String(results.score);

  const resultPercentage = document.getElementById('resultPercentage');
  if (resultPercentage) resultPercentage.textContent = `${results.percentage}%`;

  const resultAccuracy = document.getElementById('resultAccuracy');
  if (resultAccuracy) resultAccuracy.textContent = `${results.accuracy}%`;

  const resultCorrect = document.getElementById('resultCorrect');
  if (resultCorrect) resultCorrect.textContent = String(results.correct);

  const resultWrong = document.getElementById('resultWrong');
  if (resultWrong) resultWrong.textContent = String(results.wrong);

  const resultUnanswered = document.getElementById('resultUnanswered');
  if (resultUnanswered) resultUnanswered.textContent = String(results.unanswered);

  const resultAverageTime = document.getElementById('resultAverageTime');
  if (resultAverageTime) resultAverageTime.textContent = `${results.averageTime}s`;

  const resultBestStreak = document.getElementById('resultBestStreak');
  if (resultBestStreak) resultBestStreak.textContent = String(results.bestStreak);

  const resultMode = document.getElementById('resultMode');
  if (resultMode) resultMode.textContent = results.mode;

  const performanceMessage = document.getElementById('performanceMessage');
  if (performanceMessage) performanceMessage.textContent = getPerformanceMessage(results.percentage);

  const reviewContainer = document.getElementById('reviewAnswersContainer');
  if (reviewContainer) {
    reviewContainer.innerHTML = results.reviewAnswers.map((entry, index) => `
      <article class="review-card ${entry.isCorrect ? 'correct' : 'incorrect'}">
        <h4>Q${index + 1}: ${escapeHtml(entry.question)}</h4>
        <div class="review-meta">
          <div><strong>Your answer:</strong> ${escapeHtml(entry.userAnswer)}</div>
          <div><strong>Correct answer:</strong> ${escapeHtml(entry.correctAnswer)}</div>
          <div><strong>Status:</strong> ${entry.isCorrect ? 'Correct' : 'Incorrect'}</div>
          <div><strong>Explanation:</strong> ${escapeHtml(entry.explanation)}</div>
        </div>
      </article>
    `).join('');
  }
}

function getPerformanceMessage(percentage) {
  if (percentage >= 90) return 'Excellent! Outstanding performance.';
  if (percentage >= 75) return 'Great job! You have a strong understanding.';
  if (percentage >= 50) return 'Good attempt. A little more practice will unlock even better results.';
  return 'Keep practicing. Review the explanations and try again.';
}

function saveResult(result) {
  try {
    const history = readStoredArray(STORAGE_KEYS.history, []);
    history.push({
      player: result.playerName,
      category: result.category,
      difficulty: result.difficulty,
      mode: result.mode,
      score: result.score,
      accuracy: result.accuracy,
      bestStreak: result.bestStreak,
      date: result.date,
      correct: result.correct,
      wrong: result.wrong,
      unanswered: result.unanswered,
      reviewAnswers: result.reviewAnswers,
      percentage: result.percentage
    });
    writeStoredValue(STORAGE_KEYS.history, history);
  } catch (error) {
    console.error('saveResult failed:', error);
  }
}

function updateLeaderboard() {
  try {
    const existing = readStoredArray(STORAGE_KEYS.leaderboard, []);
    const latest = appState.results || null;
    const entries = latest ? [...existing, {
      playerName: latest.playerName,
      score: latest.score,
      percentage: latest.percentage,
      category: latest.category,
      difficulty: latest.difficulty,
      date: latest.date
    }] : existing;

    const ranked = entries
      .filter((entry) => entry && entry.playerName && entry.playerName.trim())
      .map((entry) => ({
        playerName: entry.playerName,
        score: Number(entry.score) || 0,
        percentage: Number(entry.percentage) || 0,
        category: entry.category || 'Mixed',
        difficulty: entry.difficulty || 'Medium',
        date: entry.date || new Date().toISOString()
      }))
      .sort((a, b) => b.score - a.score || b.percentage - a.percentage)
      .slice(0, 5);

    writeStoredValue(STORAGE_KEYS.leaderboard, ranked);
    renderLeaderboard(ranked);
  } catch (error) {
    console.error('updateLeaderboard failed:', error);
    renderLeaderboard([]);
  }
}

function renderLeaderboard(entries) {
  const body = document.getElementById('leaderboardTableBody');
  if (!body) return;

  if (!entries.length) {
    body.innerHTML = '<tr><td colspan="7" class="empty-state">No local leaderboard entries yet.</td></tr>';
    return;
  }

  body.innerHTML = entries.map((entry, index) => `
    <tr>
      <td>#${index + 1}</td>
      <td>${escapeHtml(entry.playerName)}</td>
      <td>${entry.score}</td>
      <td>${entry.percentage}%</td>
      <td>${escapeHtml(entry.category)}</td>
      <td>${escapeHtml(entry.difficulty)}</td>
      <td>${formatDate(entry.date)}</td>
    </tr>
  `).join('');
}

function updateHistory() {
  try {
    const history = readStoredArray(STORAGE_KEYS.history, []);
    renderHistory(history);
  } catch (error) {
    console.error('updateHistory failed:', error);
    renderHistory([]);
  }
}

function renderHistory(entries) {
  const body = document.getElementById('historyTableBody');
  if (!body) return;

  if (!entries.length) {
    body.innerHTML = '<tr><td colspan="8" class="empty-state">No quiz attempts recorded yet.</td></tr>';
    return;
  }

  body.innerHTML = entries.map((entry, index) => `
    <tr>
      <td>${escapeHtml(entry.player || 'Unknown')}</td>
      <td>${formatDate(entry.date)}</td>
      <td>${escapeHtml(entry.category || 'Mixed')}</td>
      <td>${escapeHtml(entry.difficulty || 'Medium')}</td>
      <td>${escapeHtml(entry.mode || 'Practice')}</td>
      <td>${entry.score || 0}</td>
      <td>${entry.accuracy || 0}%</td>
      <td><button type="button" class="secondary-btn" data-history-review="${index}">Review</button></td>
    </tr>
  `).join('');

  document.querySelectorAll('[data-history-review]').forEach((button) => {
    button.addEventListener('click', () => {
      const saved = readStoredArray(STORAGE_KEYS.history, []);
      const selected = saved[Number(button.dataset.historyReview)];
      if (!selected) return;
      renderResultsFromEntry(selected);
      showPage('results');
    });
  });
}

function renderResultsFromEntry(entry) {
  const summary = {
    playerName: entry.player || 'Player',
    score: entry.score || 0,
    percentage: entry.percentage || entry.accuracy || 0,
    accuracy: entry.accuracy || 0,
    correct: entry.correct || 0,
    wrong: entry.wrong || 0,
    unanswered: entry.unanswered || 0,
    category: entry.category || 'Mixed',
    difficulty: entry.difficulty || 'Medium',
    mode: entry.mode || 'Practice',
    bestStreak: entry.bestStreak || 0,
    averageTime: 0,
    date: entry.date,
    reviewAnswers: Array.isArray(entry.reviewAnswers) ? entry.reviewAnswers : []
  };

  renderResults(summary);
}

function clearHistory() {
  const confirmed = window.confirm('Clear all saved quiz history? This action cannot be undone.');
  if (!confirmed) return;

  localStorage.removeItem(STORAGE_KEYS.history);
  updateHistory();
}

function toggleTheme() {
  const nextTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
  document.body.dataset.theme = nextTheme;
  const icon = document.querySelector('.theme-icon');
  if (icon) icon.textContent = nextTheme === 'dark' ? '☀️' : '🌙';

  const toggleButton = document.getElementById('themeToggle');
  if (toggleButton) toggleButton.setAttribute('title', nextTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');

  writeStoredValue(STORAGE_KEYS.theme, nextTheme);
}

function applyStoredTheme() {
  const stored = readStoredValue(STORAGE_KEYS.theme, 'light');
  const theme = stored === 'dark' ? 'dark' : 'light';
  document.body.dataset.theme = theme;
  const icon = document.querySelector('.theme-icon');
  if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';

  const toggleButton = document.getElementById('themeToggle');
  if (toggleButton) toggleButton.setAttribute('title', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}

function usePowerUp(type) {
  if (!appState.powerUps[type] || appState.questionAnswered) return;

  if (type === 'fiftyFifty') {
    const currentQuestion = appState.selectedQuestions[appState.currentQuestionIndex];
    const wrongOptions = currentQuestion.options.filter((option) => option !== currentQuestion.correctAnswer);
    const survivors = shuffleArray(wrongOptions).slice(0, 1);
    const visibleOptions = shuffleArray([currentQuestion.correctAnswer, ...survivors]);

    const optionsContainer = document.getElementById('optionsContainer');
    if (optionsContainer) {
      optionsContainer.innerHTML = '';
      visibleOptions.forEach((option, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'answer-option';
        button.dataset.option = option;
        button.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${option}</span>`;
        button.addEventListener('click', () => selectAnswer(option));
        optionsContainer.appendChild(button);
      });
    }
  }

  if (type === 'extraTime') {
    appState.timeLeft += 5;
    const timerBadge = document.getElementById('timerBadge');
    if (timerBadge) timerBadge.textContent = `${appState.timeLeft}s`;
  }

  if (type === 'skip') {
    appState.currentQuestionIndex += 1;
    appState.powerUps.skip = false;
    if (appState.currentQuestionIndex < appState.selectedQuestions.length) {
      loadQuestion();
      return;
    }
    finishQuiz();
    return;
  }

  appState.powerUps[type] = false;
  renderPowerUps();
}

function renderPowerUps() {
  const powerMap = {
    fiftyFifty: document.getElementById('power50Btn'),
    extraTime: document.getElementById('powerTimeBtn'),
    skip: document.getElementById('powerSkipBtn')
  };

  Object.entries(powerMap).forEach(([key, button]) => {
    if (!button) return;
    button.disabled = !appState.powerUps[key];
    button.style.opacity = appState.powerUps[key] ? '1' : '0.4';
  });
}

function useHint() {
  if (appState.hintUsed || appState.questionAnswered) return;

  const currentQuestion = appState.selectedQuestions[appState.currentQuestionIndex];
  if (!currentQuestion) return;

  appState.hintUsed = true;
  appState.score = Math.max(0, appState.score - 10);
  const scoreBadge = document.getElementById('scoreBadge');
  if (scoreBadge) scoreBadge.textContent = String(appState.score);

  const hintBtn = document.getElementById('hintBtn');
  if (hintBtn) hintBtn.disabled = true;

  const feedbackBox = document.getElementById('feedbackBox');
  if (feedbackBox) {
    feedbackBox.className = 'feedback-box';
    feedbackBox.innerHTML = `<span class="feedback-title">Hint used.</span><span>${currentQuestion.topic || 'This concept is important in modern AI and IoT systems.'}</span>`;
  }
}

function toggleBookmark() {
  const currentQuestion = appState.selectedQuestions[appState.currentQuestionIndex];
  if (!currentQuestion) return;

  const list = readStoredArray(STORAGE_KEYS.bookmarks, []);
  const existingIndex = list.findIndex((item) => item.question === currentQuestion.question);

  if (existingIndex >= 0) {
    list.splice(existingIndex, 1);
  } else {
    list.push({
      question: currentQuestion.question,
      category: currentQuestion.category,
      difficulty: currentQuestion.difficulty,
      topic: currentQuestion.topic,
      answer: currentQuestion.correctAnswer,
      explanation: currentQuestion.explanation
    });
  }

  writeStoredValue(STORAGE_KEYS.bookmarks, list);
  loadBookmarks();

  const bookmarkBtn = document.getElementById('bookmarkBtn');
  if (bookmarkBtn) bookmarkBtn.textContent = isBookmarked(currentQuestion.question) ? 'Bookmarked' : 'Bookmark';
}

function loadBookmarks() {
  const bookmarks = readStoredArray(STORAGE_KEYS.bookmarks, []);
  appState.bookmarks = bookmarks;

  const container = document.getElementById('bookmarksContainer');
  if (!container) return;

  if (!bookmarks.length) {
    container.innerHTML = '<div class="empty-state">No bookmarks saved yet.</div>';
    return;
  }

  container.innerHTML = bookmarks.map((bookmark, index) => `
    <div class="bookmark-item">
      <div>
        <strong>${escapeHtml(bookmark.question)}</strong>
        <div class="daily-status">${escapeHtml(bookmark.category)} · ${escapeHtml(bookmark.difficulty)} · ${escapeHtml(bookmark.topic || 'General')}</div>
      </div>
      <div class="bookmark-actions">
        <button type="button" class="secondary-btn" data-bookmark-practice="${index}">Practice</button>
        <button type="button" class="danger-btn" data-bookmark-remove="${index}">Remove</button>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('[data-bookmark-practice]').forEach((button) => {
    button.addEventListener('click', () => {
      const item = bookmarks[Number(button.dataset.bookmarkPractice)];
      if (!item) return;

      const fakeQuestion = {
        question: item.question,
        options: [item.answer, 'Example distractor A', 'Example distractor B', 'Example distractor C'],
        correctAnswer: item.answer,
        explanation: item.explanation,
        category: item.category,
        difficulty: item.difficulty,
        topic: item.topic
      };

      appState.selectedQuestions = [fakeQuestion];
      appState.category = item.category || 'Mixed';
      appState.difficulty = item.difficulty || 'Medium';
      appState.quizMode = 'Practice Mode';
      resetSessionState();
      showPage('quiz');
      loadQuestion();
    });
  });

  document.querySelectorAll('[data-bookmark-remove]').forEach((button) => {
    button.addEventListener('click', () => {
      const index = Number(button.dataset.bookmarkRemove);
      const next = bookmarks.filter((_, itemIndex) => itemIndex !== index);
      writeStoredValue(STORAGE_KEYS.bookmarks, next);
      loadBookmarks();
    });
  });
}

function isBookmarked(questionText) {
  const current = readStoredArray(STORAGE_KEYS.bookmarks, []);
  return current.some((item) => item.question === questionText);
}

function updateAchievements() {
  let achievements = readStoredArray(STORAGE_KEYS.achievements, []);
  if (!achievements.length) {
    achievements = DEFAULT_ACHIEVEMENTS.map((item) => ({ ...item }));
  }

  const history = readStoredArray(STORAGE_KEYS.history, []);
  const totalQuizzes = history.length;
  const bestStreak = history.reduce((best, item) => Math.max(best, Number(item.bestStreak) || 0), 0);
  const aiCount = history.filter((item) => item.category === 'AI').length;
  const iotCount = history.filter((item) => item.category === 'IoT').length;

  const nextAchievements = DEFAULT_ACHIEVEMENTS.map((achievement) => {
    const unlocked = {
      'first-quiz': totalQuizzes >= 1,
      'perfect-score': history.some((item) => Number(item.accuracy) >= 100),
      'speed-master': history.some((item) => Number(item.score) >= 500),
      'streak-master': bestStreak >= 10,
      'ai-explorer': aiCount > 0,
      'iot-explorer': iotCount > 0,
      'quiz-champion': totalQuizzes >= 10
    }[achievement.id] || achievement.unlocked;

    return { ...achievement, unlocked };
  });

  writeStoredValue(STORAGE_KEYS.achievements, nextAchievements);

  const container = document.getElementById('achievementsContainer');
  if (!container) return;

  container.innerHTML = nextAchievements.map((achievement) => `
    <div class="achievement-item ${achievement.unlocked ? 'unlocked' : 'locked'}">
      <div>
        <strong>${escapeHtml(achievement.name)}</strong>
        <div class="daily-status">${escapeHtml(achievement.description)}</div>
      </div>
      <div class="achievement-meta">
        <span>${achievement.unlocked ? 'Unlocked' : 'Locked'}</span>
      </div>
    </div>
  `).join('');
}

function updateAnalytics() {
  const history = readStoredArray(STORAGE_KEYS.history, []);
  const totalQuizzes = history.length;
  const averageScore = totalQuizzes ? Math.round(history.reduce((sum, item) => sum + Number(item.score || 0), 0) / totalQuizzes) : 0;
  const averageAccuracy = totalQuizzes ? Math.round(history.reduce((sum, item) => sum + Number(item.accuracy || 0), 0) / totalQuizzes) : 0;
  const bestScore = history.reduce((best, item) => Math.max(best, Number(item.score || 0)), 0);
  const bestStreak = history.reduce((best, item) => Math.max(best, Number(item.bestStreak || 0)), 0);

  const summary = document.getElementById('analyticsSummary');
  if (summary) {
    summary.innerHTML = `
      <div class="summary-box"><span>Total Quizzes</span><strong>${totalQuizzes}</strong></div>
      <div class="summary-box"><span>Avg. Score</span><strong>${averageScore}</strong></div>
      <div class="summary-box"><span>Best Score</span><strong>${bestScore}</strong></div>
      <div class="summary-box"><span>Avg. Accuracy</span><strong>${averageAccuracy}%</strong></div>
      <div class="summary-box"><span>Best Streak</span><strong>${bestStreak}</strong></div>
    `;
  }

  renderBarChart('categoryBarChart', getCategoryAccuracy(history));
  renderBarChart('difficultyBarChart', getDifficultyAccuracy(history));

  const weakTopicSection = document.getElementById('weakTopicAnalysis');
  if (weakTopicSection) {
    const suggestions = getWeakTopicRecommendations(history);
    weakTopicSection.innerHTML = suggestions.length
      ? `<h3>Recommended Practice</h3>${suggestions.map((item) => `<p>${escapeHtml(item)}</p>`).join('')}`
      : '<h3>Recommended Practice</h3><p>No data yet. Complete a few quizzes to unlock insights.</p>';
  }
}

function renderBarChart(id, data) {
  const element = document.getElementById(id);
  if (!element) return;

  if (!data.length) {
    element.innerHTML = '<div class="empty-state">No data available yet.</div>';
    return;
  }

  const maxValue = Math.max(...data.map((item) => item.value), 100);
  element.innerHTML = data.map((item) => `
    <div class="bar-row">
      <span>${escapeHtml(item.label)}</span>
      <div class="bar-track"><span class="bar-fill" style="width: ${(item.value / maxValue) * 100}%"></span></div>
      <strong>${item.value}%</strong>
    </div>
  `).join('');
}

function getCategoryAccuracy(history) {
  const groups = { AI: [], IoT: [], Mixed: [] };
  history.forEach((entry) => {
    if (groups[entry.category]) groups[entry.category].push(Number(entry.accuracy) || 0);
  });

  return Object.entries(groups)
    .filter(([, values]) => values.length)
    .map(([label, values]) => ({ label, value: Math.round(values.reduce((sum, value) => sum + value, 0) / values.length) }));
}

function getDifficultyAccuracy(history) {
  const groups = { Easy: [], Medium: [], Hard: [] };
  history.forEach((entry) => {
    if (groups[entry.difficulty]) groups[entry.difficulty].push(Number(entry.accuracy) || 0);
  });

  return Object.entries(groups)
    .filter(([, values]) => values.length)
    .map(([label, values]) => ({ label, value: Math.round(values.reduce((sum, value) => sum + value, 0) / values.length) }));
}

function getWeakTopicRecommendations(history) {
  if (!history.length) return ['No data yet. Complete a round to receive practice suggestions.'];

  const suggestions = [];
  const aiEntries = history.filter((entry) => entry.category === 'AI');
  const iotEntries = history.filter((entry) => entry.category === 'IoT');

  if (aiEntries.length) {
    const aiAverage = Math.round(aiEntries.reduce((sum, entry) => sum + Number(entry.accuracy || 0), 0) / aiEntries.length);
    suggestions.push(`AI accuracy is ${aiAverage}%. ${aiAverage < 70 ? 'Focus on machine learning basics, model evaluation, and neural network concepts.' : 'Strong AI performance. Continue exploring advanced learning and decision systems.'}`);
  }

  if (iotEntries.length) {
    const iotAverage = Math.round(iotEntries.reduce((sum, entry) => sum + Number(entry.accuracy || 0), 0) / iotEntries.length);
    suggestions.push(`IoT accuracy is ${iotAverage}%. ${iotAverage < 70 ? 'Review sensors, connectivity, edge computing, and security topics.' : 'Strong IoT understanding. Explore advanced gateways, analytics, and architecture patterns.'}`);
  }

  return suggestions;
}

function initDailyChallenge() {
  const today = getTodayKey();
  const saved = readStoredValue(STORAGE_KEYS.dailyChallenge, null);
  if (!saved || saved.date !== today) {
    const challenge = generateDailyChallenge();
    writeStoredValue(STORAGE_KEYS.dailyChallenge, challenge);
  }
}

function generateDailyChallenge() {
  const today = getTodayKey();
  const challengePool = QUESTION_BANK.filter((item) => item.category === 'AI' || item.category === 'IoT');
  const selected = shuffleArray(challengePool).slice(0, 5);
  return {
    date: today,
    category: selected[0]?.category || 'AI',
    difficulty: 'Medium',
    mode: 'Timed Challenge',
    questions: selected.map((item) => item.question)
  };
}

function renderDailyChallenge() {
  const info = document.getElementById('dailyChallengeInfo');
  if (!info) return;

  const challenge = readStoredValue(STORAGE_KEYS.dailyChallenge, null);
  if (!challenge) {
    info.innerHTML = '<div class="daily-pill"><span>Challenge unavailable</span><span class="daily-status">No challenge created</span></div>';
    return;
  }

  info.innerHTML = `
    <div class="daily-pill"><span>Category</span><strong>${escapeHtml(challenge.category || 'AI')}</strong></div>
    <div class="daily-pill"><span>Difficulty</span><strong>${escapeHtml(challenge.difficulty || 'Medium')}</strong></div>
    <div class="daily-pill"><span>Mode</span><strong>${escapeHtml(challenge.mode || 'Timed Challenge')}</strong></div>
    <div class="daily-pill"><span>Questions</span><strong>${(challenge.questions || []).length}</strong></div>
  `;
}

function startDailyChallenge() {
  const challenge = readStoredValue(STORAGE_KEYS.dailyChallenge, null);
  if (!challenge) {
    setConfigMessage('The daily challenge is not available yet.');
    return;
  }

  const questionSet = QUESTION_BANK.filter((item) => challenge.questions.includes(item.question)).slice(0, 5);
  if (!questionSet.length) {
    setConfigMessage('The daily challenge question set could not be loaded.');
    return;
  }

  appState.category = challenge.category || 'AI';
  appState.difficulty = challenge.difficulty || 'Medium';
  appState.quizMode = challenge.mode || 'Timed Challenge';
  appState.selectedQuestions = shuffleArray(questionSet);
  resetSessionState();
  appState.quizStartTime = Date.now();
  showPage('quiz');
  loadQuestion();
}

function resetQuiz() {
  clearTimer();
  appState.selectedQuestions = [];
  appState.currentQuestionIndex = 0;
  appState.selectedAnswers = [];
  appState.correctCount = 0;
  appState.wrongCount = 0;
  appState.unansweredCount = 0;
  appState.score = 0;
  appState.currentStreak = 0;
  appState.bestStreak = 0;
  appState.results = null;
  const nextQuestionBtn = document.getElementById('nextQuestionBtn');
  if (nextQuestionBtn) nextQuestionBtn.classList.add('hidden');
  showPage('home');
  setConfigMessage('');
}

function showPage(page) {
  const targetPage = page || 'home';

  if (targetPage === 'quiz' && !appState.selectedQuestions.length) {
    setConfigMessage('Start a quiz from the Home page to begin a round.');
    showPage('home');
    return;
  }

  document.querySelectorAll('.page-panel').forEach((panel) => {
    panel.classList.toggle('active', panel.id === `${targetPage}Page`);
  });

  document.querySelectorAll('.nav-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.page === targetPage);
  });

  appState.currentPage = targetPage;
}

function setConfigMessage(message) {
  const messageBox = document.getElementById('configMessage');
  if (!messageBox) return;
  messageBox.textContent = message;
}

function getTodayKey() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function shuffleArray(items) {
  const list = [...items];
  for (let index = list.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [list[index], list[randomIndex]] = [list[randomIndex], list[index]];
  }
  return list;
}

function writeStoredValue(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Unable to write localStorage key: ${key}`, error);
  }
}

function readStoredValue(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch (error) {
    console.error(`Unable to read localStorage key: ${key}`, error);
    return fallback;
  }
}

function readStoredArray(key, fallback) {
  try {
    const value = readStoredValue(key, fallback);
    return Array.isArray(value) ? value : fallback;
  } catch (error) {
    console.error(`Unable to read array key: ${key}`, error);
    return fallback;
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatDate(dateString) {
  try {
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) return 'Unknown';
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  } catch (error) {
    return 'Unknown';
  }
}

window.addEventListener('beforeunload', clearTimer);
initializeApp();
