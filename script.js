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

// Plays a round and update score
function game(rounds) {
    console.log("Round " + (rounds) + ": " + playRound(getComputerChoice(), playerSelection));
}

// Prompts user for rounds
//let rounds = parseInt(prompt("Input number of rounds to play"));

// TODO: Create 1 button for each choice and add event listener
const selection = document.querySelector(".selection");
selection.textContent = "Click a button to choose your input";

// Separates buttons and Prompt
const lineBreak = document.createElement("br");
selection.appendChild(lineBreak);

// Creates buttons and add to DOM
const rock = document.createElement("button");
rock.setAttribute("id", "Rock");
rock.textContent = "Rock";

const paper = document.createElement("button");
paper.setAttribute("id", "Paper");
paper.textContent = "Paper";
paper.style.margin = "8px";

const scissors = document.createElement("button");
scissors.setAttribute("id", "Scissors");
scissors.textContent = "Scissors";

selection.appendChild(rock);
selection.appendChild(paper);
selection.appendChild(scissors);

let rounds = 0;
// Selects buttons and plays game on click
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        //alert("Hello, world")
        playerSelection = button.id;
        rounds += 1;
        game(rounds);
    });
});

// TODO: Add divs for displaying results for all console.logs

// TODO: Declare winner once a player reachs 5 points

//game(rounds);