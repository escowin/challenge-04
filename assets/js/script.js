// data.dom-elements
var mainEl = document.querySelector('main');
var rulesContainerEl = document.querySelector('#rules-container');
var footerEl = document.querySelector('footer');
var startButtonEl = document.querySelector('#start-button');
// var saveButtonEl = document.querySelector('#save-button');
// var playAgainButtonEl = document.querySelector('#play-again-button');

// data.user-input
var inititals = "XX";

// data.program-questions
var questions = [
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

// logic.timer
var countdownTimer = function() {
    // logic.countdown from 10s
    var countdown = 0;

    // logic.display timer in document
    var timerEl = document.createElement("button")
        timerEl.className = "button";
        timerEl.id = "time-button";
        timerEl.append(countdown + "s");

    // logic.append <#time-button> to <header>
    footerEl.append(timerEl);

    // logic.time reaches 0 triggers endQuiz()
    if (countdown === 0) {
        endQuiz();
    }
    // logic.if all questions are answered before countdown reaches 0, remaining time goes to saveHighScore()
};

// logic.quiz
var startQuiz = function() {
    // logic.remove <#rules-container>
    rulesContainerEl.remove();

    // logic.create <#quiz-container>
    var quizContainerEl = document.createElement("section");
        quizContainerEl.className = "container";
        quizContainerEl.id = "quiz-container";

    // logic.create <.question>
    var questionEl = document.createElement("h2");
        questionEl.className = "question";
        questionEl.innerText = "this is a question";

    // logic.create <.answers>
    var answersEl = document.createElement("ul");
        answersEl.className = "answers";
    
    // logic.create <.answer>
    var answerEl = document.createElement("li");
        answerEl.className = "answer";
        answerEl.innerText = "this is an answer";

    // logic.display
    answersEl.append(answerEl);
    quizContainerEl.append(questionEl, answersEl);
    mainEl.append(quizContainerEl);
    console.log(mainEl);

    var currentQuestion = questions;
    // logic.loop through questions[] for an unaswered question:
        for(var i = 0; i < questions.length; i++) {
        }
        // logic.select one {question} from [questions] 
        var getQuestion = 'get question';
        console.log(getQuestion + ' is working');
        var displayQuestion = function (){
            // logic.display selected {question} in DOM <divs>
                // <main>
                    // <#quiz>
                        // <#question>
                        // <#choices>
                            // <.choice/>            
        };
        var answerQuestion = function(){
        // logic.user selects <.choice> from <#choices>
        // triggers nextQuesition()
                nextQuestion();

        };
    // >save point<
    var nextQuestion = "next question is here"

    
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
    var saveHighScore = function() {
        // logic.save score
        console.log('save high score')
        // logic.saving
        // logic.saving high score is displayed by user-input.
            // regex. /2 Initials, A-Z/
        // logic.score is (initials + " | " + coundtownTimer)
        // logic.show saved score in an <ol>
        // logic.play again option
    };
};



// event listeners
startButtonEl.addEventListener('click', () => {
    startQuiz();
    countdownTimer();
});

// saveButtonEl.addEventListener('click', saveHighScore);

// SCORE
// function | saving (inputting initials & score. score = time remaining. possibly incorporate a point mechanism in correct penalty: total no. of questions as total point base. each incorrect answer deducts a point. remaining points is saved into score.)