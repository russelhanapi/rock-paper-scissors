'user strict';
const getComputerChoice = function () {
  const randomNumber = Math.floor(Math.random() * 3);
  const options = ['rock', 'paper', 'scissors'];
  return options[randomNumber];
};
