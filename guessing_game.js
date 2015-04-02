/*
+===========================================+
| Version 1.3                               |
| Added object constructor for new player   |
| creation, which in turn tracks their      |
| score as they progress through the game.  |
|                                           |
+-=========================================-+
*/
//Setting the up the user name and scoreboard
function Player (name, totalScore) {
  this.name       = name;
  this.totalScore = totalScore;
  totalScore      = 0;
  };
  Player.ranking  = function() {
    return this.totalScore - totalQuestions;
  }
};

var totalScore     = 0;
var totalQuestions = 5;
var newPlayer1     = new Player(prompt('Desired player name'));

/*
var Player.name = function () {
  var answer = prompt();
  if (answer.toUpperCase === 'YES') {

  }
}
*/

document.write("Welcome, " + newPlayer1.name);
//
// Start: #1
var answer1 = prompt("Name a programming language that's also a gem?");
if (answer1.toUpperCase() === 'RUBY') {
  Player.totalScore++;
} else {
  alert('That\'s wrong!');
}
// End: #1

// Start: #2
var answer2 = prompt("Name a programming language that's also a reptile?")
if (answer2.toUpperCase() === 'PYTHON'){
  Player.totalScore++;
} else {
  alert('That\'s wrong!');
}
// End: #2

// Start: #3
var answer3 = prompt("What language do you use to style web pages?");

if (answer3.toUpperCase() === 'CSS') {
  Player.totalScore++;
} else {
  alert('That\'s wrong!');
}
// End: #3

// Start: #4
var answer4 = prompt("What language do you use to create structure in your web pages?");

if (answer4.toUpperCase() === 'HTML') {
  Player.totalScore++;
} else {
  alert('That\'s wrong!');
}
// End: #4

// Start: #5
var answer5 = prompt("What langauge do you use to create interactivity into your web pages?");
if (answer5.toUpperCase() === 'JAVASCRIPT') {
  Player.totalScore++;
} else {
  alert('That\'s wrong!');
}
// End: #5

// Results of totalScore
if (Player.totalScore >= 3){
  alert('The world shudders with awe in the wake of your triumph!');
} else {
  alert('The world shudders in abject horror from your dalliance with ignorance.' + totalScore.Player + ' is not passing.')
}
