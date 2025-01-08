console.log("test");

/* 
You will write a function that randomly returns “rock”, “paper” or “scissors”. 
Generate a number between 1 and 3
    1 = rock
    2 = paper
    3 = scissors
*/

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 + 1);

    if(choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}
