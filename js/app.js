// Grabbing HTML Elements
const DOM = (() => {
    return { 
        playBtn: document.querySelector('.play-btn'),
        
        gameContainer: document.querySelector('.game-container'),
    
        getBoxes: function() {
            return this.gameContainer.querySelectorAll('.box')
        },
        
        createBox: function(marker) {
            const box = document.createElement('div');
            box.className = 'box';
            

            const span = document.createElement('span');
            span.innerHTML = marker;
            box.appendChild(span);

            return box;
        },

        render: function(board) {
            //this.clearBoard();
            board.forEach(box => {
                this.gameContainer.appendChild(DOM.createBox(box.marker));
            });
        }
    };
})();

// Create a gameboard for the tic-tac-toe game
const GameBoard = ((container) => {
    const box = {
        marker: ''
    };

    const board = [];

    const getBox = (num) => board[num];
    /*
    *  Function to change value of box to given marker
    *  @param {*} num is the index of the box in the gameBoard array
    *  @param {*} the player that has selected the box
    */
    const setBox = (num, player) => {
        const gameBox = document.querySelector(`.box:nth-child(${num}) span`);
        gameBox.classList.add('player-marker');
        gameBox.textContent = player.getSign();
        board = player.getSign();
    }

    const init = () => {
        for(let i = 0; i < 9; i++) {
            board.push(box);
        }
        DOM.render(board);
    };

    return {
        getBox,
        init
    };
})(document.querySelector('.game-container'));

// Create player factory function
const Player = (marker) => {
    pMarker = marker;
    const getMarker = () => pMarker;
    const setMarker = (sign, active) => {
        pMarker = marker;
        const span = document.querySelector(``)
    };
    return {
        getMarker,
        setMarker
    }
}

// Code for game logic
const gameController = (() => {
    const player1 = Player('X');
    const player2 = Player('O');

    const getPlayer1 = () => player1;
    const getPlayer2 = () => player2;

    return {
        getPlayer1,
        getPlayer2
    }
})();


// Controls what's visible on screen
const displayController = (() => {
    const init = () => {
        DOM.playBtn.addEventListener('click', () => {
            startGame();
        })
    }

    const startGame = () => {
        DOM.playBtn.style.display = "none";
        GameBoard.init();
    }

    init()
})()