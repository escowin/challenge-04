// data
// - dom elements
const quizContainerEl = document.querySelector("#quiz-container");
const rulesContainerEl = document.querySelector("#rules-container");
const startButtonEl = document.querySelector("#start-button");
const timerEl = document.querySelector("#timer");

const questionContainerEl = document.createElement("section");
const questionEl = document.createElement("h2");
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


let points = 0;
let scoreboard = [];
let initials = "";

// logic.current year
function currentYear() {
  year = new Date().getFullYear();
  const yearEl = document.getElementById("year");
  yearEl.innerText = year;
}

// logic.timer
// let time;
let time = 11;
let timer;

function countdown() {
  time;
  time--;

  if (time === 10) {
    timerEl.textContent = `${time}s`
  } else if (time < 10 && time >= 0) {
    timerEl.textContent = `0${time}s`
  } else {
    endQuiz(points);
  }
}
// function countdownTimer(time) {
//   let timer = time;
//     const countdown = setInterval(function () {
//       if (timer === 10) {
//         timerEl.textContent = `${timer}s`;
//         timer--;
//       } else if (timer < 10 && timer > 0) {
//         timerEl.textContent = `0${timer}s`;
//         timer--;
//       } else {
//         clearInterval(countdown);
//         timerEl.textContent = "---";
//         endQuiz(points);
//       }
//     }, 1000);
// }

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
    answerEl.setAttribute("data-correct", correct);
    answerEl.className = "answer";
    answerEl.textContent = `${i + 1}. ${answer}`;

    answersEl.appendChild(answerEl);

    // selecting an answer
    answerEl.addEventListener("click", () => {
      const choice = answerEl.getAttribute("data-correct");

      // button flashes green; add a point
      if (choice === "true") {
        quizContainerEl.setAttribute("id", "correct");
        points++;
      } else {
        // button flashes red;
        quizContainerEl.setAttribute("id", "incorrect");
      }
      nextQuestion(random);
    });
  }
}

// logic.next-question | clears out previous html; increases the index number; runs getQuestion again to display the next question in this array.
function nextQuestion(random) {
  quizContainerEl.innerHTML = "";
  currentQuestionIndex++;
  if (currentQuestionIndex >= questions.length) {
    endQuiz();
  } else {
    getQuestion(random);
  }
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
  // countdownTimer(time);
  timer = setInterval(countdown, 1000);
}

// logic.end-quiz | removes question container; allows user to save score
function endQuiz(points) {
  // issue | endQuiz runs twice (timer & answering all questions). stop countdownTimer if all questions are answered.
  clearInterval(timer);
  timerEl.textContent = "---";
  quizContainerEl.innerHTML = "";

  //   undim scoreboardBtn; if user clicks the button, run displayScoreboard
  const scoreboardBtn = document.getElementById("scoreboard-btn");
  scoreboardBtn.className = "button active";
  console.log(scoreboardBtn);
  // scoreboardBtn.
  saveScore();
}

function saveScore() {
  console.log(points)
  const saveFormEl = document.createElement("form");
  saveFormEl.setAttribute("id", "save-form");
  saveFormEl.className = "container";
  saveFormEl.innerHTML = `
  <h2>Game fin.</h2>
  <div id='initials-container'>
    <label for='initials'>Initials</label>
    <input type='text' name='name' id='initials' required>
    <p>${points}pts</p>
  </div>
  <button type='submit' class='button active' id='save-button'>save</button>
  `;
  quizContainerEl.appendChild(saveFormEl);

  saveFormEl.addEventListener("submit", formSubmitHandler);
}

function formSubmitHandler(event) {
  event.preventDefault();
  const initialInputEl = document.getElementById("initials");
  console.log(initialInputEl.value)
  let score = points;
  initials = initialInputEl.value.trim();

  // if (initials !== '' {
  //   const highscores = JSON.parse(localStorage.getItem("score")) || [];
  // })

  scoreboard.push({ initials, score });
  // localStorage.setItem('initials', initials);
  displayScoreboard();
}

function displayScoreboard() {
  quizContainerEl.innerHTML = "";

  const scoreboardEl = document.createElement("section");
  scoreboardEl.setAttribute("id", "scoreboard");
  scoreboardEl.className = "container";

  const scoreboardHeaderEl = document.createElement("article");
  scoreboardHeaderEl.setAttribute("id", "scoreboard-header");
  scoreboardHeaderEl.innerHTML = `<h2>High scores</h2>
  <p class='initials'>Initials</p>
  <p>Score</p>`;

  scoreboardEl.appendChild(scoreboardHeaderEl);
  for (let i = 0; i < scoreboard.length; i++) {
    const savedScoredEl = document.createElement("div");
    savedScoredEl.className = "saved-score";
    savedScoredEl.innerHTML = `
    <p class='initials'>${scoreboard[i].initials}</p>
    <p class='score'>${scoreboard[i].score}</p>`;

    scoreboardEl.appendChild(savedScoredEl);
    console.log(i)
  }

  quizContainerEl.appendChild(scoreboardEl);

  console.log(quizContainerEl);

  // populate scoreboard with previous scores pulled from local storage
}

// event-listeners
currentYear();
startButtonEl.addEventListener("click", startQuiz);
