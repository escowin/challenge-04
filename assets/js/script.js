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
        question: "Which element does not need a corresponding closing tag?",
        answers: [
            { choice: "<link>", correct: true },
            { choice: "<script>", correct: false },
            { choice: "<html>", correct: false },
            { choice: "<a>", correct: false }
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

function nextQuestion(question) {
    console.log(question) 
}

function selectAnswer (correct) {
    
    // // if (correct === true) {
    //     console.log(correct)
    // // } else {
    //     console.log(correct)
    // }
};

// - get the current question from questions array
function getQuestion (questions) {

    // ** pause **
    // - while the current question index is less than or equal to questions.length
    // - run the for loop to iterate through the questions
    // - then increase j by 1 to move onto the next question.

    let j = 0;
    while (j < questions.length) {
        // console.log(questions.question)
        const question = questions[i].question;
        const answers = questions[i].answers;

    }


    questionEl.setAttribute("id", "question");
    questionEl.className = "container";
    questionEl.textContent = question;

    const answersEl = document.createElement('div');
    answersEl.setAttribute('id', 'answers');
    answersEl.className = 'container';

    for (let i = 0; i < answers.length; i++) {
        let correct = answers[i].correct

        const answerEl = document.createElement('p');
        // set data-correct based on choice.correct-true/false
        answerEl.setAttribute('data-correct', correct);
        answerEl.className = 'answer';
        answerEl.textContent = answers[i].choice;

        answersEl.appendChild(answerEl);
        console.log(answerEl);

        answerEl.addEventListener('click', selectAnswer(correct))
    }

    console.log(questions)

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
    // get the first question in the randomized array
    getQuestion(questions);


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