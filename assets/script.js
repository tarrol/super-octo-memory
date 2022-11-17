var startGame = $('#startGame');
var timeRemaining = 60
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
  question.text('Which of these is a fruit?')
  option1.text('Banana')
  option2.text('Rock')
  option3.text('Stick')
  option4.text('Blueberry')
}
function question2() {

}
function question3() {

}
function question3() {

}


function startTimer() {
  timeRemaining = 60
  function myTimer() {
    timeRemaining--
    $('#time').text(timeRemaining)
    if (timeRemaining <= 0) {
      clearInterval(theInterval)
      $('#gameState').text("Sorry! You lost.")
    }
  }
  var theInterval = setInterval(() => {
    myTimer();
  }, 1000);
}

function startQuiz() {
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
  response1 = true
}

function alert2() {
  response2 = true
}

function alert3() {
  response3 = true
}

function alert4() {
  response4 = true
}

startGame.on("click", startQuiz);
option1.on("click", alert1)
option2.on("click", alert2)
option3.on("click", alert3)
option4.on("click", alert4)