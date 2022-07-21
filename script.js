

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
var computerScore = 0; // Score Initializers 
var playerScore = 0;
function playRound(playerSelection, computerSelection){ //function to determine who wins the round
    
    if (playerSelection == 'rock' && computerSelection == 'paper'){
        computerScore += 1;
        return'Paper covers rock! Computer wins!';
    }
    if (playerSelection == 'paper' && computerSelection == 'rock'){
        playerScore += 1;
        return 'Paper covers rock! Player wins!';
    }
    if (playerSelection == 'rock' && computerSelection == 'scissors'){
        playerScore += 1;
        return 'Rock smashes scissors! Player wins!';
    }
    if (playerSelection == 'scissors' && computerSelection == 'rock'){
        computerScore += 1;
        return 'Rock smashes scissors! Computer wins!';
    }
    if (playerSelection == 'paper' && computerSelection == 'scissors'){
        computerScore += 1;
        return 'Scissors cuts paper! Computer wins!';
    }
    if (playerSelection == 'scissors' && computerSelection == 'paper'){
        playerScore += 1;
        return 'Scissors cuts paper! Player wins!';
    } else{
        return 'The round is a tie!'
    }
    
}

function game () { // main game function
    
    for (let i = 0; i < 5; i++){ //main game loop
        var playerSelection = prompt('Please choose Rock, Paper, or Scissors...').toLowerCase(); //prompt player for their choice
        var computerSelection = getComputerChoice(); // get computer choice
        console.log(playRound(playerSelection, computerSelection));
        
        console.log(`The score is Computer: ${computerScore}, Player: ${playerScore}!`) // keep score
        
    }
    console.log('Game Over! The Winner is...') //declare winner
    if (computerScore > playerScore){
        console.log('The Computer!')
    }
    if (playerScore > computerScore){
        console.log('The Player!')
    }
    if (playerScore == computerScore){
        console.log('No one! Its a tie!')
    }
}


game(); // start game