function getComputerChoice() {
    let v = Math.floor(Math.random() * 3);
    let values = ['rock', 'paper', 'scissors'];
    return values[v];
}

let a = document.querySelector('#rock');
let b = document.querySelector('#paper');
let c = document.querySelector('#scissors');

let d = document.querySelector('div');

a.addEventListener('click', function() {
    const cpt = getComputerChoice();
    d.innerHTML = playRound('rock', cpt);
})
b.addEventListener('click', function() {
    const cpt2 = getComputerChoice();
    d.innerHTML = playRound('paper', cpt2);
})
c.addEventListener('click', function() {
    const cpt3 = getComputerChoice();
    d.innerHTML = playRound('scissors', cpt3);
})






function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return 'Its a tie';
    }
    else if (playerSelection.toLowerCase() === 'rock') {
            if (computerSelection === 'scissors') {
                return 'You win ' + playerSelection + ' beats ' + computerSelection;
            }
            else {
                return 'You lose ' + computerSelection + ' beats ' + playerSelection;
            }
        }
    else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'rock') {
            return 'You win ' + playerSelection + ' beats ' + computerSelection;
        }
        else {
            return 'You lose ' + computerSelection + ' beats ' + playerSelection;
        }
    }
    else if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection === 'paper') {
            return 'You win ' + playerSelection + ' beats ' + computerSelection;
        }
        else {
            return 'You lose ' + computerSelection + ' beats ' + playerSelection;
        }
    }
}

//const playerSelection = prompt('Enter rock, paper, or scissors');
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));