// data.dom-elements
var quizContainerEl = document.querySelector('#quiz-container');
var rulesContainerEl = document.querySelector('#rules-container');
var startButtonEl = document.querySelector('#start-button');
var timerEl = document.querySelector('#timer');

var inititals = "XX";

// logic.timer
var timer = 10;

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

// logic.questions
var questions = [
    {
        question: "This is an HTML question",
        answers: [
            { text: "answer a", correct: true },
            { text: "answer b", correct: true },
            { text: "answer c", correct: true },
            { text: "answer d", correct: false }
        ]
    },
    {
        question: "this is question 2",
        answers: [
            { text: "answer a", correct: false },
            { text: "answer b", correct: true },
            { text: "answer c", correct: true },
            { text: "answer d", correct: true }
        ]
    },
];

var displayQuestion = function(question) {
    var questionsContainerEl = document.createElement("section");
    questionsContainerEl.className = "container";
    questionsContainerEl.setAttribute("id", "questions-container");

    var questionEl = document.createElement("h2");
    questionEl.className = "question";
    questionEl.setAttribute("id", "question");
    questionEl.innerText = question.question;

    var answersEl = document.createElement("ul");
    answersEl.className = "answers";

    var answerEl = document.createElement("li");
    answerEl.className = "answer";
    answerEl.innerText = question.answers.text;

    quizContainerEl.appendChild(questionsContainerEl);
    questionsContainerEl.append(questionEl, answersEl);
    answersEl.append(answerEl);

    answerEl.addEventListener("click", nextQuestion);
};

var setQuestion = function() {
    for (var i = 0; i < questions.length; i++) {
        var currentQuestion = questions[i];
        // **pause here**
        // currently displays all index arrays
        displayQuestion(currentQuestion);
    }
};

var nextQuestion = function() {
    console.log("clicked answer button")
};

// logic.start-quiz
var startQuiz = function() {
    rulesContainerEl.remove();
    // getQuestion();
    setQuestion();
    countdownTimer();
};

// logic.end-quiz
var endQuiz = function() {
    console.log("quiz ends");
};

// event-listeners
startButtonEl.addEventListener("click", startQuiz);