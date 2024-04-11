function GetComputerChoice() {
  let choicesArray = [
    'rock',
    'paper',
    'scissors'
  ];

  let randomNumber = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomNumber];
}

function updateResult(result, playerScore, computerScore) {
  outcomeDisplay.textContent = result;
  playerScoreDisplay.textContent = `Player: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer: ${computerScore}`;
  if (playerScore >= 5) {
    outcomeDisplay.textContent = resultGameWin;
  } else if (computerScore >= 5) {
    outcomeDisplay.textContent = resultGameLoss;
  }
}

function playRound(playerSelection, computerSelection) {
  let resultTie = `You tie! You both chose ${playerSelection}`;
  let resultWin = `You win! ${playerSelection} beats ${computerSelection}`;
  let resultLoss = `You lose! ${computerSelection} beats ${playerSelection}`;

  console.log(playerSelection);
  console.log(computerSelection);

  if (computerSelection === playerSelection) {
    updateResult(resultTie, playerScore, computerScore);
    return;
  }
  if (playerSelection === 'rock') {
    if (computerSelection == 'paper') {
      computerScore += 1;
      updateResult(resultLoss, playerScore, computerScore);
      return;
    } else {
      playerScore += 1;
      updateResult(resultWin, playerScore, computerScore);
      return;
    }
  }
  if (playerSelection === 'paper') {
    if (computerSelection === 'scissors') {
      computerScore += 1;
      updateResult(resultLoss, playerScore, computerScore);
      return;
    } else {
      playerScore += 1;
      updateResult(resultWin, playerScore, computerScore);
      return;
    }
  }
  if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      computerScore += 1;
      updateResult(resultLoss, playerScore, computerScore);
      return;
    } else {
      playerScore += 1;
      updateResult(resultWin, playerScore, computerScore);
      return;
    }
  }
}

const resultGameWin = 'Congratulations, you have won the series';
const resultGameLoss = 'Sorry, you have lost the series';

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

const outcomeDisplay = document.querySelector('#outcome');
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');

let playerScore = 0;
let computerScore = 0;

let result;

rockButton.addEventListener(
  'click',
  () => playRound('rock', GetComputerChoice())
);
paperButton.addEventListener(
  'click',
  () => playRound('paper', GetComputerChoice())
);
scissorsButton.addEventListener(
  'click',
  () => playRound('scissors', GetComputerChoice())
);

