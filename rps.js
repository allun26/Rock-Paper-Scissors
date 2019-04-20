

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

// variables to hold the score, and announce the winner
let playerWin = 0;
let computerWin = 0;
let announce;


//Function to play one round of the game
function playRound(userInput, computerInput){

    let winner = decideWinner(userInput, computerInput);
    if (winner === 1) {
      playerWin++;
  } else if (winner === 2) {
      computerWin++;
  } else if(winner === 3){
      computerWin++;
      playerWin++;
  }
  return winner;
}

// function to play 5 rounds of the game.
function game(){
    for(let i = 0; i <= 5; i++){
        if(i < 5){
            let userPrompt = prompt('Choose rock, paper or scissors!').toLowerCase();
            let computerOutcome = computerPlay();
            let oneRound = playRound(userPrompt, computerOutcome);
                if(['rock', 'paper', 'scissors'].includes(userPrompt)){
                    if (oneRound === 1) {
                        announce = `${userPrompt} beats ${computerOutcome} you win!`;
                    } else if (oneRound === 2) {
                        announce = `${computerOutcome} beats ${userPrompt} Computer wins!`;
                    } else if (oneRound === 3){
                        announce = 'It´s a tie!';
                    } 
                    alert(announce) 
                } else {
                    alert('Did you spell it correctly? please choose rock, paper or scissors');
                    i--;
                }
        }else {
            if(computerWin < playerWin){
                alert(`You won the game! the final score was:\nYou: ${playerWin}\nComputer: ${computerWin}`)
            } else {
                alert(`The computer won the game! the final score was:\nYou: ${playerWin}\nComputer: ${computerWin}`)
            }
        }
    }
    
}

// starts the game when opening the index.html in browser
game();