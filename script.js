// Set variables to keep track of each players score
let humanScore = 0
let computerScore = 0

// Have computer select number between 0 and 2
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3)
    if(choice == 0) {
        return "rock"
    } else if (choice == 1) {
        return "paper"
    } else {
        return "scissors"
    }
};

// Have User enter a number 
function getHumanChoice(){
    // use prompt to capture User choice
    return prompt("Please enter Rock Paper or Scissors").toLowerCase()
};


function playSingleRound(humanChoice,computerChoice){
    // check if both players played the same hand. 
    if(computerChoice === "rock" && humanChoice === "scissors"){
        console.log("You lose Rock Beats Paper")
        computerScore++
        // rock > scissors
    } else if (computerChoice === "paper" && humanChoice === "rock") { // paper > rock
        console.log("You lose Paper beats Rock")
        computerScore++
    } else if (computerChoice === "scissors" && humanChoice === "paper") { // scissors > paper
        console.log("You lose Scissors beats Paper")
        computerScore++
    } else if(humanChoice === "rock" &&   computerChoice === "scissors"){
        console.log("You win Rock Beats Paper")
        humanScore++
        // rock > scissors
    } else if (humanChoice === "paper" && computerChoice === "rock") { // paper > rock
        console.log("You win Paper beats Rock")
        humanScore++
    } else if (humanChoice === "scissors" && computerChoice ==="paper") { // scissors > paper
        console.log("You win Scissors beats Paper")
        humanScore++
    } else { // a tie occured
        console.log("A Tie Occured")
    }
   
};

 function playGame(){
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice()
        const computerChoice = getComputerChoice()
        playSingleRound(humanChoice,computerChoice)
    }
 };

 playGame()


