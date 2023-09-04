//  Variables
let choices = ['ROCK!', 'PAPER!', 'SCISSORS!']    
let playerScore = 0;
let computerScore = 0;
let tiedScore = 0;
//
// Choose your weapon!!
function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];;
}

function update_score(playerScore) {

}


// Single round between player and computer
function playRound(PlayerChoice, ComputerChoice) {

    if (PlayerChoice === ComputerChoice) {
        console.log(`"Player got ${PlayerChoice}`);
        console.log(`"Computer gpt ${ComputerChoice}"`);
        console.log("You tied! Try again!");
        tiedScore++;
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

const btns = document.querySelectorAll('[data-button]');
let btnsChoice = undefined;

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
        document.getElementById("player_score").innerHTML = playerScore.toString;
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

