

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


// function to play one round of the game
function playRound(user, computer) {
    let roundOutcome;
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
}


let userinput = prompt('Choose rock, paper or scissors!').toLowerCase();

alert(playRound(userinput, computerPlay()))
console.log(game())







/*
// function to play one round of the game
function playRound(user, computer) {
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