const readlineSync = require("readline-sync");


var userName = readlineSync.question("May I have your name ? ");
console.log("Welcome to the game HOW GOOD YOU KNOW, Me ? "+ userName);

if( readlineSync.keyInYN("Would you like to play the game ? Then press 'y', if not press 'n'")){
  console.log("Lets play then !")
}else{
  console.log("Till next time then...")
  process.exit(1)
}


var score = 0;

var highestScorers = [
  {
    name: "neil",
    score:"4"
  },{
    name: "sandy",
    score: "3"
  }
]

function play(question,answer){


var userAnswer = readlineSync.question(question);

if (userAnswer === answer){
  console.log("Right Answer !")
  score++;
}else{
  console.log("Not Quite.")
  score = score-1 ;
}

console.log("Score: "+score);
console.log("-------------")
}

var questions = [
  {
    question :"Am I 18 yet ? ",
    answer : "yes"},
  
  
    {question : "Is CR7 is my fav footballer ? ",
    answer : "yes"},{
      question:"Do I have a laptop ?",
      answer: "no"
    },
  
    {question : "Do I watch anime ? ",
    answer : "yes"
  },{
    question: "Which is my Fav web series ? ",
    answer : "Peaky Blinders"
  }

]



for(i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
  }  
  console.log("Your Final Score is "+score)


for(i=0; i<highestScorers.length; i++){
  var currentScorer = highestScorers[i];
  console.log("Here are the Highest scorers - ")
  console.log(currentScorer.name,currentScorer.score);
}