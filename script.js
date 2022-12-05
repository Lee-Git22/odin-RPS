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
function playRound(computerSelection, playerSelection, winner) {
    winner = "Tie!"
    if (computerSelection == playerSelection){
        return ["Tie!", winner];
    }

    else if (computerSelection == "Rock") {
        if (playerSelection == "Paper") {
            winner = "Player";
            return ["Player chooses: Rock, Computer chooses: Paper, Player wins!", winner];
        }
        else {
            winner = "Computer"
            return ["Player chooses: Scissors, Computer Chooses: Rock, Computer wins!", winner];
        }
    }

    else if (computerSelection == "Paper") {
        if (playerSelection == "Rock") {
            winner = "Computer";
            return ["Player chooses: Rock, Computer Chooses: Paper, Computer wins!", winner];
        }
        else {
            winner = "Player"
            return ["Player chooses: Scissors, Computer chooses: Paper, Player wins!", winner];
        }
    }

    else if (computerSelection == "Scissors"){
        if (playerSelection == "Paper"){
            winner = "Computer";
            return ["Player chooses: Paper, Computer chooses: Scissors, Computer wins!", winner];
        }
        else {
            winner = "Player";
            return ["Player chooses: Rock, Computer chooses: Scissors, Player wins!", winner];
        }
    }

    return "Error";
 }

// Plays a round and update score
function game(rounds) {
    let roundResult = playRound(getComputerChoice(), playerSelection);
    let winnerMessage = roundResult[0];
    let winner = roundResult[1];
    return [("Round " + (rounds) + ": " + winnerMessage), winner];
}

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
let playerScore = 0;
let computerScore = 0;

const winnerDiv = document.createElement("h3");

// Selects buttons and plays game on click
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        
        // Set playerSelection to whichever button they pick and update round count
        playerSelection = button.id;
        rounds += 1;

        // Play a game
        let gameResult = game(rounds);

        // Create results and display
        const results = document.createElement("div");
        const score = document.querySelector(".score");
        results.textContent = gameResult[0];
        score.appendChild(results);

        // Updates scores
        if (gameResult[1] == "Computer"){
            computerScore += 1;
        }
        else if (gameResult[1] == "Player"){
            playerScore += 1;
        }
        const currentScore = document.createElement("h5");
        currentScore.textContent = "The score is now: Player: " + playerScore + " Computer: " + computerScore;
        score.appendChild(currentScore);

        // When either reachs 5 points, Declare winner and reset game
        if (playerScore >= 5 || computerScore >= 5) {
            if (playerScore >= 5) {
                winnerDiv.textContent = "Player has 5 points!, Player Wins!"
                score.appendChild(winnerDiv);
            }
            else {
                winnerDiv.textContent = "Computer has 5 points!, Computer Wins!"
                score.appendChild(winnerDiv);
            }
            playerScore = 0;
            computerScore = 0;
            rounds = 0;
        }
                
    });
});
