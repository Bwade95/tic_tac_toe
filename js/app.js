// Grabbing HTML Elements
const DOM = (() => {
    return { 
        playBtn: document.querySelector('.play-btn'),
        
        gameContainer: document.querySelector('.game-container'),

        getBoxes: function() {
            return this.gameContainer.querySelectorAll('.box');
        },
        
        // Creates Box html elements
        createBox: function(marker) {
            const box = document.createElement('div');
            box.className = 'box';
            
            const span = document.createElement('span');
            span.innerHTML = marker;
            box.appendChild(span);


            return box;
        },

        refreshBoard: function() {
            DOM.getBoxes().forEach(box => {
                box.gameContainer.removeChild(box);
            })
        },

        // Draws each box passed into the function
        render: function(board) {
            this.refreshBoard();
            board.forEach(box => {
                this.gameContainer.appendChild(DOM.createBox(box.marker));
            });
        }
    };
})();

// Create a gameboard for the tic-tac-toe game
const gameBoard = (() => {
    const box = {
        marker: ''
    };

    // array for storing box elements
    const board = [];

    // Gets box object in gameBoard()
    const getBox = () => box;

    const setMarker = (mark, index) => {
        board[index] = {mark};
        DOM.render(board);
    }

    // draws the individual box and calls the render function to draw it on the webpage
    const drawBoard = () => {
        for(let i = 0; i < 9; i++) {
            board.push(box);
        }
        DOM.render(board);
    };

    return {
        drawBoard,
        getBox,
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
        DOM.getBoxes().forEach(box => {
            box.addEventListener('click', e => {
                if (e.currentTarget.textContent == '') {
                    const index = Array.from(document.querySelectorAll('.box')).indexOf(e.currentTarget);
                    console.log(index);
                    gameBoard.setMarker(player1, index);
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
        DOM.playBtn.style.display = "none";
        init();   
    }); 

    const init = (() => {
        gameController.startGame();
    })
})();