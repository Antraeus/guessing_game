/*==========================================+
| Version 1.3                               |
| Added object constructor for new player   |
| creation, which in turn tracks their      |
| score as they progress through the game.  |
| __________________________________________+
*/



function Player (name) {
  this.name            = name;
  this.totalScore      = 0;
  this.totalQuestions  = 5;
  this.rank            = 0; //Moved out of global scope

  this.ranking         = function() {
    console.log("Player Total Score: " + this.totalScore + " Player Questions: " + this.totalQuestions);
    this.rank += (this.totalQuestions - this.totalScore);
    console.log("RANK IN RANKING: " + this.rank);
  };
}

var newPlayer     = new Player(prompt('What name are you called?'));                  //DOM FUNCTION
////////////////////////////////////////////////////////////////////////////////
// Welcome the user and gauge the contents of their feelings in an awkward manner.
document.write("Welcome, " + newPlayer.name);
var playerFeelings = prompt("We\'ll be sucking a few minutes of your life away," + newPlayer.name + ". How do you feel?");               //DOM FUNCTION
console.log(playerFeelings);
document.write('<br><p>The user is feeling: ' + playerFeelings + '.<br>  Retabulating our pre-existing lexicon of available terms to match your present emotional state..</p>')
////////////////////////////////////////////////////////////////////////////////
// Start: Q#1
var answer1 = prompt("Name a programming language that's also a gem?");               //DOM FUNCTION
if (answer1.toUpperCase() === 'RUBY') {
  newPlayer.totalScore++;
  document.write('<p>(4) questions remaining!</p>');
} else {
  alert('Shameful display! You have lost face with your Acuminous Lanague Proctor.'); //DOM FUNCTION
  document.write('<p>(4) questions remaining!</p>');
}
console.log(newPlayer.totalScore + " score after 1st question");
// End: #1
////////////////////////////////////////////////////////////////////////////////
// Start: Q#2
var answer2 = prompt("Name a programming language that's also a reptile?");           //DOM FUNCTION
if (answer2.toUpperCase() === 'PYTHON'){
  newPlayer.totalScore++;
  document.write('<p>(3) questions remaining!</p>');
} else {
  alert('Shameful display! You have lost face with your Acuminous Lanague Proctor.'); //DOM FUNCTION
  document.write('<p>(3) questions remaining!</p>');
}
console.log(newPlayer.totalScore + " score after 2nd question");
// End: #2
////////////////////////////////////////////////////////////////////////////////
// Start: Q#3
var answer3 = prompt("What language do you use to style web pages?");                  //DOM FUNCTION

if (answer3.toUpperCase() === 'CSS') {
  newPlayer.totalScore++;
  document.write('<p>(2) questions remaining!</p>');
} else {
  alert('Shameful display! You have lost face with your Acuminous Language Proctor.'); //DOM FUNCTION
  document.write('<p>(2) questions remaining!</p>');
}
console.log(newPlayer.totalScore + " score after 3rd question");
// End: #3
////////////////////////////////////////////////////////////////////////////////
// Start: Q#4
var answer4 = prompt("What language do you use to create structure in your web pages?"); //DOM FUNCTION

if (answer4.toUpperCase() === 'HTML') {
  newPlayer.totalScore++;
  document.write('<p>Last question!</p>');
} else {
  alert('Shameful display! You have lost face with your Acuminous Language Proctor.'); //DOM FUNCTION
  document.write('<p>Last question!</p>');
}
console.log(newPlayer.totalScore + " score after 4th question");
// End: #4
////////////////////////////////////////////////////////////////////////////////
// Start: Q#5
var answer5 = prompt("What langauge do you use to create interactivity into your web pages?"); //DOM FUNCTION

if (answer5.toUpperCase() === 'JAVASCRIPT') {
  newPlayer.totalScore++;

} else {
  alert('Shameful display! You have lost face with your Acuminous Language Proctor.'); //DOM FUNCTION
}
console.log(newPlayer.totalScore + " score after 5th question");
// End: #5
////////////////////////////////////////////////////////////////////////////////
                            // Results of totalScore with rank sorting
                            newPlayer.ranking();
                            console.log(newPlayer.rank + " this is the rank.");
////////////////////////////////////////////////////////////////////////////////
if (newPlayer.rank == 0){
  document.write('<p>The world shudders with awe in the wake of your triumph! </br>Bask in your glory: you\'ve been awarded a shiny gold star. Wow! <br> <img src="http://i.imgur.com/pSrrGzA.gif"> </p>');

} else if (newPlayer.rank == 1){
  document.write('Heralds proclaim your name, and we dub thee' + newPlayer.name + ', the Penultimate');

} else if (newPlayer.rank == 2){
  document.write('<p>Honorable attempt, but you\'ve passed by the hair of your chinny-chin-chin. <br> We seem to have run out of gold stars, sorry</p>');

} else {
  document.write('<p>The world shudders in abject horror from your dalliance with ignorance, ' + newPlayer.totalScore + ' is not passing. </br> Please address this malfeasance and try again.</p>');
}
