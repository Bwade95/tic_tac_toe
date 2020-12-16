// Grabbing HTML Elements
const DOM = (() => {
    const playBtn = document.querySelector('.play-btn');
    
    const gameContainer = document.querySelector('#gameBoard')

    const boxElements = document.querySelectorAll('[data-box]');

    return { 
        playBtn,
        gameContainer,
        boxElements,
    };
})();

console.log(DOM.boxArray);

// Create a gameboard for the tic-tac-toe game
const gameBoard = (() => {
    // array for storing box elements
    const board = [];

    // Gets box object in gameBoard()

    // draws the individual box and calls the render function to draw it on the webpage
    const drawBoard = () => {
        for(let i = 0; i < 9; i++) {
            board.push(DOM.boxElements);
        }
    };

    return {
        drawBoard,
        getBoard,
        setMarker
    };
})(document.querySelector('#gameBoard'));

// Create player factory function
const Player = (marker) => {
    pMarker = marker;
    const getMarker = () => pMarker;
    
    return {
        getMarker
    };
};

// Code for game logic
const gameController = (() => {
    const player1 = Player('X');
    const player2 = Player('O');

    const getPlayer1 = () => player1;
    const getPlayer2 = () => player2;

    const playerStep = (marker) => {
        DOM.boxElements.forEach(box => {
            box.addEventListener('click', handleClick, { once: true })
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
        getPlayer1,
        getPlayer2,
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