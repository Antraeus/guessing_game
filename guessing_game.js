/*==========================================+
| Version 1.3                               |
| Added object constructor for new player   |
| creation, which in turn tracks their      |
| score as they progress through the game.  |
| __________________________________________+
*/


//Setting the up the user name and scoreboard
// Potential top score board
// (function() {
//     var Student = function(name) {
//       this.name = name;
//     };
//     Student.prototype.getName = function () {
//       return this.name;
//     };
//     Student.prototype.setName = function(name) {
//       this.name = name;
//     };
//   )}();

function Player (name) {
  this.name            = name;
  // this.ranking         = ranking;
  this.totalScore      = 0;
  this.totalQuestions  = 5;
  }
  // Player.ranking  = function() {
  //   console.log("Player Total Score: " + Player.totalScore + " Player Questions: " + Player.totalQuestions);
  //   return Player.totalQuestions - Player.totalScore;
  // };

var newPlayer     = new Player(prompt('What name are you called?'));

// Welcome the user and gauge the contents of their feelings in an awkward manner.
document.write("Welcome, " + newPlayer.name);
var playerFeelings = prompt("We\'ll be sucking a few minutes of your life away, " + newPlayer.name + ". Tell me, how do you feel?");
console.log(playerFeelings);
document.write('<br><p>The user is feeling: ' + playerFeelings + '.<br>  Retabulating our lexicon of available terms to match your feelings..</p>')

// Start: Q#1
var answer1 = prompt("Name a programming language that's also a gem?");
if (answer1.toUpperCase() === 'RUBY') {
  newPlayer.totalScore++;
  document.write('<p>(4) questions remaining!</p>');
} else {
  alert('Shameful display! You have lost face with your Acuminous Lanague Proctor.');
  newPlayer.totalScore--;
  document.write('<p>(4) questions remaining!</p>');
}
// End: #1

// Start: Q#2
var answer2 = prompt("Name a programming language that's also a reptile?")
if (answer2.toUpperCase() === 'PYTHON'){
  newPlayer.totalScore++;
  document.write('<p>(3) questions remaining!</p>');
} else {
  alert('Shameful display! You have lost face with your Acuminous Lanague Proctor.');
  // newPlayer.totalQuestions--;
  document.write('<p>(3) questions remaining!</p>');
}
// End: #2

// Start: Q#3
var answer3 = prompt("What language do you use to style web pages?");

if (answer3.toUpperCase() === 'CSS') {
  newPlayer.totalScore++;
  document.write('<p>(2) questions remaining!</p>');
} else {
  alert('Shameful display! You have lost face with your Acuminous Lanague Proctor.');
  // newPlayer.totalQuestions--;
  document.write('<p>(2) questions remaining!</p>');
}
// End: #3

// Start: Q#4
var answer4 = prompt("What language do you use to create structure in your web pages?");

if (answer4.toUpperCase() === 'HTML') {
  newPlayer.totalScore++;
  // newPlayer.totalQuestions--;
  document.write('<p>Last question!</p>');
} else {
  alert('Shameful display! You have lost face with your Acuminous Lanague Proctor.');
  // newPlayer.totalQuestions--;
  document.write('<p>Last question!</p>');
}
// End: #4

// Start: Q#5
var answer5 = prompt("What langauge do you use to create interactivity into your web pages?");
if (answer5.toUpperCase() === 'JAVASCRIPT') {
  newPlayer.totalScore++;
  // newPlayer.totalQuestions--;
} else {
  alert('Shameful display! You have lost face with your Acuminous Lanague Proctor.');
  // newPlayer.totalQuestions--;
}
// End: #5
// Results of totalScore with rank sorting
if (newPlayer.totalScore == 5){
  document.write('<p>The world shudders with awe in the wake of your triumph! </br>Bask in your glory: you\'ve been awarded a shiny gold star. Wow! <br> <img src="http://i.imgur.com/pSrrGzA.gif"> </p>');
} else if (newPlayer.totalScore == 4){
  document.write('Herald declare your name, and we dub thee' + newPlayer.name + ', the Penultimate');
} else if (newPlayer.totalScore == 3){
  document.write('<p>Honorable attempt, but you\'ve passed by quite a narrow margin. <br> We seem to have run out of gold stars, sorry</p>');
} else {
  document.write('<p>The world shudders in abject horror from your dalliance with ignorance, ' + newPlayer.totalScore + ' is not passing. </br> Please address this malfeasance and try again.</p>');
}
