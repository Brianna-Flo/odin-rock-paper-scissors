/* 
You will write a function that randomly returns “rock”, “paper” or “scissors”. 
Generate a number between 1 and 3
    1 = rock
    2 = paper
    3 = scissors
*/

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3 + 1);

    if(num === 1) {
        return "rock";
    } else if (num === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

/* 
    Function to get the human choice
    prompt user to enter choice
    check that choice is valid and convert to lower case
    continue asking until input is valid choice
*/
function getHumanChoice() {
    let humanChoice = prompt("Enter a choice", "Rock, Paper, or Scissors??");
    while (true) {
        if(humanChoice.toLowerCase() === "rock") {
            return "rock";
        } else if (humanChoice.toLowerCase() === "paper") {
            return "paper";
        } else if (humanChoice.toLowerCase() === "scissors") {
            return "scissors";
        } else {
            humanChoice = prompt("Invalid input: enter a choice", "Rock, Paper, or Scissors??");
        }
    }
}




function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
  
        playRound(humanSelection, computerSelection);
    }


    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a tie, you both chose " + humanChoice);
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors");
            humanScore++;
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper");
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats Rock");
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beats Paper");
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! Rock beats Paper");
            computerScore++;
        } 
    }

    declareWinner(humanScore, computerScore);
}

function declareWinner(humanScore, computerScore) {
    if (humanScore > computerScore) {
        console.log("Congratulations! You won!");
    } else if (computerScore > humanScore) {
        console.log("Oh no, you lost. Better luck next time!");
    } else {
        console.log("It's a tie");
    }
}
  