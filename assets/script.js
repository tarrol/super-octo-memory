//Declared Variables

var startGame = $('#startGame');

var timeRemaining = 60
var rightAnswers = 0
var wrongAnswers = 0
var questionAnswered = false

var option1 = $('#opt1')
var option2 = $('#opt2')
var option3 = $('#opt3')
var option4 = $('#opt4')
var question = $('#quizQuestion')

var response1 = false
var response2 = false
var response3 = false
var response4 = false

//Questions for the quiz

function question1() {
  question.text('Commonly used data types do NOT include: ')
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

//Timer function for the game

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
}

//Game logic

function nextQuestion() {
  if (wrongAnswers + rightAnswers === 0) {
    if (questionAnswered == true && response3 == true) { rightAnswers++; answerReset; question2(); questionAnswered = false; } else if (response3 != true && questionAnswered == true) { wrongAnswers++; answerReset; question2(); questionAnswered = false; }
  }
  if (wrongAnswers + rightAnswers === 1) {
    if (questionAnswered == true && response3 == true) { rightAnswers++; answerReset; question3(); questionAnswered = false; } else if (response3 != true && questionAnswered == true) { wrongAnswers++; answerReset; question3(); questionAnswered = false; }
  }
  if (wrongAnswers + rightAnswers === 2) {
    if (questionAnswered == true && response4 == true) { rightAnswers++; answerReset; question4(); questionAnswered = false; } else if (response4 != true && questionAnswered == true) { wrongAnswers++; answerReset; question4(); questionAnswered = false; }
  }
  if (wrongAnswers + rightAnswers === 3) {
    if (questionAnswered == true && response3 == true) { rightAnswers++; answerReset; question5(); questionAnswered = false; }
    else if (response3 != true && questionAnswered == true) { wrongAnswers++; answerReset; questionAnswered = false; }
  }
  if (wrongAnswers + rightAnswers === 4) {
    if (questionAnswered == true && response4 == true) { rightAnswers++; answerReset(); questionAnswered = false; alert("Game complete! You answered " + rightAnswers + " questions correctly") }
    else if (response4 != true && questionAnswered == true) { wrongAnswers++; answerReset(); questionAnswered = false; alert("Game complete! You answered " + rightAnswers + " questions correctly") }
  }

}

//Printing the score to the scoreboard

function printScore() {

}

//Quiz start function

function startQuiz() {
  answerReset()
  wrongAnswers = 0
  rightAnswers = 0
  startTimer()
  question1()
  $('#optList').removeClass('d-none')
}

//Functions to log the user answer, to continue the game, and to reset the answers before the next question.

function answerReset() {
  response1 = false
  response2 = false
  response3 = false
  response4 = false
}

function alert1() {
  response1 = true
  questionAnswered = true
  nextQuestion();
}

function alert2() {
  questionAnswered = true
  response2 = true
  nextQuestion();
}

function alert3() {
  questionAnswered = true
  response3 = true
  nextQuestion();
}

function alert4() {
  questionAnswered = true
  response4 = true
  nextQuestion();
}

// event listeners for the buttons on screen

startGame.on("click", startQuiz);
option1.on("click", alert1)
option2.on("click", alert2)
option3.on("click", alert3)
option4.on("click", alert4)