const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const saveButton = document.getElementById('save-btn')
const countdownTimerEl = document.getElementById('countdown-timer')
const rulesContainerEl = document.getElementById('rules-container')
const questionsContainerEl = document.getElementById('questions-container')
const questionEl = document.getElementById('question')
const answerButtonsEl = document.getElementById('answer-btns')

// gives quiz a touch of elegant chaos
let shuffleQuestions, currentQuestionsIndex

// QUESTIONS & ANSWERS ARRAY
var questions = [
    {
        question: "What does the H T M and L stand for in html?",
        answers: [
            {   text: "high terminal mass limit", correct: false},
            {   text: "hypertext markup language", correct: true},
            {   text: "historical text maintained lever", correct: false},
            {   text: "hi-tech manipulative letters", correct: false}
        ]
    },
    {
        question: "the c s s in CSS?",
        answers: [
            {   text: "cyber specialized signals", correct: false},
            {   text: "centralized search system", correct: false},
            {   text: "contained site sensories", correct: false},
            {   text: "cascading style sheet", correct: true}
        ]
    },
    {
        question: "javascript is not a fan of spaces, the way to differentiate words is to",
        answers: [
            {   text: "typelikethisbecausewecanreadwords", correct: false},
            {   text: "just-dash-out-legibility", correct: false},
            {   text: "underscores_between_words", correct: false},
            {   text: "useCamelCase", correct: true}
        ]
    },
    {
        question: "javascript and css use which two symbols to start/end code?",
        answers: [
            {   text: "semi-colon (;) and curly brackets ({})", correct: true},
            {   text: "tilde (~) and grave accent (`)", correct: false},
            {   text: "backslash (\) and fowardflash (/)", correct: false},
            {   text: "less than (<) and greater than (>)", correct: false}
        ]
    }
    // {
    //     question: "",
    //     answers: [
    //         {   text: "", correct: false},
    //         {   text: "", correct: false},
    //         {   text: "", correct: false},
    //         {   text: "", correct: false}
    //     ]
    // }
];

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionsIndex++
    setNextQuestion()
})
countdownTimerEl.addEventListener('click', updateCountdown)

// countdown timer

const startingSeconds = 60;
let time = startingSeconds;

function updateCountdown() {
    const seconds = Math.floor(time / 60);
    time--;
    console.log(seconds)
}

function startQuiz() {
    console.log('started')
    startButton.classList.add('hide')
    rulesContainerEl.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    console.log(shuffleQuestions)
    questionsContainerEl.classList.remove('hide')
    currentQuestionsIndex = 0
    setNextQuestion()
}

function timer() {}

// 1. start button > 2. randomly select question from array > 3. display selected question > 4. select an answer > 5. determine if selected answer is correct > 6a. if yes: repeat 2 - 5 | 6b. if no: deduct 5s from timer, then repeat 2-5
function setNextQuestion() {
    // saveState()
    resetState()
    showQuestion(shuffleQuestions[currentQuestionsIndex])
}

function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsEl.appendChild(button)
    })
}

function resetState() {
    // will remove after I figure out how to not alter {background-color}. only want <.answer-btns> to change.
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }
}
// function saveState() {
//     saveButton.classList.add('hide')
// }

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    // checks for questions
    if (shuffleQuestions.length > currentQuestionsIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        saveButton.classList.remove('hide')
    }
    // next button appears after selecting an answer
    console.log(setStatusClass)
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


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