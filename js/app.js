// Manipulate DOM
const DOM = (() => {
    return { 
        playBtn: document.querySelector('play-btn'),
        
        gameContainer: document.querySelector('.game-container'),
    
        getBoxes: function() {
            return this.gameContainer.querySelectorAll('.square')
        },
        
        newBox: function(html) {
            const box = document.createElement('div');
            box.className = 'box';
            box.innerHTML = html;
            return box;
        }
    };
})();

// Create a gameboard for the tic-tac-toe game
var GameBoard = ((container) => {
    let gameBoard = new Array(9);

    // Function to reset game board
    const reset = () => {
        for (let i = 0; i < gameBoard.length; i++) {
            gameBoard[i] = undefined;
        }
    }
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

// Generate win conditions
const winCondition = (gameboard) => {

}

const drawCondition = (gameboard) => {
    
}