const choices = ["rock", "paper", "scissors"];
//let playerSelection = prompt("Rock, Paper, or Scissors?");
//let computerSelection = getComputerChoice();
let computerScore = 0;
let playerScore = 0;
let round = 0;


function getComputerChoice(a, b, c) {
    return randomItem = choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection == "rock" && playerSelection.toLowerCase() == "rock") {
        console.log("Tie game!");
    }

    if (computerSelection == "paper" && playerSelection.toLowerCase() == "rock") {
        console.log("You lose!");
        computerScore = ++computerScore;
    }

    if (computerSelection == "scissors" && playerSelection.toLowerCase() == "rock") {
        console.log("You Win!");
        playerScore = ++playerScore;
    }

    if (computerSelection == "rock" && playerSelection.toLowerCase() == "paper") {
        console.log("You Win!");
        playerScore = ++playerScore;
    }

    if (computerSelection == "paper" && playerSelection.toLowerCase() == "paper") {
        console.log("Tie game!");
    }

    if (computerSelection == "scissors" && playerSelection.toLowerCase() == "paper") {
        console.log("You Lose!");
        computerScore = ++computerScore;
    }

    if (computerSelection == "rock" && playerSelection.toLowerCase() == "scissors") {
        console.log("You Lose!");
        computerScore = ++computerScore;
    }

    if (computerSelection == "paper" && playerSelection.toLowerCase() == "scissors") {
        console.log("You Win!");
        playerScore = ++playerScore;
    }

    if (computerSelection == "scissors" && playerSelection.toLowerCase() == "scissors") {
        console.log("Tie Game!");
    }
    
  }
  
function game() {
    for (let i = 0; i < 5; i++) {
      let playerSelection = prompt("Rock, Paper, or Scissors?");
      let computerSelection = getComputerChoice();
      playRound(playerSelection, computerSelection);
      round++;
      console.log("Round:", round);
  }

  if (playerScore > computerScore) {
    console.log("You win the best of 5!");
  }

  if (playerScore < computerScore) {
    console.log("You lose the best of 5!");
  }

  if (playerScore == computerScore) {
    console.log("Tie Game!");
  }
 }


game()
console.log("Player Score is:", playerScore);
console.log("Computer Score is:", computerScore);