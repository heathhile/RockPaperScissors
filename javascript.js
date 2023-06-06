function getComputerChoice() {
    let choice = ""
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        choice = "Rock";
    }
    else if (randomNumber === 1) {
        choice = "Paper";
    }
    else {
        choice = "Scissors";
    }

    return choice;
}

function singleRound(playerSelection, computerSelection) {
    playerSelection
    
}

const playerSelection = prompt("Make a selection: ", "Rock, Paper, or Scissors?").toUpperCase;
const ComputerChoice = getComputerChoice();

console.log(singleRound(playerSelection, computerSelection));
