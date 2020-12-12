var readlineSync = require('readline-sync');
var chalk = require('chalk');
var score=0;

var username = readlineSync.question(chalk.green("What is your name ?- "));
console.log(chalk.green.bold(username.toUpperCase()+" welcome to IPL quiz."));

var highscore=
{
  name: "MS DHONI",
  score: 50

}


function quiz(question,options,answer)
{
  var userAnswer = readlineSync.question(chalk.yellow(question)+options)

  if(userAnswer.toUpperCase()=== answer.toUpperCase())
  {
    console.log(chalk.green("Correct !"));
    score =score+ 10
  }
  else 
  {
    console.log(chalk.red("Wrong Answer"))
  }
  if (score>=highscore.score)
{
  console.log(chalk.cyan("Your Score is : "+ score))
  console.log("You are leading the board. Kindly send SS")
}
  else
  {
    console.log(chalk.cyan("Your Score is : "+ score))
  }


}


var questionarr =[
  
{
  question :"Which team won innaugral title of IPL ? -",
  options :"\na)Rajasthan Royals \nb)Chennai Super Kings\n",
  answer : "a"
},

{
  question :"Which team won most title of IPL ? - ",
   options :"\na)Mumbai Indians \nb)Chennai Super Kings\n",
  answer : "a"
},

{
  question :"Which player won orange cap of IPL 2020 ? - ",
   options :"\na)KL Rahul \nb) Mayank Agarwal\n",
  answer : "a"
},
  
{
  question :"Which player won emerging player award of IPL 2020 ? - ",
   options :"\na)Jofra Archer\nb)Devdutt Paddikal\n",
  answer : "b"
},

{
  question :"Which team DJ Bravo played first for in IPL ? - ",
   options :"\na)Mumbai Indians \nb)Chennai Super Kings\n",
  answer : "a"
}
]

for(var i=0;i<questionarr.length;i++)
{
  quiz(questionarr[i].question,questionarr[i].options,questionarr[i].answer)
}

console.log("-----------------------------------")
console.log(chalk.green.bold("Leaderboards"))
console.log(chalk.cyan("Name-",highscore.name))
console.log(chalk.cyan("Score -",highscore.score))
console.log("-----------------------------------")
