function getPlayerChoice() {
  let playerInput = prompt("Select rock, paper, or scissors");
  let validChoices = ['rock', 'paper', 'scissors'];
  playerInput = playerInput.toLowerCase();
  if (!validChoices.includes(playerInput)) {
    playerInput = prompt("Please enter a valid choice. Select select either \'rock\', \'paper\', or \'scissors\'")
  }
  return playerInput;
}

function GetComputerChoice() {
  let choicesArray = [
    'rock',
    'paper',
    'scissors'
  ];

  let randomNumber = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  let resultTie = [`You tie! You both chose ${playerSelection}`, 0, 0];
  let resultWin = [`You win! ${playerSelection} beats ${computerSelection}`, 1, 0];
  let resultLoss = [`You lose! ${computerSelection} beats ${playerSelection}`, 0, 1];

  if (computerSelection === playerSelection) {
    return resultTie;
  }
  if (playerSelection === 'rock') {
    if (computerSelection == 'paper') {
      return resultLoss;
    } else {
      return resultWin;
    }
  }
  if (playerSelection === 'paper') {
    if (computerSelection === 'scissors') {
      return resultLoss;
    } else {
      return resultWin;
    }
  }
  if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      return resultLoss;
    } else {
      return resultWin;
    }
  }
}

function playGame() {
  let resultGameWin = 'Congratulations, you have won the best of 5';
  let resultGameLoss = 'Sorry, you have lost the best of 5';

  let playerScore = 0;
  let computerScore = 0;

  while (playerScore < 3 && computerScore < 3) {
    let result = playRound(getPlayerChoice(), GetComputerChoice());
    console.log(result[0]);
    playerScore += result[1];
    computerScore += result[2];
    console.log(`Current game score | Player: ${playerScore} Computer: ${computerScore}`)
  }
  return (playerScore > 3) ? resultGameWin : resultGameLoss;
}

console.log(playGame());
