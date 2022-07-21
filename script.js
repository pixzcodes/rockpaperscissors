

function getComputerChoice(){ // gets a random number between 0 and 2 and defines the choice of the computer based on the number
    var choice = Math.floor(Math.random() * 3);
    if (choice === 0){
        console.log('The Computer has chosen Rock!')
        return 'rock';
    } else if (choice === 1){
        console.log('The Computer has chosen Paper!')
        return 'paper';
    } else {
        console.log('The Computer has chosen Scissors!')
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == 'rock' && computerSelection == 'paper'){
        var computerWins = true;
        return 'Paper covers rock! Computer wins!';
    }
    if (playerSelection == 'paper' && computerSelection == 'rock'){
        var playerWins = true;
        return 'Paper covers rock! Player wins!';
    }
    if (playerSelection == 'rock' && computerSelection == 'scissors'){
        var playerWins = true;
        return 'Rock smashes scissors! Player wins!';
    }
    if (playerSelection == 'scissors' && computerSelection == 'rock'){
        var computerWins = true;
        return 'Rock smashes scissors! Computer wins!';
    }
    if (playerSelection == 'paper' && computerSelection == 'scissors'){
        var computerWins = true;
        return 'Scissors cuts paper! Computer wins!';
    }
    if (playerSelection == 'scissors' && computerSelection == 'paper'){
        var playerWins = true;
        return 'Scissors cuts paper! Player wins!';
    } else{
        return 'Its a tie!'
    }
    
}

function game () {
    var computerScore = 0;
    var playerScore = 0;
    for (let i = 0; i < 5; i++){
        var playerSelection = prompt('Please choose Rock, Paper, or Scissors...').toLowerCase();
        var computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        
        if (computerWins = true){
            computerScore = computerScore + 1;
        }
        if (playerWins = true){
            playerScore = playerScore + 1;
        }
        console.log(`The score is Computer: ${computerScore}, Player: ${playerScore}!`)
    }
}


game();