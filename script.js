var quizQuestions = document.getElementById("quiz-questions");
var questionNum = 0;

var questions = [
  {
    q: "Commonly used data types DO NOT include",
    answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    correct: "3. alerts",
  },

  {
    q: "The condition in an if/else statement is enclosed within",
    answers: [
      "1. quotes",
      "2. curly braces",
      "3. parentheses",
      "4. square brackets",
    ],
    correct: "3. parentheses",
  },

  {
    q: "Arrays in JavaScript can be used to store_______",
    answers: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    correct: "1. numbers and strings",
  },

  {
    q:
      "String values must be enclosed within _______ when being assigned to variables.",
    answers: ["1. commas", "2. curly braces", "3. quotes", "4. parentheses"],
    correct: "3. quotes",
  },

  {
    q:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console log",
    ],
    correct: "4. console log",
  },
];

var startQuiz = document.getElementById("start-button");

var score = 0;

// 1. Open welcome screen.
// 2. Click on start quiz.
// 3. Clear welcome screen.
// 4. Open first question on same screen.
// 5. Create questions and answers.
// 6. Attach buttons to answers.

startQuiz.addEventListener("click", function () {
  $("#welcome-page").empty();
  displayQuestion(0);
});

// 7. Click answer and notify correct or incorrect.
// 8. If correct, add to score.

//  index of the question that we're looking at
function displayQuestion(index) {
  console.log(questions[index]);

  var questionHeader = document.createElement("h1");
  questionHeader.textContent = questions[questionNum].q;
  quizQuestions.append(questionHeader);

  for (var i = 0; i < questions[questionNum].answers.length; i++) {
    var answerButton = document.createElement("button");
    answerButton.textContent = questions[questionNum].answers[i];
    quizQuestions.append(answerButton);
    answerButton.addEventListener("click", checkAnswer);
    
    function checkAnswer() {
        if (questions.answers === questions.correct) {
        console.log("You are correct");
    
  }
}


    // if (event.target.matches("button")){
    //     questions[questionNum].answers;
    //     console.log(event.target);
    // }
  }
}


