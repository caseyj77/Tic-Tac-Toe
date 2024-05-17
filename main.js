// create the gameboard

(function () {
    const gameBoard = ["","","","","","","","","",]; //array containing 9 blank elements

    // function to add squares to the blank elements
    function createGameBoard() {
        const gameboardContainer = document.getElementById('gameboard');
        gameboardContainer.innerHTML = ''; // clears board before creating new squares

        gameBoard.forEach((value, index) => {
            const square =document.createElement('div');
            square.classList.add('square');
            gameboardContainer.appendChild(square);

        });
    }
    // Initialize the game board
    createGameBoard();

})();

// create the players and starting the game

const GameModule = (function () {
    // Private variables and functions
    const startGameButton = document.getElementById('start-game-button');
    const player1Input = document.getElementById('player1');
    const player2Input = document.getElementById('player2');

    function init() {
        startGameButton.addEventListener('click', createNewPlayer);
    }

    function startGame() {
        createGameBoard(); // Recreate the game board when the game starts
        createNewPlayer();
    }
    
    function createNewPlayer () {
        const player1 = player1Input.value;
        const player2 = player2Input.value;
        alert(`${player1} vs ${player2}`);
    }

    return {
        init: init
    };
})();

document.addEventListener('DOMContentLoaded',GameModule.init);

