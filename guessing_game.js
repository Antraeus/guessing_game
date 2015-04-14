// You will want to start taking the time to remove unnecessary code from you commits.
// Things that should not be included are:
//    Comments (unless completely necessary)
//    Console.logs
//    White space (Take note of the different use of whitespace in HTML and JS)

// Also, I moved your this.ranking method out of the constructor. You shouldn't
// be writing methods into constructors; rather write them as prototypes.

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
  }

  Player.prototype.ranking = function() {
    console.log("Player Total Score: " + this.totalScore + " Player Questions: " + this.totalQuestions);
    this.rank += (this.totalQuestions - this.totalScore);
  };

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
    }
  };

  var newPlayer = new Player(prompt('What name are you called?'));

  document.write("Welcome, " + newPlayer.name);
  var playerFeelings = prompt("We\'ll be sucking a few minutes of your life away, " + newPlayer.name + ". How do you feel?");
  console.log(playerFeelings);
  document.write("'<br><p> " + newPlayer.name + ' is feeling: ' + playerFeelings + '. <br>Reconfiguring our lexicon of available terms to match your present emotional state..</p>')

  newPlayer.getQuestion();
  window.newPlayer = newPlayer;
})();
