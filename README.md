# Tic-Tac-Toe
Odin Project Tic Tac Toe game

The entire game is wrapped in an IIFE Module to ensure code is not exposed.

Loading the Game:

-   When the DOM content is loaded, the init function from the GameModule is executed.
    This function adds an event listener to the "Start Game" button.

Starting the Game:

    When the "Start Game" button is clicked, the startGame function is called.
    This function retrieves the names entered in the input fields and displays them in an alert.

    It also calls the createGameBoard function to initialize the game board.

Playing the Game:

    Each square on the game board is represented by a <div> element created in the createGameBoard function.
    Each square has a click event listener attached to it, so when you click on a square, the handleSquareClick function is called.
    In the handleSquareClick function, the clicked square's index and the current symbol ('X' or 'O') are passed.
    If the square is empty, the symbol is placed on the square, and the game checks for a winner or a tie.
    If no winner or tie is detected, the player's turn switches.

Interacting with the Game:

    You interact by clicking on empty squares to place your symbol ('X').
    Your friend interacts in the same way, clicking on empty squares to place their symbol ('O').
    The game alternates between you and your friend, updating the game board accordingly.

Resetting the Game:

    After a win or a tie, the game board is reset using the resetGame function.
    This function clears the game board array, resets the current player symbol to 'X', and recreates the game board.
    You can start a new game by clicking the "Start Game" button again.

In summary, each part of the code corresponds to a specific action in the gameplay, from initializing the game to handling player interactions, detecting wins or ties, and resetting the game for a new round.