const questions = [
  {
    question: "What is AI?",
    options: ["Artificial Intelligence", "Advanced Internet", "Artificial Invention", "Automated Interface"],
    correct: ["Artificial Intelligence"]
  },
  {
    question: "What is IoT?",
    options: ["Internet of Trees", "Internet of Things", "Internal Output Technology", "Internet Over Time"],
    correct: ["Internet of Things"]
  },
  {
    question: "Which of these is a common use of IoT?",
    options: ["Email marketing", "Smart homes", "Gaming", "Web browsing"],
    correct: ["Smart homes"]
  },
  {
    question: "Which programming language is widely used in AI?",
    options: ["HTML", "Python", "CSS", "SQL"],
    correct: ["Python"]
  },
  {
    question: "Which of these is an AI application?",
    options: ["Face Recognition", "MS Paint", "Calculator", "Notepad"],
    correct: ["Face Recognition"]
  }
];

let currentIndex = 0;
let score = 0;
let selectedAnswers = new Array(questions.length).fill([]);
let userName = '';
let timeLeft = 15;
let timer;

function startQuiz() {
  const input = document.getElementById("userNameInput").value.trim();
  if (!input) {
    alert("Please enter your name to start the quiz.");
    return;
  }
  userName = input;
  document.getElementById("startPage").style.display = "none";
  document.getElementById("quizContainer").style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  clearInterval(timer);
  timeLeft = 15;
  document.getElementById("timerCircle").innerText = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timerCircle").innerText = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);

  const q = questions[currentIndex];
  document.getElementById("questionBox").innerText = `Q${currentIndex + 1}: ${q.question}`;

  const optionsHTML = q.options.map(opt => {
    const isChecked = selectedAnswers[currentIndex].includes(opt) ? 'checked' : '';
    return `<label><input type="checkbox" name="option" value="${opt}" ${isChecked}/> ${opt}</label>`;
  }).join("");
  document.getElementById("optionsBox").innerHTML = optionsHTML;

  document.getElementById("submitBtn").style.display = (currentIndex === questions.length - 1) ? "inline-block" : "none";
  document.getElementById("nextBtn").style.display = (currentIndex < questions.length - 1) ? "inline-block" : "none";
  document.getElementById("prevBtn").style.display = (currentIndex > 0) ? "inline-block" : "none";
}

function nextQuestion() {
  saveAnswer();
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  }
}

function prevQuestion() {
  saveAnswer();
  if (currentIndex > 0) {
    currentIndex--;
    loadQuestion();
  }
}

function saveAnswer() {
  const selected = Array.from(document.querySelectorAll(`input[name='option']:checked`)).map(el => el.value);
  selectedAnswers[currentIndex] = selected;
}

function submitAnswer() {
  saveAnswer();
  score = 0;
  const result = document.getElementById("resultBox");
  result.innerHTML = "";

  questions.forEach((q, index) => {
    const selected = selectedAnswers[index];
    const correct = q.correct;
    let questionResult = `<h3>Q${index + 1}: ${q.question}</h3>`;
    q.options.forEach(opt => {
      if (correct.includes(opt) && selected.includes(opt)) {
        questionResult += `<p style="color:green;">✔ ${opt}</p>`;
      } else if (selected.includes(opt)) {
        questionResult += `<p style="color:red;">✖ ${opt}</p>`;
      } else if (correct.includes(opt)) {
        questionResult += `<p style="color:green;">✔ ${opt}</p>`;
      } else {
        questionResult += `<p>${opt}</p>`;
      }
    });
    if (JSON.stringify(correct.sort()) === JSON.stringify(selected.sort())) {
      score++;
    }
    result.innerHTML += questionResult + "<hr/>";
  });

  document.getElementById("scoreBox").innerText = `👤 ${userName} | Score: ${score} / ${questions.length}`;
  document.getElementById("exportBtn").style.display = "inline-block";
  document.getElementById("retryQuizBtn").style.display = "inline-block";
  document.getElementById("submitBtn").style.display = "none";
  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("prevBtn").style.display = "none";
  clearInterval(timer);
}

function exportScore() {
  let text = `Quiz Result for ${userName}\nScore: ${score} / ${questions.length}\n\n`;
  questions.forEach((q, index) => {
    text += `Q${index + 1}: ${q.question}\nYour Answer: ${selectedAnswers[index].join(", ") || "None"}\nCorrect Answer: ${q.correct.join(", ")}\n\n`;
  });

  const blob = new Blob([text], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${userName}_quiz_result.txt`;
  link.click();
}

function retryQuiz() {
  location.reload();
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

window.onload = () => {
  document.getElementById("quizContainer").style.display = "none";
};
