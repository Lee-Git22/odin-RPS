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

// TODO:
function playRound(playerSelection, computerSelection) {
    return;
 }


console.log(getPlayerChoice());
