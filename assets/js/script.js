// data.dom-elements
var quizContainerEl = document.querySelector('#quiz-container');
var rulesContainerEl = document.querySelector('#rules-container');
var startButtonEl = document.querySelector('#start-button');
var timerEl = document.querySelector('#timer');

// data.user-input
var inititals = "XX";

// data.questions array
var questions = [
    {
        question: "This is an HTML question",
        answers: [
            { choice: "answer a", correct: true },
            { choice: "answer b", correct: false },
            { choice: "answer c", correct: false },
            { choice: "answer d", correct: false }
        ]
    },
    {
        question: "this is question 2",
        answers: [
            { choice: "answer a", correct: false },
            { choice: "answer b", correct: true },
            { choice: "answer c", correct: false },
            { choice: "answer d", correct: false }
        ]
    },
    {
        question: "this is question 3",
        answers: [
            { choice: "answer a", correct: false },
            { choice: "answer b", correct: false },
            { choice: "answer c", correct: false },
            { choice: "answer d", correct: true }
        ]
    },
];

// data.scoreboard

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

// shuffle questions
var shuffledQuestions;
var currentQuestionIndex;

var displayQuestion = function(question) {
    var currentQuestion = question.question;

    // question container elements
    var questionsContainerEl = document.createElement("section");
    var questionEl = document.createElement("h2");
    var answerEl = document.createElement("button");

    // format container heirarchy
    quizContainerEl.appendChild(questionsContainerEl);
    questionsContainerEl.appendChild(questionEl);
    questionsContainerEl.appendChild(answerEl);

    console.log(quizContainerEl);

    // question container
    questionsContainerEl.className = "container";
    questionsContainerEl.setAttribute("id", "questions-container");

    // question header
    questionEl.className = "question";
    questionEl.setAttribute("id", "question");
    questionEl.innerText = currentQuestion;

    // loop through answers
    question.answers.forEach(answer => {
        answerEl.className = "answer btn";
        answerEl.innerText = answer.choice;
        if (answer.correct) {
            answerEl.dataset.correct = answer.correct;
        }    
    })
};

var getQuestion = function() {
    displayQuestion(shuffledQuestions[currentQuestionIndex]);
};

// logic.start-quiz
var startQuiz = function() {
    rulesContainerEl.remove();
    // shuffles questions array
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    console.log(shuffledQuestions);
    currentQuestionIndex = 0;    
    getQuestion();
    // countdownTimer();
};

// logic.end-quiz
var endQuiz = function() {
    console.log("quiz ends");
    quizContainerEl.remove();

    // display scoreboard
    console.log("display scoreboard");
};

// event-listeners
startButtonEl.addEventListener("click", startQuiz);