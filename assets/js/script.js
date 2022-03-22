const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const saveButton = document.getElementById('save-btn')
const scoresButton = document.getElementById('scores-btn')
const countdownTimerEl = document.getElementById('countdown-timer')
const scoreboardContainerEl = document.getElementById('scoreboard-container')
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

// 1. start button > 2. randomly select question from array > 3. display selected question > 4. select an answer > 5. determine if selected answer is correct > 6a. if yes: repeat 2 - 5 | 6b. if no: deduct 5s from timer, then repeat 2-5


// ONSCREEN BUTTON EVENT LISTENERS
startButton.addEventListener('click', startQuiz, countdownTimer)
nextButton.addEventListener('click', () => {
    currentQuestionsIndex++
    setNextQuestion()
})
saveButton.addEventListener('click', saveScore())
scoresButton.addEventListener('click', showHighScores())


// COUNTDOWN TIMER | DATA to ON SCREEN 'TEXT'
function countdownTimer() {
    // <#countdown-timer></> displays time on screen (start time 60s, end time 0s). the displayed time is connected to countdownTimer() time data. onscreen text auto updates every second.

    // countdownTimerEl. 
    // <button></>
    // const button = document.createElement('button')
    // <button>##s</>
    // button.innerText = TIME (shown as ['##'s])

    // <button class='btn'>##s</>
    // button.classList.add('btn')

    // if TIME reaches 00s, a <button id='save-btn'> appears in <button id='countdown-timer'> place. <#save-btn> will be linked to saveScore().

    // if user's answer is WRONG, 10s is deducted from countdownTimer(). TIME displayed on screen will reflect that.
}
console.log(countdownTimer)

// QUIZ LOGIC | HIDING INITIAL ELEMENTS, CHOOSING 1st QUESTION RANDOMLY FROM ARRAY. NEXT QUESTION SET via setNextQuetion()
function startQuiz() {
    startButton.classList.add('hide')
    rulesContainerEl.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    questionsContainerEl.classList.remove('hide')
    currentQuestionsIndex = 0
    setNextQuestion()
}

// QUIZ LOGIC CONT. | RESETS <section id='questions-container'></>, SHOWS THE NEXT QUESTION RANDOMLY CHOSEN FROM ARRAY.
function setNextQuestion() {
    resetState()
    showQuestion(shuffleQuestions[currentQuestionsIndex])
}

// QUIZ LOGIC CONT. | GENERATING HTML ELEMENTS TO DISPLAY QUESTION & ANSWERS IN <section id='questions-container'></>
function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        // <button></>
        const button = document.createElement('button')
        // <button>'answer string'</>
        button.innerText = answer.text
        // <button class='btn'>'answer string'</>
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        // clicking correct <button class='btn'>'answer string'</> triggers selectAnswer()
        button.addEventListener('click', selectAnswer)
        answerButtonsEl.appendChild(button)
    })
}

// QUIZ LOGIC CONT. | REMOVES CURRENT HTML ELEMENTS FROM <section id='questions-container'></> 
function resetState() {
    clearStatusClass(questionsContainerEl)
    nextButton.classList.add('hide')
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }
}

// SELECTING ANSWER LOGIC | 
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    // I've moved the altering from <body> to <#questions-container>. goal: alter only <button></b>
    setStatusClass(questionsContainerEl, correct)
    Array.from(questionEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    // <#next-btn> visually appears after selecting a <button>'answer string'</>
    if (shuffleQuestions.length > currentQuestionsIndex + 1) {
        nextButton.classList.remove('hide')
    // <#save-btn> visuallly appears after going through all of the questions[]
    } else {
        saveButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    // answers [text: '', correct] = .correct added
    if (correct) {
        element.classList.add('correct')
    // answers [text:'', wrong] = .wrong added
    } else {
        element.classList.add('wrong')
    }
}

// LOGIC: clears the .correct & .wrong from <#questions-container> & <buttons>
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

// TRACKING SCORE LOGIC
function trackingScore () {
    // correct answer adds 1pt to score
    // wrong answer adds 0pts to score, and deducts 10s from countdownTimer()
}

function saveScore() {
    // CLICKING <button id='save-btn'></> prompts user to ENTER initials (2 character limit). Saving initials includes score data: how many questions were answered correctly (format: [# correctly answered]/[# of total questions]) & within (format: [##]s)
    // saved data is displayed as 'text' in <#scoreboard-container></>
        // EX: INITIALS SCORE TIME
        // EX: EE 4/5 10s
}
function showHighScores() {}

// WHEN I click the start button
// THEN a timer starts AND I am presented with a question

// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// WHEN all questions are answered OR the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and score