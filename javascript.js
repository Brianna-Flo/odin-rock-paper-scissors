console.log("test");

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