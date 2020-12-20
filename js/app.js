// Grabbing HTML Elements
const DOM = (() => {
    const playBtn = document.querySelector('.play-btn');
    
    const boardHTML = document.querySelector('#gameBoard')

    const cellElements = document.querySelectorAll('.cell');

    const singleCell = document.querySelector('.cell');

    return { 
        playBtn,
        boardHTML,
        cellElements,
        singleCell
    };
})();

// Create a gameBoard for the tic-tac-toe game
const gameBoard = (() => {

    // array for storing elements of the board
    const board = [];

    // Gets cell at index of game board
    const getBoard = () => board;

    const setBoard = () => {
        
    }

    const getEmptyCells = () => {
        cells = [];
        for (let i = 0; i < board.length; i++) {
            const cell = board[i]
            if (cell == undefined) {
                cell.push(i);
            }
        }
        return cells;
    }

    return {
        getBoard,
        getEmptyCells
    };
})(document.querySelector('#gameBoard'));

// Code for game logic
const gameController = (() => {
    const player1 = 'x';
    const player2 = 'o';

    let player2turn = false;

    // Event listener for each cell for players move
    const playerStep = () => {
        DOM.cellElements.forEach(cell => {
            cell.addEventListener('click', handleTurn, { once: true })
        })
    }

    // Grabs target and initiates placemark function
    const handleTurn = (e) => {
        takeTurn(e.target);
    }

    // Grabs current players marker, sets it, then changes player turn
    const takeTurn = (cell) => {
        if (!player2turn) {
            cell.classList.add(`${player1}`)
            player2turn = true;
            DOM.boardHTML.classList.remove('x')
            DOM.boardHTML.classList.add('o')
        } else { 
            cell.classList.add(`${player2}`)  
            player2turn = false;
            DOM.boardHTML.classList.remove('o')
            DOM.boardHTML.classList.add('x');
        }
    }

    const startGame = () => {
        DOM.boardHTML.classList.add('x');
        playerStep();
    }

    return {
        startGame,
        playerStep
    };
})();


// Controls what's visible on screen
const displayController = (() => {   
    DOM.playBtn.addEventListener('click', () => {
        DOM.playBtn.style.display = 'none';
        DOM.boardHTML.style.display = 'grid';
        init();   
    }); 

    const init = (() => {
        gameController.startGame();
    })
})();