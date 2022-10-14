// data
// - dom elements
const quizContainerEl = document.querySelector('#quiz-container');
const rulesContainerEl = document.querySelector('#rules-container');
const startButtonEl = document.querySelector('#start-button');
const timerEl = document.querySelector('#timer');

const questionContainerEl = document.createElement('div');
const questionEl = document.createElement("div");

// - questions
let questions = [
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

// - user-input
// let initials = '';

// logic
// - randomizing questions array by shuffling the order
function randomize(questions) {
    questions.sort(() => Math.random() - .5);
};

// - timer
function countdownTimer (time) {
    let timer = time;

    const countdown = setInterval(function() {
        if (timer > 0) {
            timerEl.textContent = timer + 's';
            timer--;
        } else if (timer === 0) {
            timerEl.textContent = timer;
            timer--;
        } else {
            clearInterval(countdown);
            endQuiz();
        }
    }, 1000)
};

// - display current question
function displayQuestion (questions) {
    const question = questions.question;
    const answers = questions.answers;

    questionEl.setAttribute("id", "question");
    questionEl.className = "container";
    questionEl.textContent = question;

    const answersEl = document.createElement('div');
    answersEl.setAttribute('id', 'answers');
    answersEl.className = 'container';

    for (let i = 0; i < answers.length; i++) {
        const answerEl = document.createElement('p');
        answerEl.className = 'answer';
        answerEl.textContent = answers[i].choice
        answersEl.appendChild(answerEl);
    }

    questionContainerEl.appendChild(questionEl);
    questionContainerEl.appendChild(answersEl);
};

// logic.start-quiz
function startQuiz() {
    // remove #rules-container from dom
    rulesContainerEl.remove();

    // create & post #question-container in its place
    questionContainerEl.setAttribute('id', 'question-container');
    questionContainerEl.className = 'container';
    quizContainerEl.appendChild(questionContainerEl)
    
    // randomize the question array
    randomize(questions)
    // display the first question in the randomized array
    displayQuestion(questions[0])

    // start the countdown timer
    // countdownTimer(10);
};

// logic.end-quiz
var endQuiz = function() {
    console.log("quiz ends");
    quizContainerEl.remove();

    // enter initials

    // display scoreboard
    displayScoreboard();
};

var displayScoreboard = function() {
    console.log("display scoreboard");
    // populate scoreboard with previous scores pulled from local storage
}

// event-listeners
startButtonEl.addEventListener("click", startQuiz);