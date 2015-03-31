//Setting the initial score
//
var totalScore = 0;
//
//Begin Questionnaire

// Start: #1
var answer1 = prompt("Name a programming language that's also a gem?");
if (answer1.toUpperCase() === 'RUBY') {
  totalScore += 1;
} else {
  alert('That\'s wrong!');
}
// End: #1

// Start: #2
var answer2 = prompt("Name a programming language that's also a reptile?")
if (answer2.toUpperCase() === 'PYTHON'){
  totalScore += 1;
} else {
  alert('That\'s wrong!');
}
// End: #2

// Start: #3
var answer3 = prompt("What language do you use to style web pages?");

if (answer3.toUpperCase() === 'CSS') {
  totalScore += 1;
} else {
  alert('That\'s wrong!');
}
// End: #3

// Start: #4
var answer4 = prompt("What language do you use to create structure in your web pages?");

if (answer4.toUpperCase() === 'HTML') {
  totalScore += 1;
} else {
  alert('That\'s wrong!');
}
// End: #4

// Start: #5
var answer5 = prompt("What langauge do you use to create interactivity into your web pages?");
if (answer5.toUpperCase() === 'JAVASCRIPT') {
  totalScore += 1;
} else {
  alert('That\'s wrong!');
}
// End: #5

// Results of totalScore
if (correct > 3){
  alert('The world shudders with awe in the wake of your triumph!');
} else {
  alert('The world shudders in abject horror from your performance.' + score + ' is not passing.')
}
