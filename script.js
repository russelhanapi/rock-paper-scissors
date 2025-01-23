'user strict';
const btnContainer = document.querySelector('.btn-container');
const btnRock = document.querySelector('#btn-rock');
const btnPaper = document.querySelector('#btn-paper');
const btnScissors = document.querySelector('#btn-scissors');

const computerScoreDisplay = document.querySelector('.computer-score');
const playerScoreDisplay = document.querySelector('.player-score');
const winnerDisplay = document.querySelector('.winner-text');

let computerScore = 0;
let playerScore = 0;

const getComputerChoice = function () {
  const randomNumber = Math.floor(Math.random() * 3);
  const options = ['rock', 'paper', 'scissors'];
  return options[randomNumber];
};

const playRound = function (computerChoice, humanChoice) {
  if (computerChoice === humanChoice) return 'tie';
  const roundWinner =
    (computerChoice === 'rock' && humanChoice === 'scissors') ||
    (computerChoice === 'paper' && humanChoice === 'rock') ||
    (computerChoice === 'scissors' && humanChoice === 'paper')
      ? 'computer'
      : 'player';
  roundWinner === 'computer' ? computerScore++ : playerScore++;

  computerScoreDisplay.textContent = computerScore;
  playerScoreDisplay.textContent = playerScore;
};

btnContainer.addEventListener('click', function (event) {
  const playerSelection = event.target.textContent.toLowerCase();
  const computerSelection = getComputerChoice();

  if (playerScore !== 5 && computerScore !== 5) {
    playRound(computerSelection, playerSelection);
    console.log(computerScore, playerScore);
  } else {
    winnerDisplay.textContent = `Final Winner: ${
      computerScore === 5 ? 'Computer' : 'Player'
    }`;
    btnContainer.removeEventListener('click', handleButtonClick);
  }
});
