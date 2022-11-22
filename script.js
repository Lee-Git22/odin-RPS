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

    console.log(computerSelection);
    return computerSelection;
}

// TODO:
function playRound(playerSelection, computerSelection) {
    return;
 }


getComputerChoice();

