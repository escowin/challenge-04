const startButton = document.getElementById('start-btn')
const preambleEl = document.getElementById('preamble')
const questionsContainerEl = document.getElementById('questions-container')
startButton.addEventListener('click', startQuiz)

let shuffleQuestions, currentQuestionsIndex

// QUESTIONS & ANSWERS ARRAY
var questions = [
    {
        question: "What does the H T M and L stand for in html?",
        answer: { 
            a: "high terminal mass limit",
            b: "hypertext markup language ",
            c: "historical text maintained lever",
            d: "hi-tech manipulative letters"
        },
        correctAnswer: "b"
    },
    {
        question: "the c s s in CSS?",
        answer: {
            a: "cyber special speak",
            b: "centralized systems search",
            c: "contained site sensory",
            d: "cascading style sheet"            
        },
        correctAnswer: "d"
    },
    {
        question: "spaces are a no-no. how are words differentiated in js?",
        answer: {
            a: "likethisbecausewecanreadwords",
            b: "just-dash-it-out",
            c: "no_this_is_the_real_way",
            d: "camelCaseOrLeave"            
        },
        correctAnswer: "d"
    },
    {
        question: "js and css use which two symbols to start/end code?",
        answer: {
            a: "semi-colon (;) and curly brackets ({})",
            b: "tilde (~) and grave accent (`)",
            c: "backslash (\) and fowardflash (/)",
            d: "less than (<) and greater than (>)"            
        },
        correctAnswer: "a"
    }
];


function startQuiz() {
    console.log('started')
    startButton.classList.add('hide')
    preambleEl.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    questionsContainerEl.classList.remove('hide')
    currentQuestionsIndex = 0
    setNextQuestion()
}

function timer() {}

// 1. start button > 2. select question from array > 3. display selected question > 4. select an answer > 5. determine if selected answer is correct > 6a. if yes: repeat 2 - 5 | 6b. if no: deduct 5s from timer, then repeat 2-5
function setNextQuestion() {
    showQuestion(shuffleQuestions[currentQuestionsIndex])
}

function selectAnswer() {}


// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score