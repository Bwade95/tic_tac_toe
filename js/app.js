// Grabbing HTML Elements
const DOM = (() => {
    const playBtn = document.querySelector('.play-btn');
    
    const gameContainer = document.querySelector('.game-container')

    const gameBoxes = document.querySelectorAll('.box');

    const boxArray = Array.from(gameBoxes);

    return { 
        playBtn,
        gameContainer,
        gameBoxes,
        boxArray
    };
})();

console.log(DOM.boxArray);

// Create a gameboard for the tic-tac-toe game
const gameBoard = (() => {
    const box = {
        marker: ''
    };

    // array for storing box elements
    const board = [];

    // Gets box object in gameBoard()
    const getBoard = () => board;

    const setMarker = (mark, index) => {
        board[index] == {mark};
    }

    // draws the individual box and calls the render function to draw it on the webpage
    const drawBoard = () => {
        for(let i = 0; i < 9; i++) {
            board.push(box);
        }
    };

    return {
        drawBoard,
        getBoard,
        setMarker
    };
})(document.querySelector('.game-container'));

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
        DOM.boxArray.forEach(box => {
            box.addEventListener('click', e => {
                if (e.currentTarget.textContent == '') {
                    const index = Array.from(document.querySelectorAll('.box')).indexOf(e.currentTarget);
                    console.log(index.valueOf());
                    return;
                }   
            })
        })
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