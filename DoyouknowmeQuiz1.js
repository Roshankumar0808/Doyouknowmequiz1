var readlineSync = require("readline-sync");

var score = 0;

// array of objects
function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to Roshan's quiz");
  console.log("                                         ");
  console.log("This quiz coantains 10 questions about Roshan if you score 6+ he will reward you with  quiz about "+ userName+" which you can share among your friends, So,Lets Begin!!!!!!!");
  console.log("                                               ");
  console.log("Rules:");
  console.log("This quiz coantains negative marking of -1 for incorrect options.");
  console.log("                                           ");
  console.log("Note:Answers must be of one word only,Take care of spellings as well.");
  console.log("                                                   ");
}
var questions = [{
  question: "1️⃣ "+" Where do Roshan live? ",
  answer: "Patna"
}, {
  question: "2️⃣ "+" Which music genre Roshan likes the most? ",
  answer: "Rap"
},
{
  question: "3️⃣ "+" Currently Roshan is pursing which degree course? ",
  answer: "B.Tech"
},
{
  question: "4️⃣ "+" What does he prefer the most Tea/coffee? ",
  answer: "Tea"
},
{
  question: "5️⃣ "+" On which date did he celebrates his birthday?     (answer:date+month,space not alllowed)",
  answer: "8August"
},
{
  question: "6️⃣ "+" From which college he is pursing his undergrad?     (answer college+college city space can be used here)",
  answer: "VIT Vellore"
},
{
  question: "7️⃣ "+" He completed his schooling from which school? (answer in short form)",
  answer: "KV"
},
{
  question: "8️⃣ "+" His instagram ID?",
  answer: "roshan4445"
},
{ 
  question:"9️⃣ "+" Which sports did he likes the most?",
  answer: "Football"
},
{ 
  question:"🔟 "+" His graduation branch? (Answer in short form)",
  answer: "EEE"
}
];






function implement(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log("✔️");
    score = score + 1;
    
  } else {
    console.log("❌");
    score = score - 1;
   
  }

  console.log("current score: ", score);
  console.log("✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨")
  console.log("                                         ");
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    implement(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("🎉🎉🎉🎉🎉 You SCORED: ", score);

  console.log("Check out the high scores, if you should be there DM me on instagram(roshan4445) and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}

var highScores = [
  {
    name: "Adarsh",
    score: 5,
  },

  {
    name: "Lakshay",
    score: 7,
  },
]



welcome();
game();
showScores();
console.log("If you score more than 6, send screenshot on instagram (roshan4445) to get your own quiz,you can ask for modification in questions too.")
console.log("Thanks for devoting your valuable time.")
console.log("                                                                                             ")
console.log("Made by Roshan")
console.log("follow on instagram @roshan4445.")
