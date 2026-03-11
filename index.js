let humanScore = 0
  , computerScore = 0;

function getComputerChoice(){
  let option = Math.floor(Math.random() * 3 + 1);
  if(option === 1){
    return "rock";
  }else if(option === 2){
    return "paper";
  }else{
    return "scissors";
  }
}

const rockEl = document.getElementById('rock');
const paperEl = document.getElementById('paper');
const scissorsEl = document.getElementById('scissors');

rockEl.addEventListener('click', function(){
  let humanSelection = 'rock',
      computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
});

paperEl.addEventListener('click', function(){
  let humanSelection = 'paper',
      computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
});

scissorsEl.addEventListener('click', function(){
  let humanSelection = 'scissors',
      computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
});

const selection = document.getElementById('selection');
const message = document.getElementById('message');
const score = document.getElementById('score');
  

function playRound(humanChoice, computerChoice){
  selection.textContent = `You >> ${humanChoice}, Computer >> ${computerChoice}`;
  
  if(humanChoice ==='rock' && computerChoice === 'paper'){
    message.textContent = 'You lose! Paper beats Rock';
  
    computerScore++;
    score.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}`;

  }else if(humanChoice ==='paper' && computerChoice === 'scissors'){
    message.textContent = "You lose! Scissors beats Paper";
    
    computerScore++;
    score.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}`;
  
  }else if(humanChoice ==='scissors' && computerChoice === 'rock'){
    message.textContent = "You lose! Rock beats Scissors";

    computerScore++;
    score.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}`;
  
  }else if(computerChoice ==='rock' && humanChoice === 'paper'){
    message.textContent = "You win! Paper beats Rock";

    humanScore++;
    score.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}`;
  
  }else if(computerChoice ==='paper' && humanChoice === 'scissors'){
    message.textContent = "You win! Scissors beats Paper";

    humanScore++;
    score.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}`;
  
  }else if(computerChoice ==='scissors' && humanChoice === 'rock'){
    message.textContent = "You win! Rock beats Scissors";

    humanScore++;
    score.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}`;
  
  }else{
    message.textContent = "Tie!";
    humanScore++;
    computerScore++;
    score.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}`;
  }

  if(humanScore == 5 || computerScore == 5) declareWinner();
}

function declareWinner(){
  const declare = document.getElementById('declare');

  if(humanScore > computerScore){
    declare.textContent = "Finally, You're the Winner!";
    declare.style.color = 'deepskyblue';
  }else if(humanScore == computerScore){
    declare.textContent = "Finally, No Winner!";
    declare.style.color = 'deeppink';
  }else{
    declare.textContent = "Finally, Computer is the Winner!";
    declare.style.color = 'red';
  }
}