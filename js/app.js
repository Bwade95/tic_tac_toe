// Grabbing HTML Elements
const DOM = (() => {
    const playBtn = document.querySelector('.play-btn');
    
    const gameContainer = document.querySelector('#gameBoard')

    const cellElements = document.querySelectorAll('.cell');

    return { 
        playBtn,
        gameContainer,
        cellElements
    };
})();

// Create a gameboard for the tic-tac-toe game
const gameBoard = (() => {

    // array for storing elements of the board
    const board = new Array(9);

    // Gets cell at index of game board
    const getCell = (num) => board[num];

    // adds marker to element at given index
    const setCell = (num) => { 
        const cellElement = document.querySelector(`.cell:nth-child(${num + 1}`);
        let setX = cellElement.classList.add('x');
        board[num] = setX;
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
        getCell,
        setCell,
        getEmptyCells
    };
})(document.querySelector('#gameBoard'));

// Create players
function playerFactory(marker) {
    let pMarker = marker;
    const getMarker = () => pMarker;
    return {
        getMarker
    }
}

// Code for game logic
const gameController = (() => {
    const player1 = 'x';
    const player2 = 'o';

    const playerStep = () => {
        DOM.cellElements.forEach(cell => {
            cell.addEventListener('click', handleClick, { once: true })
        })
    }

    function handleClick(e) {
        const cell = e.target
        placeMark(cell);
    }

    function placeMark(cell) {
        cell.classList.add(`${player1}`)
    }

    const startGame = () => {
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
        DOM.gameContainer.style.display = 'grid';
        init();   
    }); 

    const init = (() => {
        gameController.startGame();
    })
})();