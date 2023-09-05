// Class for buttons and such

class RPS {
    constructor(playerScoreTextElement, computerScoreTextElement, tiedScoreTextElement) {
        this.playerScoreTextElement = playerScoreTextElement;
        this.computerScoreTextElement = computerScoreTextElement;
        this.tiedScoreTextElement = tiedScoreTextElement;
        this.reset_score();
    }

    reset_score() {
        this.currentplayerscore = 0;
        this.currentcomputerscore = 0;
        this.currenttiedscore = 0;
    }

    update_player_score(playerScore) {
        this.playerScoreTextElement.innerHTML = this.playerScore;
    }

    update_computer_score(computerScore) {
        this.computerScoreTextElement.innerHTML = this.computerScore;
    }

    update_player_score(tiedScore) {
        this.tiedScoreTextElement.innerHTML = this.tiedScore;
    }
}


//  Variables

const choices = ['ROCK!', 'PAPER!', 'SCISSORS!']
const playerScoreTextElement = document.querySelector('[data-player-score]');
const computerScoreTextElement = document.querySelector('[data-computer-score]');
const tiedScoreTextElement = document.querySelector('[data-tied-score]');
const data_btns = document.querySelectorAll('[data-button]');
const data_reset = document.getElementById("reset");
var playerScore = 0;
var computerScore = 0;
var tiedScore = 0;
var btnsChoice = undefined;
var btnsReset = undefined;

const newGame = new RPS(playerScoreTextElement, computerScoreTextElement, tiedScoreTextElement);


data_btns.forEach(button => {
    button.addEventListener('click', () => {
        btnsChoice = button.innerText;
        playRound(btnsChoice);
    })
})

data_reset.addEventListener('click', () => {
        newGame.reset_score();
    })

// Choose your weapon!!
function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}
    


// Single round between player and computer
function playRound(PlayerChoice) {

    let ComputerChoice = getComputerChoice();

    if (PlayerChoice === ComputerChoice) {
        tiedScore++;
    }
    else if ((PlayerChoice === "ROCK!") && (ComputerChoice === "SCISSORS!")) {
        console.log(`"Player got ${PlayerChoice}`);
        console.log(`"Computer got ${ComputerChoice}"`);
        console.log(`"You win with ${PlayerChoice}"`);
        playerScore++;
    }
    else if ((PlayerChoice === "SCISSORS!") && (ComputerChoice === "PAPER!")) {
        console.log(`"Player got ${PlayerChoice}`);
        console.log(`"Computer got ${ComputerChoice}"`);
        console.log(`"You win with ${PlayerChoice}"`);
        playerScore++;
    }
    else if ((PlayerChoice === "PAPER!") && (ComputerChoice === "ROCK!")) {
        console.log(`"Player got ${PlayerChoice}`);
        console.log(`"Computer got ${ComputerChoice}"`);
        console.log(`"You win with ${PlayerChoice}"`);
        playerScore++;
    }
    else {
        console.log(`"Player got ${PlayerChoice}`);
        console.log(`"Computer got ${ComputerChoice}"`);
        console.log(`"Conputer wins with ${ComputerChoice}"`);
        computerScore++;
    }

    if (playerScore > computerScore) {
        newGame.update_player_score();
    }
    else {
        newGame.update_computer_score();
    }

}
