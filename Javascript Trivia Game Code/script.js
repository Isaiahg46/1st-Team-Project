// Questions Array with Explanations
const questions = [
    {
      question: "What is the capital of France?",
      answers: { a: "Paris", b: "Rome", c: "Berlin", d: "Madrid" },
      correct: "a",
      explanation: "Paris is the capital of France and is known as the 'City of Light.'"
    },
    {
      question: "What is 2 + 2?",
      answers: { a: "3", b: "4", c: "5", d: "22" },
      correct: "b",
      explanation: "2 + 2 equals 4. Basic math!"
    },
    {
      question: "Who wrote 'Hamlet'?",
      answers: { a: "Charles Dickens", b: "William Shakespeare", c: "Leo Tolstoy", d: "Mark Twain" },
      correct: "b",
      explanation: "'Hamlet' is one of William Shakespeare's most famous plays."
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: { a: "Earth", b: "Venus", c: "Mars", d: "Jupiter" },
      correct: "c",
      explanation: "Mars is called the Red Planet due to its reddish appearance caused by iron oxide."
    },
    {
      question: "What is the largest ocean on Earth?",
      answers: { a: "Atlantic", b: "Indian", c: "Arctic", d: "Pacific" },
      correct: "d",
      explanation: "The Pacific Ocean is the largest, covering over 63 million square miles."
    }
  ];
  
  let shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  let currentQuestionIndex = 0;
  let score = parseInt(localStorage.getItem("score")) || 0;
  
  const questionText = document.getElementById("question-text");
  const answersContainer = document.getElementById("answers");
  const nextButton = document.getElementById("next-question");
  const scoreDisplay = document.getElementById("score-display");
  
  loadQuestion();
  
  function loadQuestion() {
    const question = shuffledQuestions[currentQuestionIndex];
    questionText.textContent = question.question;
  
    answersContainer.innerHTML = "";
  
    for (let key in question.answers) {
      const button = document.createElement("button");
      button.classList.add("list-group-item", "list-group-item-action");
      button.textContent = `${key}: ${question.answers[key]}`;
      button.onclick = () => handleAnswer(key);
      answersContainer.appendChild(button);
    }
  
    nextButton.classList.add("hidden");
  }
  
  function handleAnswer(selectedAnswer) {
    const question = shuffledQuestions[currentQuestionIndex];
    const explanation = document.createElement("p");
    explanation.classList.add("mt-3", "alert", "alert-info");
  
    if (selectedAnswer === question.correct) {
      score++;
      localStorage.setItem("score", score);
      explanation.textContent = `Correct! ${question.explanation}`;
    } else {
      explanation.textContent = `Incorrect. The correct answer is ${question.correct.toUpperCase()}: ${question.answers[question.correct]}. ${question.explanation}`;
    }
  
    answersContainer.appendChild(explanation);
    nextButton.classList.remove("hidden");
  }
  
  nextButton.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
      loadQuestion();
    } else {
      alert("Game Over! Restarting...");
      currentQuestionIndex = 0;
      loadQuestion();
    }
  };
  
  document.getElementById("show-score").onclick = () => {
    scoreDisplay.textContent = score;
    new bootstrap.Modal(document.getElementById("scoreModal")).show();
  };