// data.dom-elements
var quizContainerEl = document.querySelector('#quiz-container');
var rulesContainerEl = document.querySelector('#rules-container');
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

// logic.display
var displayQuestions = function() {
    // to-do: replace innerText placeholder string w/ object key-values
    var questionsContainerEl = document.createElement("section");
    questionsContainerEl.className = "container";
    questionsContainerEl.setAttribute("id", "questions-container");

    var questionEl = document.createElement("h2");
    questionEl.className = "question";
    questionEl.setAttribute("id", "question");
    questionEl.innerText = "this is a question?";

    var answersEl = document.createElement("ul");
    answersEl.className = "answers";

    var answerEl = document.createElement("li");
    answerEl.className = "answer";
    answerEl.innerText = "answer placeholder"

    quizContainerEl.appendChild(questionsContainerEl);
    questionsContainerEl.append(questionEl, answersEl);
    answersEl.append(answerEl);
}

// logic.start-quiz
var startQuiz = function() {
    rulesContainerEl.remove();
    displayQuestions();
}
// logic.end-quiz
var endQuiz = function() {
    console.log("endQuiz() logic");
};

// event-listeners
startButtonEl.addEventListener("click", countdownTimer);
startButtonEl.addEventListener("click", startQuiz);