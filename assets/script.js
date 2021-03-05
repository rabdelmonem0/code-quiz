
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
        question: 'Commonly used data types DO NOT include:',
        choices: ["strings","booloeans","alers","numbers"],
        answer: "alerts"
    },
    {
        question: 'Commonly used data types DO NOT include:',
        choices: ["strings","booloeans","alers","numbers"],
        answer: "alerts"
    },
    {
        question: 'Commonly used data types DO NOT include:',
        choices: ["strings","booloeans","alers","numbers"],
        answer: "alerts"
    },
];

var questionIndex = 0;
var answerChoices = document.getElementsByClassName("answer-choices");
var questionBlock = document.getElementsByClassName("question-block");
var firstPage = document.querySelector(".first-page");
var timerElement = document.getElementsByClassName("timer")[0]
var timerCount;
var completed;
var timerCounter = 95;

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
        var listItem = document.createElement("li");
        var choiceBtn = document.createElement('button');
        
        choiceBtn.textContent = i + 1 + " "  +  currentQuestion.choices[i]
        listItem.append(choiceBtn);
        document.getElementsByClassName("answer-choices")[0].appendChild(listItem);
        
        choiceBtn.addEventListener("click", function (event) {
            var clickedAnswer = event.target.textContent.split(" ")[1]
          
            if(clickedAnswer == currentQuestion.answer) {
                document.getElementsByClassName("answer-choices")[0].innerHTML = "Correct!"
                questionIndex++ 
                generateQuestion()
                // yo that was right 
            } else {
                  document.getElementsByClassName("answer-choices")[0].innerHTML = "Wrong"
                questionIndex++
                generateQuestion()
                // yo that was wrong do better 
            }
        })


        // choiceBtn needs a value attribute
        // appendChild method
        //event listeners added to buttons
    }
}

function checkAnswer(event){
    questionIndex++
    if (event.target.value === currentQuestion.answer){

    }

    generateQuestion()
}

document.querySelector(".start-quiz").addEventListener("click", startQuiz);