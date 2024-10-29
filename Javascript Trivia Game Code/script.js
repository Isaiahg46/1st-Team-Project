// Questions Array with Explanations
const questions = [
  {
    question: "Which is NOT a comparison operator?",
    answers: { a: ">=", b: "<=", c: "&&", d: "==" },
    correct: "c",
    explanation: "&& is a logical operator.'"
  },
  {
    question: "What removes the last element of an array?",
    answers: { a: "push", b: "reverse", c: "pop", d: "shift" },
    correct: "c",
    explanation: "Pop removes the last element of an array."
  },
  {
    question: "Which answer choice is NOT a basic operator?",
    answers: { a: "@", b: "%", c: "+", d: "*" },
    correct: "a",
    explanation: "@ is not a basic operator"
  },
  {
    question: "What answer choice is used before single line comments?",
    answers: { a: "&&", b: "//", c: "||", d: "<<" },
    correct: "b",
    explanation: "// is used before single line comments"
  },
  {
    question: "Which answer choice is NOT a logical operator?",
    answers: { a: "&&", b: "||", c: "!", d: "$" },
    correct: "d",
    explanation: "$ is not a logical operator"
  },
  {
      question: "Which answer choice writes information to the browser console?",
      answers: { a: "console.log", b: "alert", c: "confirm", d: "function" },
      correct: "a",
      explanation: "console.log writes information to the browser console"
  }, 
  {
      question: "Which answer choice displays an alert box with a message and an okay button?",
      answers: { a: "blur()", b: "alert()", c: "status", d: "self" },
      correct: "b",
      explanation: "alert()"
  }, 
  {
      question: "Which answer choice closes the current window?",
      answers: { a: "confirm", b: "focus", c: "open", d: "close()" },
      correct: "d",
      explanation: "close()"
  }, 
  {
      question: "Which answer choice opens a new browser window?",
      answers: { a: "open()", b: "close()", c: "focus", d: "confirm" },
      correct: "a",
      explanation: "open()"
  }, 
  {
      question: "Which answer choice prints the content of the current window?",
      answers: { a: "print()", b: "prompt", c: "close()", d: "confirm()" },
      correct: "a",
      explanation: "print()"
  },
  {
      question: "Which answer choice displays a dialogue box that prompts the visitor for input?",
      answers: { a: "confirm()", b: "clearInterval()", c: "prompt()", d: "focus()" },
      correct: "c",
      explanation: "prompt()"
  },
  {
      question: "Which answer choice causes an event when the user presses a mouse button over an element?",
      answers: { a: "onmousedown", b: "onclick", c: "oncontextmenu", d: "ondblclick" },
      correct: "a",
      explanation: "onmousedown"
  },
  {
      question: "Which answer choice causes an event to occur when the user clicks on an element? ",
      answers: { a: "onmousedown", b: "onclick", c: "oncontextmenu", d: "ondblclick" },
      correct: "b",
      explanation: "onclick"
  },
  {
      question: "Which answer choice causes an event to occur when the user double-clicks on an event?",
      answers: { a: "onmousedown", b: "onclick", c: "oncontextmenu", d: "ondblclick" },
      correct: "d",
      explanation: "ondblclick"
  },
  {
      question: "The user right-clicks on an element to open a context menu",
      answers: { a: "onmousedown", b: "onclick", c: "oncontextmenu", d: "ondblclick" },
      correct: "c",
      explanation: "oncontextmenu"
  },
 
  {
      question: "Which answer choice causes an event to occur when the user releases a key? ",
      answers: { a: "onmouseup", b: "onkeydown", c: "onkeypress", d: "onkeyup" },
      correct: "d",
      explanation: "onkeyup"
  },
  {
      question: "Which answer choice causes an even to occur when the user release a mouse button while over an element?",
      answers: { a: "onmouseup", b: "onkeydown", c: "onkeypress", d: "onkeyup" },
      correct: "a",
      explanation: "onmouseup"
  },
  {
      question: "Which answer choice causes an event to occur when the user is pressing a key down?",
      answers: { a: "onmouseup", b: "onkeydown", c: "onkeypress", d: "onkeyup" },
      correct: "b",
      explanation: "onkeydown"
  },
  {
      question: "Which answer choice causes an event to occur the moment the user starts pressing a key?",
      answers: { a: "onmouseup", b: "onkeydown", c: "onkeypress", d: "onkeyup" },
      correct: "c",
      explanation: "onkeypress"
  },
 

  {
      question: "The pointer moves onto an element",
      answers: { a: "onmouseenter", b: "onmouseleave", c: "onmousemove", d: "onmouseover" },
      correct: "a",
      explanation: "onmouseenter"
  },

  {
      question: "When the pointer is moved onto an element or one of its children",
      answers: { a: "onmouseenter", b: "onmouseleave", c: "onmousemove", d: "onmouseover" },
      correct: "d",
      explanation: "onmouseover "
  },

  {
      question: "The pointer moves out of an element",
      answers: { a: "onmouseenter", b: "onmouseleave", c: "onmousemove", d: "onmouseover" },
      correct: "b",
      explanation: "onmouseleave "
  },

  {
      question: "The pointer is moving while it is over an element",
      answers: { a: "onmouseenter", b: "onmouseleave", c: "onmousemove", d: "onmouseover" },
      correct: "c",
      explanation: "onmousemove "
  },

  {
      question: "Which planet is known as the Red Planet?",
      answers: { a: "Earth", b: "Venus", c: "Mars", d: "Jupiter" },
      correct: "c",
      explanation: "Mars is called the Red Planet due to its reddish appearance caused by iron oxide."
  },


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