//  Variables
// const PlayerChoice = prompt("Make a selection: ", "Rock, Paper, or Scissors?").toUpperCase();    
const ComputerChoice = getComputerChoice().toUpperCase();
const PlayerChoice = getPlayerChoice().toUpperCase();

let playerScore = 0;
let computerScore = 0;


// Choose your weapon!!
function getComputerChoice() {
    let choice = ""
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        choice = "ROCK";
    }
    else if (randomNumber === 1) {
        choice = "PAPER";
    }
    else {
        choice = "SCISSORS";
    }

    return choice;
}

// Choose your weapon!!
function getPlayerChoice() {
    let choice = ""
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        choice = "PAPER";
    }
    else if (randomNumber === 1) {
        choice = "SCISSORS";
    }
    else {
        choice = "ROCK";
    }

    return choice;
}

// Single round between player and computer
function playRound(PlayerChoice, ComputerChoice) {


    if (PlayerChoice === ComputerChoice) {
        console.log(`"Player got ${PlayerChoice}`);
        console.log(`"Computer gpt ${ComputerChoice}"`);
        console.log("You tied! Try again!");
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
    for (let i= 1; i < 6; i++) {
        playRound(PlayerChoice, ComputerChoice);
        // testing my looping >.<
        // console.log(i);
    }
    if (playerScore > computerScore) {
        console.log("Player wins with " + playerScore);
    }
    else if (playerScore < computerScore) {
        console.log("Computer wins with " + computerScore);
    }
}

// console.log(ComputerChoice)
// console.log(playRound(PlayerChoice, ComputerChoice));
game();