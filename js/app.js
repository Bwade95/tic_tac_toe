// Grabbing HTML Elements
const DOM = (() => {
    const playBtn = document.querySelector('.play-btn');
    
    const boardHTML = document.querySelector('#gameBoard')

    return { 
        playBtn,
        boardHTML
    };
})();

// Create a gameBoard for the tic-tac-toe game
const gameBoard = (() => {

    // array for storing elements of the board
    const _board = [];
    for(i = 0; i < 9; i++) {
        _board.push('');
    }
    
    _board.forEach(() => {
        this.cell = document.createElement('div');
        cell.className = 'cell';
        DOM.boardHTML.appendChild(cell);
    })

    const cellElements = document.querySelectorAll('.cell');

    const singleCell = document.querySelector('.cell');

    const getBoard = () => _board;

    return {
        cellElements,
        singleCell,
        getBoard
    }
    
})();

const createPlayer = (name, marker) => {
    return {name, marker}
}

// Code for game logic
const gameController = (() => {
    const player1 = createPlayer('Player 1', 'x');
    const player2 = createPlayer('Player 2', 'o');

    let player2turn = false;

    // Event listener for each cell for players move
    const playerStep = () => {
        gameBoard.cellElements.forEach(cell => {
            cell.addEventListener('click', handleTurn, { once: true })
        })
    }

    // handles turn event
    const handleTurn = (e) => {
        takeTurn(e.target);
    }

    // Grabs current players marker, sets it, then changes player turn
    const takeTurn = (cell) => {
        if (!player2turn) {
            cell.classList.add(`${player1.marker}`)
            player2turn = true;
            DOM.boardHTML.classList.remove('x')
            DOM.boardHTML.classList.add('o')
        } else { 
            cell.classList.add(`${player2.marker}`)  
            player2turn = false;
            DOM.boardHTML.classList.remove('o')
            DOM.boardHTML.classList.add('x');
        }
    }

    const checkWin = () => {
        const board = Gameboard.getBoard();
        const winConditions = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        winConditions.forEach((item, index) => {

        })
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


// Controls what's visibility of DOM elements
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