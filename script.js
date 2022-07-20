

function getComputerChoice(){
    var choice = Math.floor(Math.random() * 3);
    if (choice === 0){
        return 'rock';
    } else if (choice === 1){
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == 'rock' && computerSelection == 'paper'){
        return 'Paper covers rock! Computer wins!';
    }
    if (playerSelection == 'paper' && computerSelection == 'rock'){
        console.log('Paper covers rock! Player wins!');
    }
    if (playerSelection == 'rock' && computerSelection == 'scissors'){
        return 'Rock smashes scissors! Player wins!';
    }
    if (playerSelection == 'scissors' && computerSelection == 'rock'){
        return 'Rock smashes scissors! Computer wins!';
    }
    if (playerSelection == 'paper' && computerSelection == 'scissors'){
        return 'Scissors cuts paper! Computer wins!';
    }
    if (playerSelection == 'scissors' && computerSelection == 'paper'){
        return 'Scissors cuts paper! Player wins!';
    } else{
        return 'Its a tie!'
    }
    
}

const playerSelection = prompt('Please choose Rock, Paper, or Scissors...').toLowerCase();
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));