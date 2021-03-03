var questions = [
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
        answeres: ["strings","booloeans","alers","numbers"],
        answer: "alerts"
    },
    {
        question: 'Commonly used data types DO NOT include:',
        answeres: ["strings","booloeans","alers","numbers"],
        answer: "alerts"
    },
    {
        question: 'Commonly used data types DO NOT include:',
        answeres: ["strings","booloeans","alers","numbers"],
        answer: "alerts"
    },
];

var questionIndex = 0;

function generateQuestion(){
    var currentQuestion = questions[questionIndex];

    var questionEl = document.getElementById("question-text");

    questionEl.textContent = currentQuestion.question;

    for (var i = 0; i < currentQuestion.choices.length; i++){
        var choiceBtn = document.createElement('button');
        choiceBtn.textContent = i + 1 + currentQuestion[i];
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
