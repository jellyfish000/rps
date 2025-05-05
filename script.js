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
        return 2;
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

const buttons = document.querySelectorAll('button');
const displayResult = document.getElementById('display-result');
let humanScore = 0;
let computerScore = 0;
let gameOver = false;

buttons.forEach(button =>{
    button.addEventListener('click', () => { // add a click event listener

        if (gameOver) return;
        let message = ''

        const userMove = button.innerText.toLowerCase();
        const computerMove = getComputerChoice();
        const matchResult = playRound(userMove,computerMove)
        if (matchResult === 1){
            humanScore += 1;
            message += `You won! ${userMove} beats ${computerMove}. Your score: ${humanScore}. Computer score: ${computerScore}`;
        } else if (matchResult === 0){
            computerScore +=1;
            message += `You lose! ${computerMove} beats ${userMove}. Your score: ${humanScore}. Computer score: ${computerScore}`;
            
        } else {
            message += `It's a tie. Your score: ${humanScore}. Computer score: ${computerScore}`;
        }

        if (computerScore === 5 || humanScore ===5 ){
            gameOver = true;
            if (computerScore ===5){
                message += `\n Round over. Computer won the game`;
            } else{
                message += `\n Round over. You won the game`;
            }

        }
        displayResult.textContent =message;
    });
});
    


