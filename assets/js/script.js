// data.dom-elements
var mainEl = document.querySelector('main');
var rulesContainerEl = document.querySelector('#rules-container');
var footerEl = document.querySelector('footer');
var startButtonEl = document.querySelector('#start-button');
// var saveButtonEl = document.querySelector('#save-button');
// var playAgainButtonEl = document.querySelector('#play-again-button');

// data.user-input
var inititals = "XX";

// data.questions-array
var questions = [
    "html question",
    "css question",
    "js question",
    "t/f question"
];

// logic.timer
var countdown = 10
var countdownTimer = function() {
    // logic.countdown from 10s
    counter--;
    if(counter === 0) {
        console.log("game over");
        clearInterval(startCountdown)
    }

    // logic.display timer in document
    var timerEl = document.createElement("button")
        timerEl.className = "button";
        timerEl.id = "time-button";
        timerEl.append(countdown + "s");

    // logic.append <#time-button> to <header>
    footerEl.append(timerEl);

    // logic.time reaches 0 triggers endQuiz()
    // if (countdown === 0) {
    //     endQuiz();
    // } else {
    //     console.log(countdown + "s remaining");
    // }
    // logic.if all questions are answered before countdown reaches 0, remaining time goes to saveHighScore()
};
var startCountdown = setInterval(countdown, 1000);

// logic.get [question]
var getQuestion = function(question) {
    console.log(question + " in getQuestion()");

    // if (!correct) {
    //    var penalty = coundtown - 5;
    //     getQuestion();
    // } else {
    //     getQuestion();
    // }
};

// logic.display <.question>
var displayQuestion = function(question) {
    // logic.create <#quiz-container>
    var quizContainerEl = document.createElement("section");
        quizContainerEl.className = "container";
        quizContainerEl.id = "quiz-container";

    // logic.create <.question>
    var questionEl = document.createElement("h2");
        questionEl.className = "question";
        questionEl.innerText = question;

    // logic.create <.answers>
    var answersEl = document.createElement("ul");
        answersEl.className = "answers";
    
    // logic.create <.answer>
    var answerEl = document.createElement("li");
        answerEl.className = "answer";
        answerEl.innerText = "this is an answer";

    // logic.append <elements>
    answersEl.append(answerEl);
    quizContainerEl.append(questionEl, answersEl);
    mainEl.append(quizContainerEl);
    console.log(question + " in displayQuestion()");
};


// logic.quiz
var startQuiz = function(question) {
    // logic.remove <#rules-container>
    rulesContainerEl.remove();
    displayQuestion();

    // reset dom elements
    quizContainerEl.innerText();

    var currentQuestion = questions[i];


    getQuestion(question);
    for(var i = 0; i <questions.length);  

    // logic.get [questions], display <#quiz-container>

    // displayQuestion(question);

    
    // console.log(currentQuestion.length);
    // logic.answer question
        // logic.correctly answer, go to next question
        // logic.incorrectly answer, deduct time && go to next question
        // logic.present next question
            // logic.if all questions answered || time reaches 0, triggers endQuiz()
    // endQuiz();
};

var endQuiz = function() {
    console.log('quiz is over')


    // score calculations
    var score = function() {

        // logic.remaining countdownTimer()
        // logic.user-input initials()
    };
    console.log('score is ' + inititals +  ' & remaining time.');

    // logic.saving

};



// event listeners
startButtonEl.addEventListener('click', () => {
    // startQuiz();
    for(var i = 0; i < questions.length; i++) {
        startQuiz(questions[i]);
    }
    countdownTimer();
});

// saveButtonEl.addEventListener('click', saveHighScore);

// SCORE
// function | saving (inputting initials & score. score = time remaining. possibly incorporate a point mechanism in correct penalty: total no. of questions as total point base. each incorrect answer deducts a point. remaining points is saved into score.)