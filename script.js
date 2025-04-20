console.log("HelloWorld")


function getComputerChoice(){
    randomNumber = Math.random()

    if (randomNumber <1/3){
        return "rock";
    } else if (randomNumber <2/3)
        return "paper";
    else {
        return "scissors";
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Enter your choice").toLowerCase()
    return humanChoice;
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("It's a tie!")
        return 0;
    } else if (humanChoice === "rock" && computerChoice==="scissors") {
        console.log("You won! Rock beats Scissors ")
        return 1;
    } else if (humanChoice === "scissors" && computerChoice==="paper") {
        console.log("You won! Scissors beats Paper ")
        return 1;
    } else if (humanChoice === "paper" && computerChoice==="rock") {
        console.log("You won! Paper beats Rock ");
        return 1;
    } else if (humanChoice === "scissors" && computerChoice==="rock") {
        console.log("You lose! Rock beats Scissors ");
        return 0;
    } else if (humanChoice == "paper" && computerChoice==="scissors") {
        console.log("You lose! Scissors beats Paper ");
        return 0;
    } else if (humanChoice === "rock" && computerChoice==="paper") {
        console.log("You lose! Paper beats Rock ");
        return 0;
    } 
}

function playGame(){
    let roundNumber = 0;
    let score = 0;

    for (let i=0; i<5; i++){
        roundNumber += 1;
        console.log(roundNumber);
        let computerChoice = getComputerChoice()
        let humanChoice = getHumanChoice()
        score += playRound(computerChoice, humanChoice);
        
    }
    console.log("The score is " + score)
}

playGame()