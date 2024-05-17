const GameModule = (function () {
    // Private variables and functions
    const startGameButton = document.getElementById('start-game-button'); // Button to start the game
    const player1Input = document.getElementById('player1'); // Input field for player 1's name
    const player2Input = document.getElementById('player2'); // Input field for player 2's name
    let gameBoard = ["", "", "", "", "", "", "", "", ""]; // Array representing the game board
    let currentPlayerSymbol = 'X'; // Variable to track the current player's symbol (X or O)
    let player1Name = ''; // Variable to store player 1's name
    let player2Name = ''; // Variable to store player 2's name

    // Function to create and display the game board
    function createGameBoard() {
        const gameboardContainer = document.getElementById('gameboard'); // Container for the game board
        gameboardContainer.innerHTML = ''; // Clear the game board container

        // Create and append squares to the game board container
        gameBoard.forEach((value, index) => {
            const square = document.createElement('div'); // Create a div for each square
            square.classList.add('square'); // Add class 'square' to the div
            square.setAttribute('data-index', index); // Set data-index attribute
            square.textContent = value; // Set the text content of the square
            gameboardContainer.appendChild(square); // Append the square to the game board container

            // Add click event listener to the square
            square.addEventListener('click', function(event) {
                handleSquareClick(event, index); // Call handleSquareClick function on click
            });
        });
    }

    // Function to handle the click event on a square
    function handleSquareClick(event, index) {
        if (gameBoard[index] === "") { // Check if the square is empty
            gameBoard[index] = currentPlayerSymbol; // Set the square to the current player's symbol
            event.target.textContent = currentPlayerSymbol; // Update the square's text content

            if (checkWinner(currentPlayerSymbol)) { // Check if the current player wins
                setTimeout(() => {
                    alert(`${getCurrentPlayerName()} wins!`); // Alert the winner
                    resetGame(); // Reset the game
                }, 10);
            } else if (checkTie()) { // Check if the game is a tie
                setTimeout(() => {
                    alert("It's a tie!"); // Alert that it's a tie
                    resetGame(); // Reset the game
                }, 10);
            } else {
                switchPlayer(); // Switch the player if no win or tie
            }
        }
    }

    // Function to get the current player's name
    function getCurrentPlayerName() {
        return currentPlayerSymbol === 'X' ? player1Name : player2Name; // Return player 1's or player 2's name based on the current symbol
    }

    // Function to switch the current player
    function switchPlayer() {
        currentPlayerSymbol = currentPlayerSymbol === 'X' ? 'O' : 'X'; // Switch the symbol between X and O
    }

    // Function to check if the current player has won
    function checkWinner(symbol) {
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal winning combinations
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical winning combinations
            [0, 4, 8], [2, 4, 6] // Diagonal winning combinations
        ];

        // Check if any winning combination is satisfied
        return winningCombos.some(combo => {
            return combo.every(index => gameBoard[index] === symbol);
        });
    }

    // Function to check if the game is a tie
    function checkTie() {
        return gameBoard.every(square => square !== ""); // Check if all squares are filled
    }

    // Function to reset the game
    function resetGame() {
        gameBoard = ["", "", "", "", "", "", "", "", ""]; // Reset the game board array
        currentPlayerSymbol = 'X'; // Reset the current player symbol to X
        createGameBoard(); // Recreate the game board
    }

    // Function to initialize the game
    function init() {
        startGameButton.addEventListener('click', startGame); // Add click event listener to the start button
    }

    // Function to start the game
    function startGame() {
        player1Name = player1Input.value; // Get and store player 1's name from the input
        player2Name = player2Input.value; // Get and store player 2's name from the input
        createGameBoard(); // Create the game board
        alert(`${player1Name} vs ${player2Name}`); // Alert the players' names
    }

    // Return the init function to be accessible from outside the module
    return {
        init: init,
        createGameBoard: createGameBoard
    };
})();

// Initialize the game module when the DOM content is loaded
document.addEventListener('DOMContentLoaded', GameModule.init);
