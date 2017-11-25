// Totally Trivial trivia! 
// Time remaining: in seconds
// All done!
// Correct answer:
// Incorrect answer:
// Unanswered:

// //Psuedocode
// 1. create a button for click start
// 2. trivia triviaQ starts upon clicking "start"
// 3. timer runs (in seconds)
// 4. display multiple choices questions
// 5. when time runs out, triviaQ is over. display (correct answer, incorrect answer, unanswered scores)
// create submit button.
// 5a. OR when user is done, click submit button.
// 6. when all questions are answered, display (correct answer, incorrect answer, and unanswered scores)
// 7. music (in the background?)
// all done, here's how you did!

$(document).ready(function() {



var intervalId;

    function run() {
      intervalId = setInterval(decrement, 30000);
      triviaQ.run();
    }

    function decrement() {
      number--;
      if (number === 0) {
        stop();
        alert("Time Up!");
      }
    }

var triviaQ = {

  correctAnswers: 0,
  incorrectAnswers: 0,
  counter: 120,

  countdown: function() {
    triviaQ.counter--;
    $("#counter-number").html(triviaQ.counter);
    if (triviaQ.counter === 0) {
      console.log("TIME UP");
      triviaQ.done();
    }

  function run (){
    intervalId = setInterval(triviaQ.countdown, 1000)
  }

  },


var userAnswer = ["","","","",""]; //when user choose an answer, store in the array


var runTime = 0;
var timeRemaining
var correctAnswers;
var incorrectAnswers;
var unanswered;

$("#start").click(function(){
  for (var i = 0; i < questions.length; i++){
  var newDiv = $("<div>");
    // $("#questions").append(questions[i].question + "<br>");
    var question = $("<p>");
    question.html(questions[i].question);
    newDiv.append(question);

  for (var j=0; j < questions[i].choices.length; j++){
    var choice = $("<button>");
    choice.html(questions[i].choices[j]);
    newDiv.append(choice);
  }
  $("#questions").append(newDiv);

  }

  if (userAnswer === questions[i].answer) {
    correctAnswers++;
  }
  else {
   incorrectAnswers++;
  }

});

var questions = [{
  question: "What food makes up about 99% of a Giant Panda's diet?",
  choices: ["Grass", "Bamboo", "Meat", "Carrots"],
  answer: "Bamboo"
}, {
  question: "What is the largest type of 'big cat' in the world?",
  choices: ["Tiger", "Siamese Cat", "Garfield", "Sphynx Cat"],
  answer: "Tiger"
}, {
  question: "What kind of animals live in an apiary?",
  choices: ["Bees", "Flies", "Penguins", "Yaks"],
  answer: "Bees"
}, {
  question: "A female donkey is called ________?",
  choices: ["Doe", "Calf", "Jenny", "Foal"],
  answer: "Jenny"
}, {
  question: "What is the name for a collection of frogs?",
  choices: ["School", "Group", "Cluster", "Army"],
  answer: "Army"
}];

});
