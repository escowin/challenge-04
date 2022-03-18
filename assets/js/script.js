const startButton = document.getElementById('start-btn')
startButton.addEventListener('click', startQuiz)


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


function startQuiz() {}

function timer() {}

function selectAnswer() {}

function nextQuestion() {}