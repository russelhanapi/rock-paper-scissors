'user strict';
const getComputerChoice = function () {
  const randomNumber = Math.floor(Math.random() * 3);
  const options = ['rock', 'paper', 'scissors'];
  return options[randomNumber];
};

const getHumanChoice = function () {
  const choice = prompt('Choose your weapon: Rock/Paper/Scissors')
    .toLowerCase()
    .trim();
  return choice === 'rock' || choice === 'paper' || choice === 'scissors'
    ? choice
    : prompt('⛔ Invalid choice. Please choose Rock, Paper, or Scissors:')
        .toLowerCase()
        .trim();
};
