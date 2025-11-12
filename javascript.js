let humanScore = 0;
let computerScore = 0;

let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");

let resultText = document.querySelector("div");


rockButton.addEventListener('click', (e) => {
    const humanSelection = "ROCK";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    
})

paperButton.addEventListener('click', (e) => {
    const humanSelection = "PAPER";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
})

scissorsButton.addEventListener('click', (e) => {
    const humanSelection = "SCISSORS";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
})


function displayResult(text) {
    resultText.textContent = text;
}

function getComputerChoice() {

    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(9);
    let number = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive

    if (number <= 3) {
    result = "ROCK"
    } else if (number >= 4 && number <= 6) {
    result = "PAPER"
    } else {
    result = "SCISSORS"
    }
    return result;
}


function getHumanChoice() {
    let user_choice = prompt("ROCK, PAPER, OR SCISSORS?");
    return user_choice.toUpperCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "ROCK" && computerChoice === "SCISSORS" || humanChoice === "PAPER" && computerChoice === "ROCK" || humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        humanScore = ++humanScore
        displayResult("HUMAN: " + humanChoice + "   " + "COMPUTER: " + computerChoice + "   " +
            "Human Score: " + humanScore + "   " + "Computer Score: " + computerScore);
        checkWinner()
    } else if (humanChoice === computerChoice) {
        displayResult("HUMAN: " + humanChoice + "   " + "COMPUTER: " + computerChoice + "   " +
            "Human Score: " + humanScore + "   " + "Computer Score: " + computerScore);
        checkWinner()
        
    } else if (computerChoice === "ROCK" && humanChoice === "SCISSORS" || computerChoice === "PAPER" && humanChoice === "ROCK" || computerChoice === "SCISSORS" && humanChoice === "PAPER") {
        computerScore = ++computerScore
        displayResult("HUMAN: " + humanChoice + "   " + "COMPUTER: " + computerChoice + "   " +
            "Human Score: " + humanScore + "   " + "Computer Score: " + computerScore);
        checkWinner()
    }
}



function checkWinner() {
    if (humanScore >= 5) {
    displayResult("Winner is Human with 5 points!")
} else if (computerScore >= 5) {
    displayResult("Winner is Computer with 5 points!")
};
};


