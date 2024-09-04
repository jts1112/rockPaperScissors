// Set variables to keep track of each players score
let humanScore = 0
let computerScore = 0

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

function playSingleRound(humanChoice,computerChoice){
    const roundOutcome = document.getElementsByClassName("outcome")[0];
    // check if both players played the same hand. 
    if(computerChoice === "rock" && humanChoice === "scissors"){
        roundOutcome.textContent = "You lose Rock Beats Scissors"
        computerScore++
        // rock > scissors
    } else if (computerChoice === "paper" && humanChoice === "rock") { // paper > rock
        roundOutcome.textContent ="You lose Paper beats Rock"
        computerScore++
    } else if (computerChoice === "scissors" && humanChoice === "paper") { // scissors > paper
        roundOutcome.textContent = "You lose Scissors beats Paper"
        computerScore++
    } else if(humanChoice === "rock" &&   computerChoice === "scissors"){
        roundOutcome.textContent = "You win Rock Beats Scissors"
        humanScore++
        // rock > scissors
    } else if (humanChoice === "paper" && computerChoice === "rock") { // paper > rock
        roundOutcome.textContent = "You win Paper beats Rock"
        humanScore++
    } else if (humanChoice === "scissors" && computerChoice ==="paper") { // scissors > paper
        roundOutcome.textContent = "You win Scissors beats Paper"
        humanScore++
    } else { // a tie occured
        roundOutcome.textContent = "A Tie Occured"
    } 
    
     
    displayscore(humanScore,computerScore);
   
};

 function playGame(){

    // create three buttons for each choice
    const rock_btn = document.createElement("button");
    rock_btn.textContent = "Rock";

    const scissors_btn = document.createElement("button");
    scissors_btn.textContent = "Scissors";

    const paper_btn = document.createElement("button");
        paper_btn.textContent = "Paper";

    const choices = document.getElementsByClassName("user-choice")[0];
    choices.appendChild(rock_btn);
    choices.appendChild(scissors_btn);
    choices.appendChild(paper_btn);

    rock_btn.addEventListener("click", () => playSingleRound("rock",getComputerChoice()));
    scissors_btn.addEventListener("click", () => playSingleRound("scissors",getComputerChoice()));
    paper_btn.addEventListener("click", () => playSingleRound("paper",getComputerChoice()));
 };

 function displayscore(humanScore,playerScore) {

    const humanScoreboard = document.getElementsByClassName("player-score")[0];
    humanScoreboard.textContent = `Player ${humanScore}`
    const computerScoreboard = document.getElementsByClassName("computer-score")[0];
    computerScoreboard.textContent = `Computer ${computerScore}`
 };

 
 playGame()


