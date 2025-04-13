document.addEventListener('DOMContentLoaded', () => {
    const choices = ['rock', 'paper', 'scissors'];
    const resultText = document.getElementById('result-text');
    const computerChoiceDisplay = document.getElementById('computer-choice');
    const playerScoreElement = document.getElementById('player-score');
    const computerScoreElement = document.getElementById('computer-score');
    
    let playerScore = 0;
    let computerScore = 0;

    // Function to get computer's choice
    function getComputerChoice() {
        return choices[Math.floor(Math.random() * choices.length)];
    }

    // Function to determine the winner
    function determineWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) return 'draw';
        
        const rules = {
            rock: 'scissors',
            paper: 'rock',
            scissors: 'paper'
        };

        return rules[playerChoice] === computerChoice ? 'player' : 'computer';
    }

    // Function to update score
    function updateScore(winner) {
        if (winner === 'player') {
            playerScore++;
            playerScoreElement.textContent = playerScore;
        } else if (winner === 'computer') {
            computerScore++;
            computerScoreElement.textContent = computerScore;
        }
    }

    // Function to update result message
    function updateResultMessage(winner) {
        switch(winner) {
            case 'player':
                resultText.textContent = 'You win!';
                resultText.style.color = '#28a745';
                break;
            case 'computer':
                resultText.textContent = 'You lose!';
                resultText.style.color = '#dc3545';
                break;
            default:
                resultText.textContent = 'It\'s a draw!';
                resultText.style.color = '#ffc107';
        }
    }

    // Event listener for choice buttons
    document.querySelectorAll('.choice-btn').forEach(button => {
        button.addEventListener('click', () => {
            const playerChoice = button.dataset.choice;
            const computerChoice = getComputerChoice();

            // Update computer's choice display
            computerChoiceDisplay.innerHTML = `
                <img src="public/${computerChoice === 'rock' ? 'Rock' : computerChoice === 'paper' ? 'Paper' : 'Sciserros'}.jpeg" alt="${computerChoice}">
            `;

            // Determine winner and update UI
            const winner = determineWinner(playerChoice, computerChoice);
            updateScore(winner);
            updateResultMessage(winner);
        });
    });

    // Reset button functionality
    document.getElementById('reset-btn').addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        playerScoreElement.textContent = '0';
        computerScoreElement.textContent = '0';
        resultText.textContent = 'Choose your move!';
        resultText.style.color = '#333';
        computerChoiceDisplay.innerHTML = `
            <img src="Public/Computer.png" alt="?">
        `;
    });
});