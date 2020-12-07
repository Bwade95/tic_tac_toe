// Manipulate DOM
const displayController = (() => {
    return { 
        playBtn: document.querySelector('play-btn'),
        
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
            this.clearBoard();
            board.forEach(box => {
                this.gameContainer.appendChild(DOM.newSqaure(DOM.boxSelection(box.marker)));
            });
        }
    };
})();

// Create a gameboard for the tic-tac-toe game
var GameBoard = ((container) => {
    const gameBoard = new Array(9);

    const getBoard = (num) => gameBoard[num];

})(document.querySelector('game-container'));

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

// Generate Game Loop

// Keep scores