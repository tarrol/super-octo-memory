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
  question.text('Which of these is a fruit?')
  option1.text('Banana')
  option2.text('Rock')
  option3.text('Stick')
  option4.text('Blueberry')
}
function question2() {
  question.text('Which of these is a fruit?')
  option1.text('Rock')
  option2.text('Banana')
  option3.text('Stick')
  option4.text('Blueberry')
}
function question3() {
  question.text('Which of these is a fruit?')
  option1.text('Banana')
  option2.text('Rock')
  option3.text('Stick')
  option4.text('Blueberry')
}
function question3() {
  question.text('Which of these is a fruit?')
  option1.text('Banana')
  option2.text('Rock')
  option3.text('Stick')
  option4.text('Blueberry')
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