/*
  Programmer Name: Talha Tallat
  Program name: Rock, Paper, or Scissors
  Program description: Rock paper scissors is a classic two player game. 
                       Each player chooses either rock, paper, or scissors.
                       The items are compared, and whichever player chooses the more powerful item wins.
*/

// The user should choose ‘rock’, ‘paper’, or ‘scissors’ when the game starts.
//function named getUserChoice created that takes a single parameter userInput.
const getUserChoice = userInput => {
  //makes userInput all lowercase.
  userInput = userInput.toLowerCase(); 
//When getting the user’s choice, making sure that the user types a valid choice: ‘rock’, ‘paper’, or ‘scissors’.
//Inside getUserChoice(), wrote an if/else statement that makes sure the userInput is either 'rock', 'paper', or 'scissors'. If it does, then returns the userInput. If not, then prints an error message to the console.
//In getUserChoice(), added a fourth condition that checks if the userInput is 'bomb' for adding a secret cheat code.
  if (userInput === 'rock' || userInput === 'paper' || userInput ==='scissors' || userInput ==='bomb'){
  return userInput;
  } else {
    console.log('Error!');
  }
};

//Now computer make a choice.
//Created a new function named getComputerChoice with no parameters. Inside its block, utilized Math.random() and Math.floor() to get a whole number between 0 and 2. Then, depending on the number, returns either 'rock', 'paper', or 'scissors'.
const getComputerChoice =()  => {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
	}
}

// Now it’s time to determine a winner.
// Created a function named determineWinner that takes two parameters named userChoice and computerChoice. This function will compare the two choices played and then return if the human player won, lost, or tied.
// Dealing with the tie condition first. Within the determineWinner() function, wrote an if statement that checks if the userChoice parameter equals the computerChoice parameter. If so, returns a string that the game was a tie.
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return "The game is a tie!";
  }
// If the game is not a tie, determine a winner.
//Wrote an if statement that checks if the userChoice is 'rock'. Inside the if statement’s block, wrote another if/else statement. The inner if/else checks if the computerChoice is 'paper'. If so, returns a message that the computer won. If not, returns a message that the user won.
  if (userChoice === 'rock'){
      if (computerChoice === 'paper'){
          return "The computer won!";
      } else "The user won!";
  }

// Wrote another if statement for if the userChoice is 'paper'.
//if statement, the computerChoice must be either 'scissors' or 'rock'. Wrote logic that will return a winner.
  if (userChoice === 'paper'){
      if (computerChoice === 'scissors'){
        return "The computer won!";
      } else {
         return "The user won!";
      } 
  }

// if statement for if the userChoice is 'scissors'.
//if statement, the computerChoice must either be 'rock' or 'paper'. Write logic that will return a winner
  if (userChoice === 'scissors'){
      if (computerChoice === 'paper'){
        return "The user won!";
      } else {
        return "The computer won!";
      } 
  }
//adding a secret cheat code. If a user types 'bomb' as their choice, then making sure they win, no matter what.
  if (userChoice === 'bomb'){
      if (computerChoice === 'paper' || 'scissors' || 'rock'){
        return "!!BOMB!! The user won!";
      } else {
        return "The computer won!";
      } 
  }
}

//Testing.
//console.log(determineWinner('rock', 'paper'));


// determine who won.
// Inside the playGame() function, called the determineWinner() function. Passed in the userChoice and computerChoice variables as its parameters.
const playGame =()  => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:'+computerChoice);

  console.log(determineWinner(userChoice, computerChoice))
}
//Then, to start the game, called the playGame() function on the last line of the program.
playGame();
