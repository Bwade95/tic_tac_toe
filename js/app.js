// Manipulate DOM
const DOM = (() => {
    return { 
        playBtn: document.querySelector('.play-btn'),
        
        gameContainer: document.querySelector('.game-container'),
    
        getBoxes: function() {
            return this.gameContainer.querySelectorAll('.box')
        },
        
        createBox: function(marker) {
            console.log(GameBoard.getBox())
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
        marker: 'X'
    };

    const gameBoard = [];

    const getBox = (num) => gameBoard[num];

    const init = () => {
        for(let i = 0; i < 9; i++) {
            gameBoard.push(box);
        }
        DOM.render(gameBoard);
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