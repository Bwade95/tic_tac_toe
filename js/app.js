// Manipulate DOM
const DOM = (() => {
    return { playBtn: document.querySelector('play-btn'),
        gameContainer: document.querySelector('.game-container') };
})();

// Create a gameboard for the tic-tac-toe game
var GameBoard = ((container) => {

})(document.querySelector('game-container'));

// Generate Game Loop
const Game = (player, selection) => {
    return {player, selection};
}

// Keep scores

// Generate win conditions

console.log(DOM.gameContainer);