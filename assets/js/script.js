// data.dom-elements
var quizContainerEl = document.querySelector('#quiz-container');
var rulesContainerEl = document.querySelector('#rules-container');
var startButtonEl = document.querySelector('#start-button');
var timerEl = document.querySelector('#timer');

// data.user-input
var inititals = "XX";
var timer = 10;

// data.questions-array
var questions = [
    {
        question: "this is question 1",
        answers: {
            a: "answer a",
            b: "answer b",
            c: "answer c",
            d: "answer d"
        },
        correct: "b"
    },
    {
        question: "this is question 2",
        answers: {
            a: "answer a",
            b: "answer b",
            c: "answer c",
            d: "answer d"
        },
        correct: "a"
    },
];

// logic.countdown-timer
var countdownTimer = function() {
    var timeInterval = setInterval(function() {
        if (timer > 0) {
            timerEl.textContent = timer + 's';
            timer--;
        } else if (timer === 0) {
            timerEl.textContent = timer;
            timer--;
        } else {
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000)
};

// logic.display-questions
var displayQuestions = function() {
    var questionsContainerEl = document.createElement("section");
    questionsContainerEl.className = "container";
    questionsContainerEl.setAttribute("id", "questions-container");

    var questionEl = document.createElement("h2");
    questionEl.className = "question";
    questionEl.setAttribute("id", "question");
    questionEl.innerText = questions.question;

    var answersEl = document.createElement("ul");
    answersEl.className = "answers";

    var answerEl = document.createElement("li");
    answerEl.className = "answer";
    answerEl.innerText = questions.answer;

    quizContainerEl.appendChild(questionsContainerEl);
    questionsContainerEl.append(questionEl, answersEl);
    answersEl.append(answerEl);

    answerEl.addEventListener("click", nextQuestion);
};

// logic.start-quiz
var startQuiz = function() {
    rulesContainerEl.remove();
    getQuestion();
    displayQuestions();
    countdownTimer();
};

var getQuestion = function() {
    for (var i = 0; i < questions.length; i++) {

        if (questions.length > 0) {
            console.log("works")
        } else {
            console.log("no questions");
            break;
        }
    }

    // bug
    var currentQuestion = questions[i];
        console.log(currentQuestion);

};

var nextQuestion = function() {
    console.log("clicked an answer")
};

// logic.end-quiz
var endQuiz = function() {
    console.log("quiz ends");
};

// event-listeners
startButtonEl.addEventListener("click", startQuiz);