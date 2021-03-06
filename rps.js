

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

// variables to hold the score
let playerWin = 0;
let computerWin = 0;
const announceFinal = document.querySelector("#announceFinal");
const announce = document.querySelector("#announce");

//Function to play one round of the game and add points to the scoreboard
function playRound(userInput, computerInput){
    /*const playerDiv = document.querySelector("#player");*/
    /*const computerDiv = document.querySelector("#computer");*/
    let winner = decideWinner(userInput, computerInput);
    if (winner === 1) {
        playerWin++;
        announce.innerText = `${userInput} beats ${computerInput} you win!`;
    } else if (winner === 2) {
        computerWin++;
        announce.innerText = `${computerInput} beats ${userInput} Computer wins!`;
    } else{
        announce.innerText = 'It´s a tie!'; 
    }
    
}

// function to play 5 rounds of the game.
function game(playerInput){
    let computerOutcome = computerPlay();
    playRound(playerInput, computerOutcome);
    if(playerWin === 3){
        announceFinal.innerText = `You won the game! the final score was:\nYou: ${playerWin}\nComputer: ${computerWin}`
        playerWin = 0;
        computerWin = 0;
    }
    else if(computerWin === 3){
        announceFinal.innerText =`The computer won the game! the final score was:\nYou: ${playerWin}\nComputer: ${computerWin}`
        playerWin = 0;
        computerWin = 0;
        
    }
    }
    
 


// eventlistener for the player choice buttons


document.getElementById("buttonsChoice").childNodes.forEach((button) => {
  button.addEventListener('click', ChoiceButtonEvent);
});

function ChoiceButtonEvent(e){
    announceFinal.innerText = "";
    game(e.target.id);
    
}




////TESTING

/*
function playRound(userInput, computerInput){
    let winner = decideWinner(userInput, computerInput);

    return winner;
}

function game(numberOfRounds){
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

    for (let i = 0; i < numberOfRounds; i++) {
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

// function to decide who is the winner
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

*/