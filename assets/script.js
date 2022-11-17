var startGame = $('#startGame');

var timeRemaining = 60
var rightAnswers = 0
var wrongAnswers = 0
var questionAnswered = false
var intervalExist = false

var option1 = $('#opt1')
var option2 = $('#opt2')
var option3 = $('#opt3')
var option4 = $('#opt4')
var question = $('#quizQuestion')

var response1 = false
var response2 = false
var response3 = false
var response4 = false

function question1() {
  question.text('Commonoly used data types do NOT include: ')
  option1.text('strings')
  option2.text('booleans')
  option3.text('alerts')
  option4.text('numbers')
}
function question2() {
  question.text('The condition in an if / else statement is enclosed with: ')
  option1.text('quotes')
  option2.text('curly brackets')
  option3.text('parenthesis')
  option4.text('square brackets')
}
function question3() {
  question.text('Arrays in JavaScript can be used to store')
  option1.text('numbers and strings')
  option2.text('other arrays')
  option3.text('booleans')
  option4.text('all of the above')
}
function question4() {
  question.text('String values must be enclosed within ____ when being assigned to variables')
  option1.text('commas')
  option2.text('curly brackets')
  option3.text('quotes')
  option4.text('parenthesis')
}
function question5() {
  question.text('A very useful tool used during development and debugging for printing content to the debugger is: ')
  option1.text('JavaScript')
  option2.text('terminal / bash')
  option3.text('for loops')
  option4.text('console.log')
}


function startTimer() {
  timeRemaining = 60
  function myTimer() {
    timeRemaining--
    $('#time').text(timeRemaining)
    if (timeRemaining <= 0) {
      clearInterval(theInterval)
      intervalExist = false
      $('#gameState').text("Sorry! You lost.")

    }
  }
  var theInterval = setInterval(() => {
    myTimer();
  }, 1000);
  intervalExist = true
}


function nextQuestion() {
  if (wrongAnswers + rightAnswers === 0) {
    if (questionAnswered == true && response1 == true) { rightAnswers++; answerReset; question2(); } else if (response1 != true && questionAnswered == true) { wrongAnswers++; answerReset; question2(); }
  }

}

function startQuiz() {
  answerReset()
  wrongAnswers = 0
  rightAnswers = 0
  startTimer()
  question1()
  $('#optList').removeClass('d-none')
}



function answerReset() {
  response1 = false
  response2 = false
  response3 = false
  response4 = false
}

function alert1() {
  console.log("btn1 pressed");
  response1 = true
  questionAnswered = true
  nextQuestion();
}

function alert2() {
  console.log("btn2 pressed");
  questionAnswered = true
  response2 = true
  nextQuestion();
}

function alert3() {
  console.log("btn3 pressed");
  questionAnswered = true
  response3 = true
  nextQuestion();
}

function alert4() {
  console.log("btn4 pressed");
  questionAnswered = true
  response4 = true
  nextQuestion();
}

startGame.on("click", startQuiz);
option1.on("click", alert1)
option2.on("click", alert2)
option3.on("click", alert3)
option4.on("click", alert4)