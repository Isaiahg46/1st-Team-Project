// Questions Array with Explanations
window.onbeforeunload = function() {
  localStorage.clear();
};

let timeElapsed = 0; // Initialize time elapsed in seconds
const timerDisplay = document.getElementById('timer');

const timer = setInterval(() => {
    timeElapsed++; // Increment time elapsed by 1 second
    timerDisplay.textContent = timeElapsed; // Display time elapsed
    const minutes = Math.floor(timeElapsed / 60); // Calculate minutes
    const seconds = timeElapsed % 60; // Calculate remaining seconds

    // Format the time to display two digits for seconds
    timerDisplay.innerHTML = `Time Elapsed: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}, 1000);

const questions = [
  {
    question: "Which is NOT a comparison operator?",
    answers: { a: ">=", b: "<=", c: "&&", d: "==" },
    correct: "c",
    explanation: {
      a: "Reason 1",
      b: "Reason 2",
      c: "&& is a logical operator.",
      d: "Reason 4"
    }
  },
  {
    question: "What removes the last element of an array?",
    answers: { a: "push", b: "reverse", c: "pop", d: "shift" },
    correct: "c",
    explanation: {
      a: "Reason 1",
      b: "Reason 2",
      c: "Pop removes the last element of an array.",
      d: "Reason 4"
    }
  },
  {
    question: "Which answer choice is NOT a basic operator?",
    answers: { a: "@", b: "%", c: "+", d: "*" },
    correct: "a",
    explanation: {
      a: "@ is not a basic operator.",
      b: "Reason 2",
      c: "Reason 3",
      d: "Reason 4"
    }
  },
  {
    question: "What answer choice is used before single line comments?",
    answers: { a: "&&", b: "//", c: "||", d: "<<" },
    correct: "b",
    explanation: {
      a: "Reason 1",
      b: "// is used before single line comments.",
      c: "Reason 3",
      d: "Reason 4"
    }
  },
  {
    question: "Which answer choice is NOT a logical operator?",
    answers: { a: "&&", b: "||", c: "!", d: "$" },
    correct: "d",
    explanation: {
      a: "Reason 1",
      b: "Reason 2",
      c: "Reason 3",
      d: "$ is not a logical operator."
    }
  },
  {
      question: "Which answer choice writes information to the browser console?",
      answers: { a: "console.log", b: "alert", c: "confirm", d: "function" },
      correct: "a",
      explanation: {
        a: "console.log writes information to the browser console.",
        b: "Reason 2",
        c: "Reason 3",
        d: "Reason 4"
      }
  }, 
  {
      question: "Which answer choice displays an alert box with a message and an okay button?",
      answers: { a: "blur()", b: "alert()", c: "status", d: "self" },
      correct: "b",
      explanation: {
        a: "Reason 1",
        b: "The alert() functions will display any designated message placed between the parenthesis in an alert dialog box when it's executed.",
        c: "Reason 3",
        d: "Reason 4"
      }
  }, 
  {
      question: "Which answer choice closes the current window?",
      answers: { a: "confirm", b: "focus", c: "open", d: "close()" },
      correct: "d",
      explanation: {
        a: "Reason 1",
        b: "Reason 2",
        c: "Reason 3",
        d: "This command used to close the curent browser window."
      }
  }, 
  {
      question: "Which answer choice opens a new browser window?",
      answers: { a: "open()", b: "close()", c: "focus", d: "confirm" },
      correct: "a",
      explanation: {
        a: "This command is used to open a new browser window or tab.",
        b: "Reason 2",
        c: "Reason 3",
        d: "Reason 4"
      }
  }, 
  {
      question: "Which answer choice prints the content of the current window?",
      answers: { a: "print()", b: "prompt", c: "close()", d: "confirm()" },
      correct: "a",
      explanation: {
        a: "This command is JavaScript's only method of printing the contents of as browser.",
        b: "Reason 2",
        c: "Reason 3",
        d: "Reason 4"
      }
  },
  {
      question: "Which answer choice displays a dialogue box that prompts the visitor for input?",
      answers: { a: "confirm()", b: "clearInterval()", c: "prompt()", d: "focus()" },
      correct: "c",
      explanation: {
        a: "Reason 1",
        b: "Reason 2",
        c: "The prompt() function allows you to display an input box prompting input from the user.",
        d: "Reason 4"
      }
  },
  {
      question: "Which answer choice causes an event when the user presses a mouse button over an element?",
      answers: { a: "onmousedown", b: "onclick", c: "oncontextmenu", d: "ondblclick" },
      correct: "a",
      explanation: {
        a: "This command triggers the mousedown event, or attaches a function to run when a mousedown event occurs.",
        b: "Reason 2",
        c: "Reason 3",
        d: "Reason 4"
      }
  },
  {
      question: "Which answer choice causes an event to occur when the user clicks on an element? ",
      answers: { a: "onmousedown", b: "onclick", c: "oncontextmenu", d: "ondblclick" },
      correct: "b",
      explanation: {
        a: "Reason 1",
        b: "The onclick executes a given functionality when the designated button is clicked.",
        c: "Reason 3",
        d: "Reason 4"
      }
  },
  {
      question: "Which answer choice causes an event to occur when the user double-clicks on an event?",
      answers: { a: "onmousedown", b: "onclick", c: "oncontextmenu", d: "ondblclick" },
      correct: "d",
      explanation: {
        a: "Reason 1",
        b: "Reason 2",
        c: "Reason 3",
        d: "Similar to the onclick function, this executes a given functionality when the button is double clicked."
      }
  },
  {
      question: "The user right-clicks on an element to open a context menu",
      answers: { a: "onmousedown", b: "onclick", c: "oncontextmenu", d: "ondblclick" },
      correct: "c",
      explanation: {
        a: "Reason 1",
        b: "Reason 2",
        c: "This allows for a context menu to be displayed when right clicking on designated elements.",
        d: "Reason 4"
      }
  },
 
  {
      question: "Which answer choice causes an event to occur when the user releases a key? ",
      answers: { a: "onmouseup", b: "onkeydown", c: "onkeypress", d: "onkeyup" },
      correct: "d",
      explanation: {
        a: "Reason 1",
        b: "Reason 2",
        c: "Reason 3",
        d: "A onkeyup event occurs when the user releases the designated key on the keyboard."
      }
  },
  {
      question: "Which answer choice causes an even to occur when the user release a mouse button while over an element?",
      answers: { a: "onmouseup", b: "onkeydown", c: "onkeypress", d: "onkeyup" },
      correct: "a",
      explanation: {
        a: "The onmouseup even occurs when the mouse button is released over an element.",
        b: "Reason 2",
        c: "Reason 3",
        d: "Reason 4"
      }
  },
  {
      question: "Which answer choice causes an event to occur when the user is pressing a key down?",
      answers: { a: "onmouseup", b: "onkeydown", c: "onkeypress", d: "onkeyup" },
      correct: "b",
      explanation: {
        a: "Reason 1",
        b: "The onkeydown event occurs when the user presses a key on the keyboard.",
        c: "Reason 3",
        d: "Reason 4"
      }
  },
  {
      question: "Which answer choice causes an event to occur the moment the user starts pressing a key?",
      answers: { a: "onmouseup", b: "onkeydown", c: "onkeypress", d: "onkeyup" },
      correct: "c",
      explanation: {
        a: "Reason 1",
        b: "Reason 2",
        c: "Similar to onkeyup, onkeypress executes when an input is pressed from a keyboard.",
        d: "Reason 4"
      }
  },
 

  {
      question: "The pointer moves onto an element",
      answers: { a: "onmouseenter", b: "onmouseleave", c: "onmousemove", d: "onmouseover" },
      correct: "a",
      explanation: {
      a: "The onmouseenter event occurs when the mouse or pointer enters the designated div element.",
      b: "Reason 2",
      c: "Reason 3",
      d: "Reason 4"
      }
  },

  {
      question: "When the pointer is moved onto an element or one of its children",
      answers: { a: "onmouseenter", b: "onmouseleave", c: "onmousemove", d: "onmouseover" },
      correct: "d",
      explanation: {
      a: "Reason 1",
      b: "Reason 2",
      c: "Reason 3",
      d: "Similar to onmouseenter, onmouseover event occurs when mouse enters the div elements AND its children elements."
      }
  },

  {
      question: "The pointer moves out of an element",
      answers: { a: "onmouseenter", b: "onmouseleave", c: "onmousemove", d: "onmouseover" },
      correct: "b",
      explanation: {
      a: "Reason 1",
      b: "The onmouseleave event occurs when the mouse pointer leaves an element.",
      c: "Reason 3",
      d: "Reason 4"
      }
  },

  {
      question: "The pointer is moving while it is over an element",
      answers: { a: "onmouseenter", b: "onmouseleave", c: "onmousemove", d: "onmouseover" },
      correct: "c",
      explanation: {
      a: "Reason 1",
      b: "Reason 2",
      c: "The onmousemove event triggers every time the mouse pointer is moved over the div element.",
      d: "Reason 4"
      }
  },

  {
    question: "What method is used to add a new node to an element as the last node?",
    answers: { a: "cloneNode()", b: "replaceChild()", c: "insertAfter()", d: "appendChild()" },
    correct: "d",
    explanation: {
      a: "Reason 1",
      b: "Reason 2",
      c: "Reason 3",
      d: "appendChild() adds a new child node to an element as the last child node."
    }
  },
  {
    question: "Which of the following is not a valid JavaScript math object method?",
    answers: { a: "abs(x)", b: "min(x,y,z)", c: "add(x,y)", d: "cos(x)" },
    correct: "c",
    explanation: {
      a: "Reason 1",
      b: "Reason 2",
      c: "Add() is not a method. We simply use the '+' to add two variables in JavaScript.",
      d: "Reason 4"
    }
  },
  {
    question: "How do we add a new element to the beginning of an array?",
    answers: { a: "pop()", b: "unshift()", c: "push()", d: "splice()" },
    correct: "b",
    explanation: {
      a: "Reason 1",
      b: "unshift() is the only option that specifically adds an element to the beginning of the array.",
      c: "Reason 3",
      d: "Reason 4"
    }
  },
  {
    question: "What type of value does a 'confirm()' function return?",
    answers: { a: "String", b: "Object", c: "Boolean", d: "Number" },
    correct: "c",
    explanation: {
      a: "Reason 1",
      b: "Reason 2",
      c: "The 'confirm()' function opens up a yes/no dialog and returns true/false depending on user click.",
      d: "Reason 4"
    }
  },
  {
    question: "What does the modulus (%) operator do?",
    answers: { a: "Divides two values", b: "Returns a percentage", c: "Gives a fraction value", d: "Returns a reaminder" },
    correct: "d",
    explanation: {
      a: "Reason 1",
      b: "Reason 2",
      c: "Reason 3",
      d: "The modulus returns the remainder between two numbers."
    }
  },
  {
    question: "What is not true about the variable 'const'?",
    answers: { a: "It cannot be reassigned.", b: "It is accessible by the entire code.", c: "It can be used multiple times.", d: "It can be set to anything." },
    correct: "b",
    explanation: {
      a: "Reason 1",
      b: "The variable 'const' is only accessible after they appear in the code.",
      c: "Reason 3",
      d: "Reason 4"
    }
  },
  {
    question: "What does the NaN stand for?",
    answers: { a: "Not-a-Number", b: "Not-a-Negative", c: "Not-a-Null", d: "Not-a-Node" },
    correct: "a",
    explanation: {
      a: "NaN stands for Not-a-Number value.",
      b: "Reason 2",
      c: "Reason 3",
      d: "Reason 4"
    }
  },
  {
    question: "Given the following code, what number represents the month? Date(2021, 11, 5, 8, 4, 12, 10, 0)",
    answers: { a: "11", b: "8", c: "5", d: "12" },
    correct: "a",
    explanation: {
      a: "Date objects are read left to right with the numbers representing the year, month, day, hour, minutes, seconds, and milliseconds respectively. You can omit anything you want except for year and month.",
      b: "Reason 2",
      c: "Reason 3",
      d: "Reason 4"
    }
  },
  {
    question: "Which of the following is not a node property?",
    answers: { a: "firstChild", b: "previousSibling", c: "motherNode", d: "nodeName" },
    correct: "c",
    explanation: {
      a: "Reason 1",
      b: "Reason 2",
      c: "The origin name of the nodes in which children nodes fall under is named parentNode.",
      d: "Reason 4"
    }
  },
  {
    question: "Which of the following is used to set a strict equality?",
    answers: { a: "=", b: "===", c: "!=", d: "==" },
    correct: "b",
    explanation: {
      a: "Reason 1",
      b: "In JavaScript, there are only two strict comparison operators: '===' and '!=='.",
      c: "Reason 3",
      d: "Reason 4"
    }
  },
  {
    question: "What is the correct way to write a multi-line JavaScript comment?",
    answers: { a: "/*...*/", b: "//", c: "/.../", d: "/$.../$" },
    correct: "a",
    explanation: {
      a: "In order to make a multi-line comment, we have to place our content in between '/*' and '*/, Otherwise it will remain in the code as is.",
      b: "Reason 2",
      c: "Reason 3",
      d: "Reason 4"
    }
  },
  {
    question: "Given the array: let arr = [Peter, Paul, Mary, Clair, Axel]; What is 'Mary' indexed at?",
    answers: { a: "4", b: "3", c: "1", d: "2" },
    correct: "d",
    explanation: {
      a: "Reason 1",
      b: "Reason 2",
      c: "Reason 3",
      d: "Arrays are indexed at 0; therefore, 'Mary' would be indexed at 2."
    }
  },
  


];



let shuffledQuestions = questions.sort(() => Math.random() - 0.5);
let currentQuestionIndex = 0;
let score = parseInt(localStorage.getItem("score")) || 0;
let hasScored = false;

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
  explanation.classList.add("mt-3", "alert", "alert-info", "message-explanation");

  if (selectedAnswer === question.correct) {
    if (!hasScored) {
      score++;
      hasScored = true;
    }
    localStorage.setItem("score", score);
    explanation.textContent = `Correct! ${question.explanation[selectedAnswer]}`;
  } else {
    explanation.textContent = `Incorrect. The correct answer is ${question.correct.toUpperCase()}: ${question.answers[question.correct]}. ${question.explanation[selectedAnswer]}`;
  }
  const elements= document.getElementsByClassName("message-explanation")
  if (elements.length > 0) {
    elements[0].remove();
  }
  answersContainer.appendChild(explanation);
  nextButton.classList.remove("hidden");
}

nextButton.onclick = () => {
  currentQuestionIndex++;
  hasScored = false;
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
