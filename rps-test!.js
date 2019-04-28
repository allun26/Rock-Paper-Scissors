

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

//Function to play one round of the game and add points to the scoreboard
function playRound(userInput, computerInput){
    let winner = decideWinner(userInput, computerInput);
    if (winner === 1) {
      playerWin++;
  } else if (winner === 2) {
      computerWin++;
  } 
    return winner;
}

// function to play 5 rounds of the game.
function game(playerInput){
    let announce;
    let computerOutcome = computerPlay();
    let oneRound = playRound(playerInput, computerOutcome);
    if (oneRound === 1) {
        announce = `${playerInput} beats ${computerOutcome} you win!`;
    } else if (oneRound === 2) {
        announce = `${computerOutcome} beats ${playerInput} Computer wins!`;
    } else if (oneRound === 3){
        announce = 'It´s a tie!';
    } 
    return announce;
                
        /*}else {
            if(computerWin === playerWin){
                alert(`It was a tie! the final score was:\nYou: ${playerWin}\nComputer: ${computerWin}`)
            } else if(computerWin > playerWin) {
                alert(`The computer won the game! the final score was:\nYou: ${playerWin}\nComputer: ${computerWin}`)
            } else {
                alert(`You won the game! the final score was:\nYou: ${playerWin}\nComputer: ${computerWin}`)
            }
        }*/
    }
    
 


// eventlistener for the player choice buttons


document.getElementById("buttonsChoice").childNodes.forEach((button) => {
  button.addEventListener('click', ChoiceButtonEvent);
});

function ChoiceButtonEvent(e){
    let result = game(e.target.id);
    //display result


    let result = {
        playerScore: 10,
        compuerScore: 10,
        Announce: () => {
            if(playerScore > computerScore){
                return "Player won";
            }
        }
    };
}




////TESTING


function playRound(userInput, computerInput){
    let winner = decideWinner(userInput, computerInput);

    return winner;
}

function game(playerInput){
    let result = {
        playerScore: 0,
        computerScore: 0,
        AnnounceFinal: () => {
            if(playerScore > computerScore){
                return "Player won";
            }else{
                return "computer won"
            }
        }
    };

    for (let i = 0; i < 5; i++) {
        //få fat i playerinput

        let computerOutcome = computerPlay();
        let oneRound = playRound(playerInput, computerOutcome);
    
        if (oneRound === 1)
            result.playerScore++;
        else if (oneRound === 2) 
            result.computerScore++;

        if(winnerIsDecided(result, numberOfRounds))
            break;
        
    }
    
    return result;
}

function winnerIsDecided(result, numberOfRounds){
   let breakPoint = numberOfRounds / 2;

   return result.computerScore > breakPoint || result.playerScore > breakPoint;
}




function test(){
    let testObject = {
        number: 10,
        number2 = 1
    } 

    let t = 10;
    t = 5
    test2(t);

    console.log(t);
}

function test2(t){
    t = 5;
}