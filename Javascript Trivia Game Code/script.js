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
      explanation: "console.log writes information to the browser console."
  }, 
  {
      question: "Which answer choice displays an alert box with a message and an okay button?",
      answers: { a: "blur()", b: "alert()", c: "status", d: "self" },
      correct: "b",
      explanation: "The alert() functions will display any designated message placed b etween the parenthesis in an alert dialog box when it's executed."
  }, 
  {
      question: "Which answer choice closes the current window?",
      answers: { a: "confirm", b: "focus", c: "open", d: "close()" },
      correct: "d",
      explanation: "This command used to close the curent browser window."
  }, 
  {
      question: "Which answer choice opens a new browser window?",
      answers: { a: "open()", b: "close()", c: "focus", d: "confirm" },
      correct: "a",
      explanation: "This command is used to open a new browser window or tab."
  }, 
  {
      question: "Which answer choice prints the content of the current window?",
      answers: { a: "print()", b: "prompt", c: "close()", d: "confirm()" },
      correct: "a",
      explanation: "This command is JavaScript's only meathod of printing the contents of as brwoser."
  },
  {
      question: "Which answer choice displays a dialogue box that prompts the visitor for input?",
      answers: { a: "confirm()", b: "clearInterval()", c: "prompt()", d: "focus()" },
      correct: "c",
      explanation: "The prompt() function allows you to display a input box prompting input form the user."
  },
  {
      question: "Which answer choice causes an event when the user presses a mouse button over an element?",
      answers: { a: "onmousedown", b: "onclick", c: "oncontextmenu", d: "ondblclick" },
      correct: "a",
      explanation: "This command triggers the mousedown event, or ataches a function to run when a mousedown event occurs."
  },
  {
      question: "Which answer choice causes an event to occur when the user clicks on an element? ",
      answers: { a: "onmousedown", b: "onclick", c: "oncontextmenu", d: "ondblclick" },
      correct: "b",
      explanation: "The onclick executes a given functionality when the designated buttin is clicked."
  },
  {
      question: "Which answer choice causes an event to occur when the user double-clicks on an event?",
      answers: { a: "onmousedown", b: "onclick", c: "oncontextmenu", d: "ondblclick" },
      correct: "d",
      explanation: "Similar to the onclick function, this executes a given functionality when given button is double clicked."
  },
  {
      question: "The user right-clicks on an element to open a context menu",
      answers: { a: "onmousedown", b: "onclick", c: "oncontextmenu", d: "ondblclick" },
      correct: "c",
      explanation: "This allows for a context menu to be displayed when rihgt clicking on desgnated elements."
  },
 
  {
      question: "Which answer choice causes an event to occur when the user releases a key? ",
      answers: { a: "onmouseup", b: "onkeydown", c: "onkeypress", d: "onkeyup" },
      correct: "d",
      explanation: "A onkeyup event occurs when the user releases the designated key on the keyboard."
  },
  {
      question: "Which answer choice causes an even to occur when the user release a mouse button while over an element?",
      answers: { a: "onmouseup", b: "onkeydown", c: "onkeypress", d: "onkeyup" },
      correct: "a",
      explanation: "The onmouseup even occurs when the mouse button is released over an element."
  },
  {
      question: "Which answer choice causes an event to occur when the user is pressing a key down?",
      answers: { a: "onmouseup", b: "onkeydown", c: "onkeypress", d: "onkeyup" },
      correct: "b",
      explanation: "The onkeydown"
  },
  {
      question: "Which answer choice causes an event to occur the moment the user starts pressing a key?",
      answers: { a: "onmouseup", b: "onkeydown", c: "onkeypress", d: "onkeyup" },
      correct: "c",
      explanation: "Similar to onkeyup, onkeypress executes when an input is pressed from a keyboard."
  },
 

  {
      question: "The pointer moves onto an element",
      answers: { a: "onmouseenter", b: "onmouseleave", c: "onmousemove", d: "onmouseover" },
      correct: "a",
      explanation: "The onmouseenter event occurs when the mouse or pointer enters the designated div element."
  },

  {
      question: "When the pointer is moved onto an element or one of its children",
      answers: { a: "onmouseenter", b: "onmouseleave", c: "onmousemove", d: "onmouseover" },
      correct: "d",
      explanation: "Simlar to onmouseender, onmouseover event occurs when mouse enters the div elements AND its children elements."
  },

  {
      question: "The pointer moves out of an element",
      answers: { a: "onmouseenter", b: "onmouseleave", c: "onmousemove", d: "onmouseover" },
      correct: "b",
      explanation: " The onmouseleave event occurs when the mouse pointer leaves an element."
  },

  {
      question: "The pointer is moving while it is over an element",
      answers: { a: "onmouseenter", b: "onmouseleave", c: "onmousemove", d: "onmouseover" },
      correct: "c",
      explanation: "The onmousemove event triggers every time the mouse pointer is moved over the div element."
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