
const computerChoiceMessage = document.querySelector('#computerChoiceMessage');
function getComputerChoice(){ // gets a random number between 0 and 2 and defines the choice of the computer based on the number
    var choice = Math.floor(Math.random() * 3);
    if (choice === 0){
        computerChoiceMessage.textContent = 'The Computer has chosen Rock!';
        return 'rock';
    } else if (choice === 1){
        computerChoiceMessage.textContent = 'The Computer has chosen Paper!';
        return 'paper';
    } else {
        computerChoiceMessage.textContent = 'The Computer has chosen Scissors!';
        return 'scissors';
    }
}
const roundMessage = document.querySelector('#roundMessage');
var computerScore = 0; // Score Initializers 
var playerScore = 0;
function playRoundRock(){
    let computerSelection = getComputerChoice();

    if (computerSelection == 'paper'){
        computerScore += 1;
        getScore();
        roundMessage.textContent = 'Paper covers rock! Computer wins!';
    }
    if (computerSelection == 'scissors'){
        playerScore += 1;
        getScore();
        roundMessage.textContent = 'Rock smashes scissors! Player wins!';
    }
    if (computerSelection == 'rock'){
        roundMessage.textContent = 'Its a tie!';
    }
}
function playRoundPaper(){
    let computerSelection = getComputerChoice();

    if (computerSelection == 'rock'){
        playerScore += 1;
        getScore();
        roundMessage.textContent = 'Paper covers rock! Player wins!';
    }
    if (computerSelection == 'scissors'){
        computerScore += 1;
        getScore();
        roundMessage.textContent = 'Scissors cuts paper! Computer wins!';
    }
    if (computerSelection == 'paper'){
        roundMessage.textContent = 'Its a tie!';
    }
}
function playRoundScissors(){ 
    let computerSelection = getComputerChoice();
    
    if (computerSelection == 'rock'){
        computerScore += 1;
        getScore();
        roundMessage.textContent = 'Rock smashes scissors! Computer wins!';
    }
    
    if (computerSelection == 'paper'){
        playerScore += 1;
        getScore();
        roundMessage.textContent = 'Scissors cuts paper! Player wins!';
    }
    if (computerSelection == 'scissors'){
        roundMessage.textContent = 'Its a tie!';
    }
    
}

const scoreMessage = document.querySelector('#scoreMessage');
function getScore(){
    scoreMessage.textContent = `The Score is Computer: ${computerScore}, Player: ${playerScore}`;
    if (playerScore === 5){
        winnerText.textContent = 'Congrats Player you have Beat the Computer!';
        container.removeChild(rockBtn);
        container.removeChild(paperBtn);
        container.removeChild(scissorsBtn);
    }
    if (computerScore === 5){
        winnerText.textContent = 'Darn! Looks like the Computer has gotten the best of you Player!';
        container.removeChild(rockBtn);
        container.removeChild(paperBtn);
        container.removeChild(scissorsBtn);
    }
}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

const winnerText = document.querySelector('#winnerText');
const container = document.querySelector('#container');
rockBtn.addEventListener('click', playRoundRock);
paperBtn.addEventListener('click', playRoundPaper);
scissorsBtn.addEventListener('click', playRoundScissors);