//  Variables
const PlayerChoice = prompt("Make a selection: ", "Rock, Paper, or Scissors?").toUpperCase();
const ComputerChoice = getComputerChoice().toUpperCase();


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

// Single round between player and computer
function singleRound(playerSelection, computerSelection) {
    if (PlayerChoice === ComputerChoice) {
        console.log(`"Player got ${PlayerChoice}`);
        console.log(`"Computer gpt ${ComputerChoice}"`);
        console.log("You tied! Try again!");
    }
    else if ((PlayerChoice === "ROCK") && (ComputerChoice === "SCISSORS")) {
        console.log(`"Player got ${PlayerChoice}`);
        console.log(`"Computer gpt ${ComputerChoice}"`);
        console.log(`"You win with ${PlayerChoice}"`);
    }
    else if ((PlayerChoice === "SCISSORS") && (ComputerChoice === "PAPER")) {
        console.log(`"Player got ${PlayerChoice}`);
        console.log(`"Computer gpt ${ComputerChoice}"`);
        console.log(`"You win with ${PlayerChoice}"`);
    }
    else {
        console.log("Yay!");
    }
}

// console.log(ComputerChoice)
console.log(singleRound(PlayerChoice, ComputerChoice));