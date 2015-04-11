
/*==========================================+
| Version 1.4                               |
| Added object constructor for new player   |
| creation, which in turn tracks their      |
| score as they progress through the game.  |
| __________________________________________+
*/


(function(){
var questions = ['Name a programming language that\'s also a gem?', 'Name a programming language that\'s also a reptile?','What language do you use to style web pages?','What language do you use to create structure in your web pages?','What language do you use to add interactivity into your web pages?'];
var answers = ['RUBY','PYTHON','CSS','HTML','JAVASCRIPT'];

function Player (name, questions, answers) {
  this.answers         = answers;
  this.questions       = questions;
  this.name            = name;
  this.totalScore      = 0;
  this.totalQuestions  = 5;
  this.rank            = 0;
  this.currentQuestion = 0;

  this.ranking         = function() {
    console.log("Player Total Score: " + this.totalScore + " Player Questions: " + this.totalQuestions);
    this.rank += (this.totalQuestions - this.totalScore);
  };
}

Player.prototype.getQuestion = function() {
  var h1 = document.getElementById('questionStage');
  h1.textContent = questions[this.currentQuestion];
};

Player.prototype.checkAnswer = function() {

  var gameTextArea = document.getElementById('GameTextArea');

  if (gameTextArea.value.toUpperCase() === answers[this.currentQuestion++]){
    var div = document.getElementById('scoreBoard');
    div.textContent = ++this.totalScore
    this.getQuestion();
  }else{


  }
  if (answers[this.currentQuestion] === 4){
    ranking();
    // document.getElementById('scoreBoard') = var
  }
};
//modify left side by giving it right side



// Create newPlayer instance of Player object
var newPlayer = new Player(prompt('What name are you called?'));

document.write("Welcome, " + newPlayer.name);
var playerFeelings = prompt("We\'ll be sucking a few minutes of your life away, " + newPlayer.name + ". How do you feel?");               //DOM FUNCTION
console.log(playerFeelings);
document.write("'<br><p> " + newPlayer.name + ' is feeling: ' + playerFeelings + '. <br>Reconfiguring our lexicon of available terms to match your present emotional state..</p>')


newPlayer.getQuestion();
window.newPlayer = newPlayer; // Put things in the global scope at the bottom of your code.




// // QUESTIONS

// }
// console.log(newPlayer.totalScore + " score after 1st question");

// document.getElementById('questionStage').textContent = questions[1];
// if (answer2.toUpperCase() === 'PYTHON'){
//   document.getElementById('scoreBoard').textContent = ++newPlayer.totalScore;
//   document.write('<p>(3) questions remaining!</p>');
// } else {
//   alert('Shameful display! You have lost face with your Acuminous Lanague Proctor.');
// }
// console.log(newPlayer.totalScore + " score after 2nd question");

// document.getElementById('questionStage').textContent = questions[2];
// if (answer3.toUpperCase() === 'CSS') {
//   document.getElementById('scoreBoard').textContent = ++newPlayer.totalScore;
//   document.write('<p>(2) questions remaining!</p>');
// } else {
//   alert('Shameful display! You have lost face with your Acuminous Language Proctor.');
// }
// console.log(newPlayer.totalScore + " score after 3rd question");

// document.getElementById('questionStage').textContent = questions[3];

// if (answer4.toUpperCase() === 'HTML') {
//   document.getElementById('scoreBoard').textContent = ++newPlayer.totalScore;
// } else {
//   alert('Shameful display! You have lost face with your Acuminous Language Proctor.');

// }
// console.log(newPlayer.totalScore + " score after 4th question");

// document.getElementById('questionStage').textContent = questions[4];
// if (answer5.toUpperCase() === 'JAVASCRIPT') {
// document.getElementById('scoreBoard').textContent = ++newPlayer.totalScore;

// } else {
//   alert('Shameful display! You have lost face with your Acuminous Language Proctor.'); //DOM FUNCTION
// }
// console.log(newPlayer.totalScore + " score after 5th question");
// // End of QUESTIONS
//                           // Results of totalScore with rank sorting
//                           newPlayer.ranking();
//                           console.log(newPlayer.rank + " this is the rank.");
// RANKS
// function (){}
// if (newPlayer.rank == 0){
//   document.write('<p>The world shudders with awe in the wake of your triumph! </br>Bask in your glory: you\'ve been awarded a shiny gold star. Wow! <br> <img src="http://i.imgur.com/pSrrGzA.gif"> </p>');

// } else if (newPlayer.rank == 1){
//   document.write('Heralds proclaim your name, and we dub thee ' + newPlayer.name + ', the Penultimate');

// } else if (newPlayer.rank == 2){
//   document.write('<p>Honorable attempt, but you\'ve passed by the hair of your chinny-chin-chin. <br> We seem to have run out of gold stars, sorry</p>');

// } else {
//   document.write('<p>The world shudders in abject horror from your dalliance with ignorance, ' + newPlayer.totalScore + ' is not passing. </br> Please address this malfeasance and try again.</p>');
// }

})();
