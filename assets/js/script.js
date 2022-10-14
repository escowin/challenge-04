// data
// - dom elements
const quizContainerEl = document.querySelector("#quiz-container");
const rulesContainerEl = document.querySelector("#rules-container");
const startButtonEl = document.querySelector("#start-button");
const timerEl = document.querySelector("#timer");

const questionContainerEl = document.createElement("div");
const questionEl = document.createElement("div");
let currentQuestionIndex = 0;

// - questions
let questions = [
  {
    question: "Which element does not need a corresponding closing tag?",
    answers: [
      { choice: "<link>", correct: true },
      { choice: "<script>", correct: false },
      { choice: "<html>", correct: false },
      { choice: "<a>", correct: false },
    ],
  },
  {
    question: "this is question 2",
    answers: [
      { choice: "answer a", correct: false },
      { choice: "answer b", correct: true },
      { choice: "answer c", correct: false },
      { choice: "answer d", correct: false },
    ],
  },
  {
    question: "this is question 3",
    answers: [
      { choice: "answer a", correct: false },
      { choice: "answer b", correct: false },
      { choice: "answer c", correct: false },
      { choice: "answer d", correct: true },
    ],
  },
];

// - user-input
// let initials = '';

// logic
// - timer
function countdownTimer(time) {
  let timer = time;
  console.log(timer);

  const countdown = setInterval(function () {
    if (timer === 10) {
        timerEl.textContent = `${timer}s`;
        timer--;
    } else if (timer < 10 && timer >= 0) {
      timerEl.textContent = `0${timer}s`;
      timer--;
    } else {
        timerEl.textContent = '---'
      clearInterval(countdown);
      // endQuiz();
    }
  }, 1000);
}

// - get the current question from questions array
function getQuestion(random) {
  // current question & its corresponding answers
  let question = random[currentQuestionIndex].question;
  let answers = random[currentQuestionIndex].answers;

  // displays question
  questionEl.setAttribute("id", "question");
  questionEl.className = "container";
  questionEl.textContent = question;

  // displays available answers
  let answersEl = document.createElement("div");
  answersEl.setAttribute("id", "answers");
  answersEl.className = "container";

  quizContainerEl.appendChild(questionEl);
  quizContainerEl.appendChild(answersEl);

  // iterate through answers index; display each index
  for (let i = 0; i < answers.length; i++) {
    let answer = answers[i].choice;
    let correct = answers[i].correct;

    const answerEl = document.createElement("p");
    answerEl.setAttribute("data-choice", correct);
    answerEl.className = "answer";
    answerEl.textContent = `${i + 1}. ${answer}`;

    answersEl.appendChild(answerEl);
    console.log(answerEl);

    answerEl.onclick = selectAnswer;
  }


  // ** pause **
  // - while the current question index is less than or equal to questions.length
  // - run the for loop to iterate through the questions
  // - then increase j by 1 to move onto the next question.
}

// logic.start-quiz
function startQuiz() {
  // remove #rules-container from dom
  rulesContainerEl.remove();

  // create & post #question-container in its place
  questionContainerEl.setAttribute("id", "question-container");
  questionContainerEl.className = "container";
  quizContainerEl.appendChild(questionContainerEl);

  // randomize the questions array; pass the random array as an argument
  let random = questions.sort(() => Math.random() - 0.5);
  getQuestion(random);

  // start the countdown timer
  countdownTimer(10);
}

// logic.end-quiz
var endQuiz = function () {
  console.log("quiz ends");
  quizContainerEl.remove();

  // enter initials

  // display scoreboard
  displayScoreboard();
};

var displayScoreboard = function () {
  console.log("display scoreboard");
  // populate scoreboard with previous scores pulled from local storage
};

// event-listeners
startButtonEl.addEventListener("click", startQuiz);
