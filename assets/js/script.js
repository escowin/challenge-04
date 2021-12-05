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
        question: "What does the H T M and L stand for in html?",
        answers: { 
            a: "high terminal mass limit",
            b: "hypertext markup language ",
            c: "historical text maintained lever",
            d: "hi-tech manipulative letters"
        },
        correctAnswer: "b"
    },
    {
        question: "the c s s in CSS?",
        answers: {
            a: "cyber special speak",
            b: "centralized systems search",
            c: "contained site sensory",
            d: "cascading style sheet"            
        }
        correctAnswer: "d"
    },
    {
        question: "spaces are a no-no. how are words differentiated in js?",
        answers: {
            a: "likethisbecausewecanreadwords",
            b: "just-dash-it-out",
            c: "no_this_is_the_real_way",
            d: "camelCaseOrLeave"            
        }
        correctAnswer: "d"
    },
    {
        question: "js and css use which two symbols to start/end code?",
        answers: {
            a: "semi-colon (;) and curly brackets ({})",
            b: "tilde (~) and grave accent (`)",
            c: "backslash (\) and fowardflash (/)",
            d: "less than (<) and greater than (>)"            
        }
        correctAnswer: "a"
    }
];

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