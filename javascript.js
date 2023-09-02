//  Variables
let choices = ['rock', 'paper', 'scissors']    
let ComputerChoice = getComputerChoice().toUpperCase();
let playerScore = 0;
let computerScore = 0;
let tiedScore = 0;
//
// Choose your weapon!!
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];;
}

// Single round between player and computer
function playRound(PlayerChoice, ComputerChoice) {

    if (PlayerChoice === ComputerChoice) {
        console.log(`"Player got ${PlayerChoice}`);
        console.log(`"Computer gpt ${ComputerChoice}"`);
        console.log("You tied! Try again!");
        tiedScore++;
    }
    else if ((PlayerChoice === "ROCK") && (ComputerChoice === "SCISSORS")) {
        console.log(`"Player got ${PlayerChoice}`);
        console.log(`"Computer gpt ${ComputerChoice}"`);
        console.log(`"You win with ${PlayerChoice}"`);
        playerScore++;
    }
    else if ((PlayerChoice === "SCISSORS") && (ComputerChoice === "PAPER")) {
        console.log(`"Player got ${PlayerChoice}`);
        console.log(`"Computer gpt ${ComputerChoice}"`);
        console.log(`"You win with ${PlayerChoice}"`);
        playerScore++;
    }
    else if ((PlayerChoice === "PAPER") && (ComputerChoice === "ROCK")) {
        console.log(`"Player got ${PlayerChoice}`);
        console.log(`"Computer gpt ${ComputerChoice}"`);
        console.log(`"You win with ${PlayerChoice}"`);
        playerScore++;
    }
    else {
        console.log(`"Player got ${PlayerChoice}`);
        console.log(`"Computer gpt ${ComputerChoice}"`);
        console.log(`"Conputer wins with ${ComputerChoice}"`);
        computerScore++;
    }
}
function game() {
    // Loops through and gets the players choice
    // then gets computer choice and plays Thermonuclear War
    // !!!! Commented per assignement
    // for (let i = 0; i < 5; i++) {     
    //     const PlayerChoice = prompt("Make a selection: ", "Rock, Paper, or Scissors?").toUpperCase();
    //     playRound(PlayerChoice, ComputerChoice);
    // }

    //Compares and outputs the score.
    if (playerScore > computerScore) {
        console.log("Player wins with " + playerScore);
        console.log("Computer had " + computerScore);
        console.log("You tied " + tiedScore + " times!")

    }
    else {
        console.log("Computer wins with " + computerScore);
        console.log("Player had " + playerScore);
        console.log("You tied " + tiedScore + " times!")
    }
}
game();

