/*
Program Name: Magic Eight Ball 
Programer Name: Talha Tallat
Program description: Magic Eight Ball using control flow in JavaScript. The user will be able to input a question, then the program will output a random fortune.
*/

// Defined a variable called userName that is set to an string.
// User can put their name in between the quotation marks.
let userName = 'Talha';

// Created a ternary expression that decides what to do if the user enters a name or not. If the user enters a name — like 'Jane' — used string interpolation to log Hello, Jane! to the console. Otherwise, simply logs Hello!.
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// Created a variable named userQuestion. The value of the variable is a string that is the question the user wants to ask the Magic Eight Ball.
const userQuestion = `Will ${userName} become a werewolf tonight?`; 

// Wrote a console.log() for the userQuestion, stating what was asked. You can include the user’s name in the console.log() statement, if you wish!
console.log(`The User asked: ${userQuestion}`);

//Math.random() returns a value between 0 (inclusive) and 1 (exclusive).
//In order to make this set of numbers range from 0 (inclusive) to 8 (exclusive) we can multiple the returned value by 8.
//Finally, to ensure we only have whole numbers from 0 to 7 we can round down using Math.floor().
const randomNumber = Math.floor(Math.random() * 8);

//Created a variable named eightBall, and set it equal to an empty string.
let eightBall = '';

//created a control flow that takes in the randomNumber and then assigns eightBall to a reply that a Magic Eight Ball would return. Utilized if/else OR switch statements. Here are 8 Magic Eight Ball phrases that we’d like to save to the variable eightBall:
if (randomNumber === 0 ){
  eightBall ='It is certain';
}
else if (randomNumber === 1){
  eightBall ='It is decidedly so';
}
else if (randomNumber === 2){
  eightBall ='Reply hazy try again';
}
else if (randomNumber === 3){
  eightBall ='Cannot predict now';
}
else if (randomNumber === 4){
  eightBall ='Do not count on it';
}
else if (randomNumber === 5){
  eightBall ='My sources say no';
}
else if (randomNumber === 6){
  eightBall ='Outlook not so good';
}
else if (randomNumber === 7){
  eightBall ='Signs point to yes';
}
console.log(`The eight ball answered: ${eightBall}`);

//Utilized switch statements rather than if/else statment 
/*
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;  
  case 2:
    eightBall = 'Reply hazy try again';
    break;  
  case 3:
    eightBall = 'Cannot predict now';
    break;  
  case 4:
    eightBall = 'Do not count on it';
    break;  
  case 5:
    eightBall = 'My sources say no';
    break;  
  case 6:
    eightBall = 'Outlook not so good';
    break;  
  case 7:
    eightBall = 'Signs point to yes';
    break;  
}
console.log(`The eight ball answered: ${eightBall}`);
*/
