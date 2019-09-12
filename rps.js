function computerPlay() {
    randomValue = Math.random();
    if (randomValue < 1/3) {
        return "Rock";
    }
    else if (randomValue < 2/3) {
        return "Paper";
    }
    else {
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    let playerValue
    let computerValue
    switch(playerSelection) {
        case "Rock":
            playerValue = 0
            break;
        case "Paper":
            playerValue = 1
            break;
        case "Scissors":
            playerValue = 2
    }
    switch(computerSelection) {
        case "Rock":
            computerValue = 0
            break;
        case "Paper":
            computerValue = 1
            break;
        case "Scissors":
            computerValue = 2
    }
    switch(playerValue - computerValue) {
        case 0:
            console.log("It's a draw! You both had " + playerSelection);
            return 0;
        case 1:
        case -2:
            console.log("You won! " + playerSelection + " beats " + computerSelection);
            return 1;
        case -1:
        case 2:
            console.log("You lost! " + computerSelection + " beats " + playerSelection);
            return 0;
    }
}

function game() {
    let playerScore = 0
    for (let i = 0; i < 5; i++) {
        let playerSelection = ""
        while (playerSelection === "") {
            playerSelection = window.prompt("Rock, Paper or Scissors?")
            if (playerSelection !== "Rock" && playerSelection !== "Paper" && playerSelection !== "Scissors") {
                alert("Please only choose from Rock, Paper and Scissors.")
                playerSelection = ""
            }
        }

        playerScore += playRound(playerSelection, computerPlay());
    }
    console.log("Your final score is " + playerScore);
}

// const playerSelection = 'Rock'
// const computerSelection = computerPlay()
// console.log(playRound(playerSelection, computerSelection))
game()