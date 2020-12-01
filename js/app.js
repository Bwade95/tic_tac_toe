// Manipulate DOM
const DOM = (() => {
    return { playBtn: document.querySelector('play-btn'),
        gameContainer: document.querySelector('.game-container') };
})();

// Create a gameboard for the tic-tac-toe game
var GameBoard = ((container) => {
    let gameBoard = new Array(9);
})(document.querySelector('game-container'));

// Create player factory function
const Player = (marker) => {
    this.marker = marker;
    const getMarker = () => this.marker;
    const setMarker = (sign, active) => {

    };
}

// Generate Game Loop
const Game = (player, selection) => {
    return {player, selection};
}

// Keep scores

// Generate win conditions

console.log(DOM.gameContainer);