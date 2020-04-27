let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.getElementById('score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
const reset_button = document.getElementById('reset-button');

// add seperate functions for win, lose, draw
function win(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `You win! ${userChoice[0].toUpperCase()}${userChoice.substring(1)} beats ${computerChoice}!`;
  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);
}

function lose(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `You lose. ${computerChoice[0].toUpperCase()}${computerChoice.substring(1)} beats ${userChoice}!`;
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
}

function draw(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `It's a draw. Both choices were ${computerChoice}!`;
  userChoice_div.classList.add('gray-glow');
  setTimeout(() => userChoice_div.classList.remove('gray-glow'), 500);
}

// add game function that takes userChoice as argument
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      win(userChoice, computerChoice);
      break;
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      lose(userChoice, computerChoice);
      break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      draw(userChoice, computerChoice);
      break;
  }
}
// add event listeners for buttons
function main() {
  rock_div.addEventListener('click', function() {
    game('rock');
  })
  paper_div.addEventListener('click', function () {
    game('paper');
  })
  scissors_div.addEventListener('click', function () {
    game('scissors');
  })
  reset_button.addEventListener('click', function() {
    resetGame();
  })
}
// initialize event listeners  
main();

// logic for the computer choice that's randomized from the array
  function getComputerChoice() {     
    const choices = ['rock', 'paper', 'scissors'];     
    const randomNumber = Math.floor(Math.random() * choices.length);

    return choices[randomNumber];
  }
getComputerChoice();

function resetGame() {
  location.reload();
  return false;
  }
