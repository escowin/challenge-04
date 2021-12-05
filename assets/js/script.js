//relevant IDs & elements from html
var highScoresEl = document.querySelector(".highScores");
var timerEl = document.querySelector(".timer");
var heroEl = document.querySelector(".hero");
var btnStartEl = document.querySelector(".btn-start");
var answerEl = document.querySelector(".answer");

// timer
var timeLeft = 60;

    // countdown function that includes a time deduction penalty

    //quiz ends after answering all questions
    //or if timer reaches 0 

//Array of Questions and Answers from which the runQuiz() will pull from.
var questionsArray = [
    {
        question: "Question One?",
        answers: [
            "Answer One",
            "Answer Two",
            "Answer Three",
            "Answer Four"
        ],
        correctAnswer: "Answer Two"
    },
    {
        question: "Question Two?",
        answers: [
            "Answer One",
            "Answer Two",
            "Answer Three",
            "Answer Four"
        ],
        correctAnswer: "Answer Four"
    },
    {
        question: "Question Three?",
        answers: [
            "Answer One",
            "Answer Two",
            "Answer Three",
            "Answer Four"
        ],
        correctAnswer: "Answer Four"
    },
    {
        question: "Question Four?",
        answers: [
            "Answer One",
            "Answer Two",
            "Answer Three",
            "Answer Four"
        ],
        correctAnswer: "Answer One"
    }
]

var questionCounter = 0
var score = 0

//functions to run the quiz. show questions on index via dynamically generated html here

var runQuiz = function() {

};
// function to check answer. answer correctly, move on to next.
    // answer incorrectly, time deduction.


// function to show correct answer

//game over coda, save initials & score
var viewHighScores = function() {
    welcomeSection.remove();
    scpreTitle.textContent = "h i g h  s c o r e:";
};


//Event Listeners to run above functions
btnStartEl.addEventListener('click', function() {
    runQuiz();
});
highScoresEl.addEventListener('click', function() {
    viewHighScores();
});