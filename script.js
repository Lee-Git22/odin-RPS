// Randomly selects a number between 1-3
function getComputerChoice() {
    var random = Math.floor(Math.random() * 3 + 1);
    
    // Declares computerSelection variable then assigns RPS value based on random number
    let computerSelection = "";
    if (random == 1) {
        computerSelection = "Rock";
    }
    else if (random == 2) {
        computerSelection = "Paper";
    }
    else if (random == 3) {
        computerSelection = "Scissors";
    }

    return computerSelection;
}

// Prompts user to select move for RPS
function getPlayerChoice() {
    // Prompts user for RPS choice
    let playerSelection = prompt("Choose Rock, Paper, or Scissors");

    // Standardize case insensitive input 
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    
    // Return valid choices
    if (playerSelection == "Rock" || playerSelection == "Paper" || playerSelection == "Scissors") {
        return playerSelection;
    }
    
    // Reselect if invalid
    else {
        playerSelection = getPlayerChoice();
    }

    return playerSelection;
}

// Calls a round of RPS and returns winner
function playRound(computerSelection, playerSelection) {
    
    if (computerSelection == playerSelection){
        return "Tie!"
    }

    else if (computerSelection == "Rock") {
        if (playerSelection == "Paper") {
            return "Paper beats rock, Player wins!"
        }
        else {
            return "Rock beats scissors, Computer wins!"
        }
    }

    else if (computerSelection == "Paper") {
        if (playerSelection == "Rock") {
            return "Paper beats rock, Computer wins!"
        }
        else {
            return "Scissors beats paper, Player wins!"
        }
    }

    else if (computerSelection == "Scissors"){
        if (playerSelection == "Paper"){
            return "Scissors beat paper, Computer wins!"
        }
        else {
            return "Rock beats scissors, Computer wins!"
        }
    }

    return 1;
 }

// Plays specified number of rounds of RPS and logs winner of each round
function game(rounds) {
    for (let i = 0; i < rounds; i++) {
        console.log("Round " + (i + 1) + ": " + playRound(getComputerChoice(), getPlayerChoice()));
    }
}

// Prompts user for rounds
let rounds = parseInt(prompt("Input number of rounds to play"));

game(rounds);