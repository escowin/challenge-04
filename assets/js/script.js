// dom elements
var startButtonEl = document.querySelector('#start-button');
var saveButtonEl = document.querySelector('#save-button');
var timeButtonEl = document.querySelector('#time-button');
var playAgainButtonEl = document.querySelector('#play-again-button');

// logic.timer
var countdownTimer = function() {
    // logic.countdown from 10s
    console.log("timer countdown from 10s")
    // logic.show the countdown to user
    // logic.time reaches 0 triggers endQuiz()
};

// logic.quiz
var startQuiz = function() {
    // array.questions
    var questionsArray = [
        {
            question: "HTML?",
            choices: {
                a: "yay", 
                b: "nay", 
                c: "abstain"
            },
            answer: "a"
        },
        {
            question: "CSS?",
            choices: {
                a: "what", 
                b: "who", 
                c: "why"
            },
            answer: "b"
        },
       ];
    for(var i = 0; i < questionsArray.length; i++) {
        console.log(questionsArray[i]);
    }
    // logic.questions.current-question
    var currentQuestion = questionsArray;
    // console.log(currentQuestion.length);
    // logic.answer question
        // logic.correctly answer, go to next question
        // logic.incorrectly answer, deduct time && go to next question
        // logic.present next question
            // logic.if all questions answered || time reaches 0, triggers endQuiz()
};

var endQuiz = function() {
    console.log('quiz is over')
};

// logic.saving
var saveHighScore = function() {
    // logic.save score
    console.log('save high score')
    // logic.show saved score in an <ol>
    // logic.play again option
};

// event listeners
startButtonEl.addEventListener('click', () => {
    startQuiz();
    countdownTimer();
});

saveButtonEl.addEventListener('click', saveHighScore);

// SCORE
// function | saving (inputting initials & score. score = time remaining. possibly incorporate a point mechanism in correct penalty: total no. of questions as total point base. each incorrect answer deducts a point. remaining points is saved into score.)