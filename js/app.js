// Manipulate DOM
const DOM = (() => {
    return { 
        playBtn: document.querySelector('.play-btn'),
        
        gameContainer: document.querySelector('.game-container'),
    
        getBoxes: function() {
            return this.gameContainer.querySelectorAll('.box')
        },
        
        createBox: function(html) {
            const box = document.createElement('div');
            box.className = 'box';
            box.innerHTML = html;
            return box;
        },

        boxSelection: function(marker) {
            return `<span>${marker}</span>`
        },

        render: function(board) {
            //this.clearBoard();
            board.forEach(box => {
                this.gameContainer.appendChild(DOM.createBox(DOM.boxSelection(box.marker)));
            });
        }
    };
})();

// Create a gameboard for the tic-tac-toe game
var GameBoard = ((container) => {
    const box = {
        marker: ''
    };

    const gameBoard = [];

    const getBoard = (num) => gameBoard[num];

    const init = () => {
        for(let i = 0; i < 9; i++) {
            gameBoard.push(box);
        }
        DOM.render(gameBoard);
    };

    return {
        getBoard,
        init
    };
})(document.querySelector('.game-container'));

// Create player factory function
const Player = (marker) => {
    pMarker = marker;
    const getMarker = () => pMarker;
    const setMarker = (sign, active) => {
        pMarker = marker;
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