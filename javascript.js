let humanScore = 0;
let computerScore = 0;


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
        console.log("HUMAN: " + humanChoice + " " + "COMPUTER: " + computerChoice)
        console.log("Human Wins!")
        humanScore = ++humanScore
        console.log("Human Score: " + humanScore)
        console.log("Computer Score: " + computerScore)
    } else if (humanChoice === computerChoice) {
        console.log("HUMAN: " + humanChoice + " " + "COMPUTER: " + computerChoice)
        console.log("Draw")
        console.log("Human Score: " + humanScore)
        console.log("Computer Score: " + computerScore)
        
    } else if (computerChoice === "ROCK" && humanChoice === "SCISSORS" || computerChoice === "PAPER" && humanChoice === "ROCK" || computerChoice === "SCISSORS" && humanChoice === "PAPER") {
        console.log("HUMAN: " + humanChoice + " " + "COMPUTER: " + computerChoice)
        console.log("Computer Wins!")
        computerScore = ++computerScore
        console.log("Human Score: " + humanScore)
        console.log("Computer Score: " + computerScore)
    }
}

function declareWinner() {
    if (humanScore > computerScore) {
        console.log("Winner is Human with " + humanScore  + " points!")
    } else if (computerScore > humanScore) {
        console.log("Winner is Computer with " + computerScore  + " points!")
    } else {
        console.log("Results Tied. Both Have " + humanScore + " points.")
    }
}

function playGame() {
    for (let round = 0; round < 5; round++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
    }
    console.log("Game has Ended.")
    declareWinner()
}


playGame()

