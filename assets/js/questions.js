class Quiz {
  // properties
  constructor() {
    // stuff
  }
  // methods
  startQuiz() {}
  countdownTimer() {}
  getQuestion() {}
  nextQuestion() {}
  endQuiz() {}
  saveScore() {}
}

// - questions
const questions = [
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
      question:
        "How does one remove leading & trailing white space from a specific element?",
      answers: [
        { choice: "Element.value.remove()", correct: false },
        { choice: "Element.value.trim()", correct: true },
        { choice: "Element.string.push()", correct: false },
        { choice: "Element.text.remove()", correct: false },
      ],
    },
    {
      question: "Cage battle: Python v Java v PHP v Javascript. Who wins?",
      answers: [
        { choice: "Python", correct: false },
        { choice: "Java", correct: false },
        { choice: "PHP", correct: false },
        { choice: "Javascript", correct: true },
      ],
    },
    {
      question: "Success is defined by:",
      answers: [
        { choice: "function foo() {};", correct: false },
        { choice: "var foo = function () {};", correct: false },
        { choice: "const foo = () => {};", correct: true },
        { choice: "let food = () => {};", correct: true },
      ],
    },
    {
      question: "The key to a good template literal is to return with..",
      answers: [
        { choice: "single quotes ''", correct: false },
        { choice: 'double quotes "" ', correct: false },
        { choice: "back-ticks ``", correct: true },
        { choice: "backslashes \u005c\u005c", correct: false },
      ],
    },
    {
      question: "'They know not what they do' refers to:",
      answers: [
        { choice: "copy & pasting answers from stackOverflow", correct: false },
        {
          choice:
            "haphharzardly alternating between single and double quotes within javascript code",
          correct: true,
        },
        { choice: "writing <divs> all the way down", correct: true },
      ],
    },
    {
      question: "Booleans are either true or false",
      answers: [
        { choice: "true", correct: true },
        { choice: "false", correct: false },
      ],
    },
  ];