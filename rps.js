

// Function that makes the computer play either rock paper or scissors
function computerPlay(){
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let choice;
        if (randomNumber === 1){
        choice = 'rock'
        } else if (randomNumber === 2){
        choice = 'paper'
        } else if (randomNumber === 3){
        choice = 'scissors'
        }
    return choice;
}


// function to decide the winner of a round 1= playerwin, 2= computerwin 3= tie
function decideWinner(user, computer) {
    let roundOutcome;
        if (user === 'rock' && computer === 'scissors'){
            roundOutcome = 1;
        }else if (user === computer){
            roundOutcome = 3;
        }else if (user === 'rock' && computer === 'paper'){
            roundOutcome = 2;
        }else if (user === 'paper' && computer === 'rock'){
            roundOutcome = 1;
        }else if (user === 'paper' && computer === 'scissors'){
            roundOutcome = 2;
        }else if (user === 'scissors' && computer === 'rock'){
            roundOutcome = 2;
        }else if (user === 'scissors' && computer === 'paper'){
            roundOutcome = 1;
        }
        return roundOutcome;
}


let playerWin = 0;
let computerWin = 0;
let gamesPlayed = 0;
let announce;


//Function to play one round of the game
function playRound(userInput, computerInput){

    let winner = decideWinner(userinput, computerInput);
    if (winner === 1) {
      playerWin++;
  } else if (winner === 2) {
      computerWin++;
  } else if(winner === 3){
      computerWin++;
      playerWin++;
  }
  gamesPlayed++;
  return winner;
 /* console.log(`playerwin is ${playerWin} computerwin is ${computerWin}`) <-- for testing*/
}

// function to play 5 rounds of the game.
function game(){
    do{
    let userPrompt = prompt('Choose rock, paper or scissors!').toLowerCase();
    let computerOutcome = computerPlay();
    let oneRound = playRound(userPrompt, computerOutcome);
    }
    if (oneRound === 1) {
        announce = `${userPrompt} beats ${computerOutcome} you win!`;
    } else if (oneRound === 2) {
        announce = `${computerOutcome} beats ${userPrompt} Computer wins!`;
    } else if (oneRound === 3){
        announce = 'It´s a tie!';
    }
    alert(announce) 
    while(gamesPlayed <= 5);
}




/*alert(decideWinner(userinput, computerPlay())) */






/*
// function to play one round of the playRound
function decideWinner(user, computer) {
    let roundOutcome;
    // Makes the player choose either rock paper or scissors using a prompt
    let userinput = prompt('Choose rock, paper or scissors!').toLowerCase();
        if (user === 'rock' && computer === 'scissors'){
            roundOutcome = 'Rock beats Scissors! you win!';
        }else if (user === computer){
            roundOutcome = 'It´s a tie!';
        }else if (user === 'rock' && computer === 'paper'){
            roundOutcome = 'Paper beats rock! Computer wins!';
        }else if (user === 'paper' && computer === 'rock'){
            roundOutcome = 'Paper beats rock! You win!';
        }else if (user === 'paper' && computer === 'scissors'){
            roundOutcome = 'Scissors beat Paper! Computer wins!';
        }else if (user === 'scissors' && computer === 'rock'){
            roundOutcome = 'Rock beats Scissors! Computer wins!';
        }else if (user === 'scissors' && computer === 'paper'){
            roundOutcome = 'Scissors beat paper! You win!';
        }
        return roundOutcome;
} */