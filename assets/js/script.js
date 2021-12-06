//relevant DOM elements
var highScore = document.querySelector(".highScores");
var preamble = document.querySelector(".preamble");
var startEl= document.querySelector(".start");
var questionText = document.querySelector('#txt-question');
var questionAnswers = document.querySelector("#txt-answers");
var scoresTitle = document.querySelector("#scores-title");
var scoresList = document.querySelector("#scores-ul");
var answersEl = document.querySelector('.answers');
var timerEl = document.querySelector("#timer");
var seconds = 60;

//Array of questions and answers
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

var questionCounter = 0
var score = 0

//function runs quiz. show questions on index via dynamically generated html here
var runQuiz = function() {
    preamble.remove();
    questionText.textContent = questions[questionCounter].question;
    for (var N = 0; N < questions[questionCounter].answer.length; N++) {
        var answersEl = document.createElement('button');
        answersEl.textContent = questions[questionCounter].answer[N];
        questionAnswer.append(answersEl);
        answersEl.setAttribute("class", "answers");
        answersEl.addEventListener('click', function(){
            checkAnswer();
        });
    }
};

var checkAnswer = function() {
// checks answer. answer correctly, move on to next. answer incorrectly, time deduction.
// "c o r r e c t" or "i n c o r r e c t" will display depending on user's answer
}

var timer = function() {
    // 60 second timer. quiz ends if time reaches 0
}

var saveScores = function() {
    // save score in local
}

var viewHighScores = function() {
    // view list of high scores saved locally
};


// event listeners
startEl.addEventListener('click', function() {
    runQuiz();
});
startEl.addEventListener('click', function() {
    timer();
});
viewhighScore.addEventListener('click', function() {
    viewHighScores();
});
saveScore.addEventListener('click', function() {
    saveScore();
});