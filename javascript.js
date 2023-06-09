//  Variables
// const PlayerChoice = prompt("Make a selection: ", "Rock, Paper, or Scissors?").toUpperCase();    
let ComputerChoice = getComputerChoice().toUpperCase();
let PlayerChoice = getPlayerChoice().toUpperCase();

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

function testingRandomNums() {
    for (let i = 0; i < 10; i++) {
        let randomNumber1 = Math.floor(Math.random() * 5);
        let randomNumber2 = Math.floor(Math.random() * 5);

        if (randomNumber1 > randomNumber2) {
            playerScore++;
        }
        else {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log("Player wins with " + playerScore);
        console.log("Computer had " + computerScore);

    }
    else {
        console.log("Computer wins with " + computerScore);
        console.log("Player had " + playerScore);
    }
}

// function game() {
//     for (let i= 1; i < 6; i++) {
//         playRound(PlayerChoice, ComputerChoice);
//         // testing my looping >.<
//         // console.log(i);
//     }
//     if (playerScore > computerScore) {
//         console.log("Player wins with " + playerScore);
//     }
//     else if (playerScore < computerScore) {
//         console.log("Computer wins with " + computerScore);
//     }
// }

// console.log(ComputerChoice)
// console.log(playRound(PlayerChoice, ComputerChoice));
// game();
testingRandomNums();