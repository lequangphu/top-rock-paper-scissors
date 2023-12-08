// 3 stages of problem solving

// 1. Understanding - what is the problem?
// Create a program to play "rock paper scissors" with the computer

// 2. Planning - how to solve the problem?
// Input 2 values, the user's choice, which is entered manually, and the computer's choice, which is generated randomly.
// Compare the 2 values to identify the winner.
// Output the winner.

// 3. Pseudocode - write out the logic of the program
// Ask the user to enter the first value through a promt. If the user doesn't enter any value, ask again.
// Generate the second value randomly through a function.
// Compare the 2 values:
// If the user wins, output "You win!",
// If the user loses, output "You lose!",
// If they tie, repeat the game.

// 4. Divide and conquer
// How to check if the user doesn't enter any value? Use strict equality (===) to check. If it's falsy, ask again.
// How to create a function which randomly generate the computer's choice? Use Math.random().

function getPlayerChoice() {
    return prompt('What is your choice?', '').toLowerCase();
}

function getComputerChoice() {
    // put 3 values in a variable
    let choices = ['rock', 'paper', 'scissors'];
    // generate random number
    let ranNum = Math.floor(Math.random() * 3);
    // return one of 3 values
    return choices[ranNum];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 'You lose!';
        } else if (computerSelection === 'scissors') {
            return 'You win!';
        } else {
            return 'Tie!';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return 'You lose!';
        } else if (computerSelection === 'rock') {
            return 'You win!';
        } else {
            return 'Tie!';
        }
    } else {
        if (computerSelection === 'rock') {
            return 'You lose!';
        } else if (computerSelection === 'paper') {
            return 'You win!';
        } else {
            return 'Tie!';
        }
    }
}

function game() {
    
    let total = 0;
    let count = 0;
    let wins = 0;
    let losts = 0;
    let ties = 0;

    while (count < 5) {

        const playerSelection = prompt('What is your choice?');
        const computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);

        // count total games
        ++total;

        if (result !== 'Tie!') {

            // count not-tie games
            ++count;

            if (result === 'You win!') {
                // count wins
                ++wins;
            } else {
                // count losts
                ++losts;
            }
        } else {
            ++ties;
            continue;
        }

        console.log(`Game result is ${result}, ${wins} wins, ${losts} losts, ${ties} ties.`);

    }

    return `You have played ${total} games, won ${wins}, lost ${losts}, tied ${ties}. Overall, You ${wins > losts ? 'won' : 'lost'}.`;
}

console.log(game());