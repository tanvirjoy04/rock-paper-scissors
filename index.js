let humanScore = 0
  , computerScore = 0;

function getComputerChoice(){
  let option = Math.floor(Math.random() * 3 + 1);
  // console.log(option);
  if(option === 1){
    return "rock";
  }else if(option === 2){
    return "paper";
  }else{
    return "scissors";
  }
}
// console.log(getComputerChoice());

function getHumanChoice(){
  let input = prompt("Enter rock or paper or scissors");
  return input;
}
// console.log(getHumanChoice());

playGame();
declareWinner();

function declareWinner(){
  if(humanScore > computerScore){
    console.log("Finally, You're the Winner!");
  }else if(humanScore === computerScore){
    console.log("Finally, No Winner!");
  }else{
    console.log("Finally, Computer is the Winner!");
  }
}

function playGame(){

  for(let i = 0; i < 5; i++){
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

    function playRound(humanChoice, computerChoice){
      humanChoice = humanChoice.toLowerCase();
      if(humanChoice ==='rock' && computerChoice === 'paper'){
        console.log("You lose! Paper beats Rock");
        computerScore++;
      }else if(humanChoice ==='paper' && computerChoice === 'scissors'){
        console.log("You lose! Scissors beats Paper");
        computerScore++;
      }else if(humanChoice ==='scissors' && computerChoice === 'rock'){
        console.log("You lose! Rock beats Scissors");
        computerScore++;
      }else if(computerChoice ==='rock' && humanChoice === 'paper'){
        console.log("You win! Paper beats Rock");
        humanScore++;
      }else if(computerChoice ==='paper' && humanChoice === 'scissors'){
        console.log("You win! Scissors beats Paper");
        humanScore++;
      }else if(computerChoice ==='scissors' && humanChoice === 'rock'){
        console.log("You win! Rock beats Scissors");
        humanScore++;
      }else{
        console.log("Tie!");
      }
    }  

}
