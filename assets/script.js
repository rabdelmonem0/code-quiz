
var questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        choices: ["strings","booloeans","alerts","numbers"],
        answer: "alerts"
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ["JavaScrip","terminal/bash","for loops","console.log"],
        answer: "console.log"
    },
    {
        question: 'The condition in an if / else statement is enclosed withih _____:',
        choices: ["Quotes","Curly Brackets","Parentheses","Square Brackets"],
        answer: "Parentheses"
    },
    {
        question: 'Arrays in JavaScript can be used to store:',
        choices: ["strings and numbers","booloeans","alerts","All of the above"],
        answer: "All of the above"
    },
    {
        question: 'String values must be enclosed within _____ when being assigned to variables:',
        choices: ["Quotes","Curly Brackets","Parentheses","Commas"],
        answer: "Quotes"
    },
];

var questionIndex = 0;
var answerChoices = document.getElementsByClassName("answer-choices");
var questionBlock = document.getElementsByClassName("question-block");
var firstPage = document.querySelector(".first-page");
var timerElement = document.getElementsByClassName("timer")[0]
var timerCount;
var completed;
var timerCounter = 75;




function startQuiz() { //hide "first-page"
    document.querySelector(".first-page").setAttribute("style", "display: none");
    document.querySelector(".question-block").removeAttribute("style");
    generateQuestion();
    startTimer() 
}
function endQuiz() {
    timerCount++
    saveScore()
}  

function startTimer() {
    // Sets timer
    var timer = setInterval(function() {
      timerCounter--;
      timerElement.textContent = timerCounter;
      if (timerCounter >= 0) {
        // Tests if completed condition is met
        if (completed) {
          // Clears interval and stops timer
          clearInterval(timer);
          endQuiz();
        }
      }
      // Tests if time has run out
      if (timerCount <= 0) {
        // Clears interval
        clearInterval(timer);
        endQuiz();
      }
    }, 1000);
}
  

console.log(answerChoices);

function generateQuestion(){
    if(questionIndex >= questions.length - 1) {
        return 
    }


    var currentQuestion = questions[questionIndex];

    var questionEl = document.getElementsByClassName("question-text")[0];

    questionEl.textContent = currentQuestion.question;

    for (var i = 0; i < currentQuestion.choices.length; i++){
        var listItem = document.createElement("ul");
        var choiceBtn = document.createElement('button');
        
        choiceBtn.textContent = i + 1 + ". "  +  currentQuestion.choices[i]
        listItem.append(choiceBtn);
        document.getElementsByClassName("answer-choices")[0].appendChild(listItem);
        
        choiceBtn.addEventListener("click", function (event) {
            var clickedAnswer = event.target.textContent.split(" ")[1]
          
            if(clickedAnswer == currentQuestion.answer) {
                document.getElementsByClassName("answer-choices")[0].innerHTML = "Correct!"
                questionIndex++ 
                generateQuestion()
            } else {
                document.getElementsByClassName("answer-choices")[0].innerHTML = "Wrong"
                questionIndex++
                generateQuestion()
            }
        })

    }
}

function checkAnswer(event){
    questionIndex++
    if (event.target.value === currentQuestion.answer){

    }

    generateQuestion()
}

var initialsInput = document.querySelector("#initials-text");

var initialsList = document.querySelector("#initials-list");
var initialsCountSpan = document.querySelector("#initials-count");


var initialsForm = document.getElementById("#initials-form");
var initials = document.getElementsByClassName("initials");
var allDone = document.querySelector(".all-done");

function enterInitials() { //displays "all-done"
    document.querySelector(".all-done").setAttribute("style", "display: none");
    document.querySelector(".initials").removeAttribute("style");
    endQuiz()
}

var initials2 = [];

// The following function renders items in a list as <li> elements
function renderInitials() {
  initialsList.innerHTML = "";
  initialsCountSpan.textContent = initials2.length;
 // Render a new li for each initial
 for (var i = 0; i < initials2.length; i++) {
    var initial = initials2[i];

    var li = document.createElement("li");
    li.textContent = initials2;
    li.setAttribute("data-index", i);

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

document.querySelector(".start-quiz").addEventListener("click", startQuiz);
document.querySelector(".answer-choices").addEventListener("click", endQuiz);