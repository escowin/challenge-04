// redux | js logic

// document elements
var startButtonEl = document.querySelector('#start-button');

// logic.quiz
var startQuiz = function() {
    console.log("quiz will present a multiple choice question")
}

// logic.timer
var countdownTimer = function() {
    console.log("timer countdown from 10s")
}

// event listener
startButtonEl.addEventListener('click', () => {
    startQuiz();
    countdownTimer();
});


//  TIMER
// click event | timer starts
// function | timer

// click event | answer question


// QUESTIONS
// function | questions array
// function | correct v incorrect
// function | incorrect penalty (time deduction)
// function | game over mechanics (answered everything || time is 0)

// SCORE
// function | saving (inputting initials & score. score = time remaining. possibly incorporate a point mechanism in correct penalty: total no. of questions as total point base. each incorrect answer deducts a point. remaining points is saved into score.)
// 