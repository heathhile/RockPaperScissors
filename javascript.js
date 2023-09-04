//  Variables
let choices = ['ROCK!', 'PAPER!', 'SCISSORS!']    
let playerScore = 0;
let computerScore = 0;
let tiedScore = 0;
//

function reset_score() {
    document.getElementById("player_score").innerHTML = 0;
    document.getElementById("computer_score").innerHTML = 0;
    document.getElementById("tied_score").innerHTML = 0;
}

reset_score();

// Choose your weapon!!
function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];;
}

// Single round between player and computer
function playRound(PlayerChoice, ComputerChoice) {

    if (PlayerChoice === ComputerChoice) {
        tiedScore++;
        document.getElementById("tied_score").innerHTML = tiedScore;
    }
    else if ((PlayerChoice === "ROCK!") && (ComputerChoice === "SCISSORS!")) {
        console.log(`"Player got ${PlayerChoice}`);
        console.log(`"Computer gpt ${ComputerChoice}"`);
        console.log(`"You win with ${PlayerChoice}"`);
        playerScore++;
    }
    else if ((PlayerChoice === "SCISSORS!") && (ComputerChoice === "PAPER!")) {
        console.log(`"Player got ${PlayerChoice}`);
        console.log(`"Computer gpt ${ComputerChoice}"`);
        console.log(`"You win with ${PlayerChoice}"`);
        playerScore++;
    }
    else if ((PlayerChoice === "PAPER!") && (ComputerChoice === "ROCK!")) {
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

// let reset_button = document.getElementById('reset');
const btns = document.querySelectorAll('[data-button]');
let btnsChoice = undefined;

// reset_button = reset_score();

btns.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.innerText);
        btnsChoice = button.innerText;
        game(btnsChoice)
    })
})

function game(PlayerChoice) {
    let ComputerChoice = getComputerChoice().toUpperCase();
    // let p_score = document.querySelector('[data-player-score]')
    playRound(PlayerChoice, ComputerChoice);

    //Compares and outputs the score.

    if (playerScore > computerScore) {
        document.getElementById("player_score").innerHTML = playerScore.toString();
    }
    else {
        document.getElementById("computer_score").innerHTML = playerScore.toString();
    }

}
game();

