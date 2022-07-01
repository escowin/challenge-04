// redux | js logic
// dom elements
var startButtonEl = document.querySelector('#start-button');

// logic.quiz
var startQuiz = function() {
    // questions array
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
        console.log(i);
        console.log(questionsArray[i] + " is at " + i + " index");
    }
    // current question
    var currentQuestion = questionsArray;
    // console.log(currentQuestion.length);
};


// for(initial expression; condition; increment expression) {
//     statement
//  }


// logic.timer
var countdownTimer = function() {
    console.log("timer countdown from 10s")
};

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