// data.dom-elements
var mainEl = document.querySelector('main');
var rulesContainerEl = document.querySelector('#rules-container');
var footerEl = document.querySelector('footer');
var startButtonEl = document.querySelector('#start-button');
var timerEl = document.querySelector('#timer');
// var saveButtonEl = document.querySelector('#save-button');
// var playAgainButtonEl = document.querySelector('#play-again-button');

// data.user-input
var inititals = "XX";

// data.questions-array
var questions = [
    "html question",
    "css question",
    "js question",
    "t/f question"
];

// logic.countdown
var countdownTimer = function() {
    var timeLeft = 10;

    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timerEl.textContent = timeLeft + 's';
            timeLeft--;
        } else if (timeLeft === 0) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        } else {
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000)
};

// logic.end-quiz
var endQuiz = function(){
    console.log("endQuiz() logic");
};

startButtonEl.addEventListener("click", countdownTimer);