const statusDisplay = document.querySelector('.game-status');

// Game variables
let gameActive = true;
let player = "X";
let computer = "O";
let gameState = ["", "", "", "", "", "", "", "", ""];

// Game result messages
const computerWonMessage = "The computer has won!";
const playerWonMessage = "The player has won!";
const drawMessage = "Game ended in a draw!";

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Mark where the player clicks
function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = player;
    clickedCell.innerHTML = player;
}

// Let the computer make the next move after the player makes their move
// Randomly marks an empty cell
function computerMove() {
    var emptyCells = [];
    var randomCell;

    for (let i = 0; i < gameState.length; i++) {
        if (gameState[i] != 'X' && gameState[i] != "O") {
            emptyCells.push(i);
        }
    }

    // Return nothing and do nothing if the board has no more empty cells
    if (emptyCells.length == 0) {
        return;
    }

    randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];

    gameState[randomCell] = computer;
    document.getElementsByClassName("cell")[randomCell].innerHTML = computer;
}

// Check board for results after each turn
function handleResultValidation() {
    let roundWon = false;
    let playerWon = false; 
    let computerWon = false;

    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        const a = gameState[winCondition[0]];
        const b = gameState[winCondition[1]];
        const c = gameState[winCondition[2]];

        if (a === '' || b === '' || c === '') {
            continue;
        }

        if (a === b && b === c && a === "O") {
            roundWon = true;
            computerWon = true;
            break;
        }
        else if (a === b && b === c && a === "X") {
            roundWon = true;
            playerWon = true;
            break;
        }
    }

    if (roundWon && computerWon) {
        statusDisplay.innerHTML = computerWonMessage;
        gameActive = false;
        return;
    }
    else if (roundWon && playerWon) {
        statusDisplay.innerHTML = playerWonMessage;
        gameActive = false;
        return true;
    }

    // Continue if empty, else it's a draw
    const roundDraw = !gameState.includes("");
    if(roundDraw) {
        statusDisplay.innerHTML = drawMessage;
        gameActive = false;
        return;
    }
}

// Handle cell click event if game is active or cell is empty
function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    
    let check = handleResultValidation();

    if (check) {
        return;
    }

    computerMove();
    handleResultValidation();
}

// Reset game
function handleRestartGame() {
    gameActive = true;
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = "";
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}

// Event listeners for the reset button and the game board cells
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game-restart').addEventListener('click', handleRestartGame);