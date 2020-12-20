// Grabbing HTML Elements
const DOM = (() => {
    const playBtn = document.querySelector('.play-btn');
    
    const gameContainer = document.querySelector('#gameBoard')

    const cellElements = document.querySelectorAll('[data-cell]');

    return { 
        playBtn,
        gameContainer,
        cellElements,
    };
})();

// Create a gameboard for the tic-tac-toe game
const gameBoard = (() => {
    // array for storing elements of the board
    const board = new Array(9);

    // Gets cell at index of game board
    const getCell = (num) => board[num];


    return {
    };
})(document.querySelector('#gameBoard'));

// Create player factory function
function playerFactory(name, mark) {
    const takeTurn = function (e) {
        if (e.target.nodeName.toLowerCase() === 'div') {

        }
    }
}

// Code for game logic
const gameController = (() => {

    const playerStep = (marker) => {
        DOM.boxElements.forEach(cell => {
            cell.addEventListener('click', handleClick, { once: true })
        })
    }

    function handleClick(e) {
        console.log('clicked');
    }

    const startGame = () => {
        gameBoard.drawBoard();
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