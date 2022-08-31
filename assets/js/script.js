// data.dom-elements
var quizContainerEl = document.querySelector('#quiz-container');
var rulesContainerEl = document.querySelector('#rules-container');
var startButtonEl = document.querySelector('#start-button');
var timerEl = document.querySelector('#timer');

// data.user-input
var inititals = "XX";

// data.questions array
var questions = [
    {
        question: "This is an HTML question",
        choices: [
            { answer: "answer a", correct: true },
            { answer: "answer b", correct: true },
            { answer: "answer c", correct: true },
            { answer: "answer d", correct: false }
        ]
    },
    {
        question: "this is question 2",
        choices: [
            { answer: "answer a", correct: false },
            { answer: "answer b", correct: true },
            { answer: "answer c", correct: true },
            { answer: "answer d", correct: true }
        ]
    },
    {
        question: "this is question 3",
        choices: [
            { answer: "answer a", correct: false },
            { answer: "answer b", correct: true },
            { answer: "answer c", correct: true },
            { answer: "answer d", correct: true }
        ]
    },
];

// data.scoreboard

// logic.timer
var timer = 10;

var countdownTimer = function() {
    var timeInterval = setInterval(function() {
        if (timer > 0) {
            timerEl.textContent = timer + 's';
            timer--;
        } else if (timer === 0) {
            timerEl.textContent = timer;
            timer--;
        } else {
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000)
};

// shuffle questions
var shuffledQuestions;
var currentQuestionIndex;

var displayQuestion = function(question) {
    // <#quiz-container><h2 #question.../><#choices-container><.choice.../></></>
    var currentQuestion = question.question;

    // question container
    var questionsContainerEl = document.createElement("section");
    questionsContainerEl.innerHTML = "";
    questionsContainerEl.className = "container";
    questionsContainerEl.setAttribute("id", "questions-container");

    // displays current question
    var questionEl = document.createElement("h2");
    questionEl.className = "question";
    questionEl.setAttribute("id", "question");
    questionEl.innerText = currentQuestion;

    // loop through choices
    question.answers.forEach(choices => {
        var choiceEl = document.createElement("button");
        choiceEl.innerText = choices.answer 

        
    })
    console.log(questionEl);

    questionsContainerEl.appendChild(questionEl);
    quizContainerEl.appendChild(questionsContainerEl);

    // answers container
    // var answersEl = document.createElement("ul");
    // answersEl.className = "answers-container";

    // displays answers as text
    // question.choices.forEach(choices => {
    //     var answerEl = document.createElement("li");
    //     answerEl.className = "answer";
    //     answerEl.innerText = choices.text;
    
    //     questionsContainerEl.append(questionEl, answersEl);
    //     answersEl.append(answerEl);
    // })
    //     quizContainerEl.appendChild(questionsContainerEl);

    // answerEl.addEventListener("click", nextQuestion);
};

var getQuestion = function() {
    displayQuestion(shuffledQuestions[currentQuestionIndex]);

    // loop through questions array
    // for (var i = 0; i < questions.length; i++) {
    //     var currentQuestion = questions[i].question;
    //     var currentChoices = questions[i].question.choices;
    // }

    // clickedAnswer();
};

// logic.start-quiz
var startQuiz = function() {
    rulesContainerEl.remove();
    // shuffles questions array
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    console.log(shuffledQuestions);
    currentQuestionIndex = 0;    
    getQuestion();
    countdownTimer();
};

// logic.end-quiz
var endQuiz = function() {
    console.log("quiz ends");
    quizContainerEl.remove();

    // display scoreboard
    console.log("display scoreboard");
};

// event-listeners
startButtonEl.addEventListener("click", startQuiz);