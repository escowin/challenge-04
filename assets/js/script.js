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

// logic    |   countdown
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
            displayScoreBoard();
        }
    }, 1000)
};

startButtonEl.addEventListener("click", countdownTimer);