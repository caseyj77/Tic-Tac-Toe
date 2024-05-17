const GameModule = (function () {
    // Private variables and functions
    const startGameButton = document.getElementById('start-game-button');
    const player1Input = document.getElementById('player1');
    const player2Input = document.getElementById('player2');
    let gameBoard = ["", "", "", "", "", "", "", "", ""];
    let currentPlayerSymbol = 'X'; // Change to currentPlayerSymbol to store the symbol
    let player1Name = ''; // Store player 1's name
    let player2Name = ''; // Store player 2's name

    function createGameBoard() {
        const gameboardContainer = document.getElementById('gameboard');
        gameboardContainer.innerHTML = '';

        gameBoard.forEach((value, index) => {
            const square = document.createElement('div');
            square.classList.add('square');
            square.setAttribute('data-index', index);
            square.textContent = value;
            gameboardContainer.appendChild(square);

            square.addEventListener('click', function() {
                handleSquareClick(index);
            });
        });
    }

    function handleSquareClick(index) {
        if (gameBoard[index] === "") {
            gameBoard[index] = currentPlayerSymbol;
            event.target.textContent = currentPlayerSymbol;
            if (checkWinner(currentPlayerSymbol)) {
                setTimeout(() => {
                    alert(`${getCurrentPlayerName()} wins!`); // Use getCurrentPlayerName() to get the current player's name
                    resetGame();
                }, 10);
            } else if (checkTie()) {
                setTimeout(() => {
                    alert("It's a tie!");
                    resetGame();
                }, 10);
            } else {
                switchPlayer();
            }
        }
    }

    function getCurrentPlayerName() {
        return currentPlayerSymbol === 'X' ? player1Name : player2Name; // Return the name of the current player based on the symbol
    }

    function switchPlayer() {
        currentPlayerSymbol = currentPlayerSymbol === 'X' ? 'O' : 'X'; // Switches between X and O
    }

    function checkWinner(symbol) {
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        return winningCombos.some(combo => {
            return combo.every(index => gameBoard[index] === symbol);
        });
    }

    function checkTie() {
        return gameBoard.every(square => square !== "");
    }

    function resetGame() {
        gameBoard = ["", "", "", "", "", "", "", "", ""];
        currentPlayerSymbol = 'X';
        createGameBoard();
    }

    function init() {
        startGameButton.addEventListener('click', startGame);
    }

    function startGame() {
        player1Name = player1Input.value; // Store player 1's name
        player2Name = player2Input.value; // Store player 2's name
        createGameBoard();
        alert(`${player1Name} vs ${player2Name}`); // Alert the players' names
    }

    return {
        init: init,
        createGameBoard: createGameBoard
    };
})();

document.addEventListener('DOMContentLoaded', GameModule.init);
