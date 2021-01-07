/*
*   TODO:: 
*       - Add Styling for Scenes
*       - (Optional) Begin implementation of Computer Opponent
*/

// Mainly GrabsHTML Elements
const DOM = (() => {
    return { 

        container: document.querySelector('.container'),

        setupWindow: document.querySelector('#setup-window'),

        playBtn: document.querySelector('.play-btn'),

        boardHTML: document.querySelector('#gameBoard'),

        statusMsg: document.querySelector('#statusMessage'),

        statusMsgElement: document.querySelector('[data-message-text]'),

        restartBtn: document.querySelector('#restartButton'),
        
        getCells: function() {
            return this.boardHTML.querySelectorAll('.cell');
        },

        newCell: function(mark) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            if(mark !== '') {
                cell.classList.add(mark);
            }
            return cell;
        },

        clearBoard: function() {
            DOM.getCells().forEach((cell) => {
                this.boardHTML.removeChild(cell);
            });
        },

        renderBoard: function(board) {
            this.clearBoard();
            board.forEach((cell) => {
                this.boardHTML.appendChild(DOM.newCell(cell));
            })
        }
    };
})();

// Create a gameBoard for the tic-tac-toe game
const gameBoard = (() => {

    // array for storing elements of the board
    const board = [];
    
    // For retrieving _board in other functions
    const getBoard = () => board;
    
    // 
    const init = () => {
        for (i = 0; i < 9; i++) {
            board.push('');
        }
        DOM.renderBoard(board);
    }

    const addMarkerClass = (marker) => {
        _marker = document.querySelector('.cell');
        _marker.classList.add(marker);
        return _marker;
    }

    const setMarker = (marker, index) => {
        board[index] = marker;
        addMarkerClass(marker);
        DOM.renderBoard(board);
    }

    return {
        init,
        getBoard,
        setMarker
    }
    
})();

const createPlayer = (marker) => {
    return {marker}
}   

// Code for game logic
const gameController = (() => {
    const player1 = createPlayer('x');
    const player2 = createPlayer('o');

    const board = gameBoard.getBoard();

    let activePlayer = player1;

    const init = () => {
        gameBoard.init();
        takeTurn();
    }

    // Handles gameplay events
    const takeTurn = () => {
        const cellElements = document.querySelectorAll('.cell');
        cellElements.forEach((cell) => {
            cell.addEventListener('click', handleTurn)
        })
        handleHover();
    }
    
    // checks if selected cell is empty, plays current players turn then switches turn
    const handleTurn = (e) => {
        if(!e.currentTarget.className.includes('x') && !e.currentTarget.className.includes('o')) {
           const cell = [...e.currentTarget.parentNode.children].indexOf(
                e.currentTarget
            );
            gameBoard.setMarker(activePlayer.marker, cell);
            if (checkForWin(activePlayer.marker)) {
                endGame(false);
            } else if (isDraw()){
                endGame(true);
            } else {
                switchPlayer();
                handleHover();
                takeTurn();
            }
        }
    }

    const switchPlayer = () => {
        if(activePlayer == player1) {
            activePlayer = player2;
        } else {
            activePlayer = player1;
        }
    }

    // Changes player turn and hover marker
    const handleHover = () => {
        DOM.boardHTML.classList.remove('x')
        DOM.boardHTML.classList.remove('o')
        if (activePlayer == player1) {           
            DOM.boardHTML.classList.add('x')
        } else {
            DOM.boardHTML.classList.add('o');
        }
    }

    const endGame = (draw) => {
        DOM.boardHTML.classList.remove(activePlayer.marker);
        if (draw) {
            displayController.winDisplay();
        } else {
            displayController.winDisplay(activePlayer.marker);
        }
    }

    const isDraw = () => {
        return board.every(cell => {
            return cell !== '';
        })
    }

    const checkForWin = (activePlayer) => {
        const winConditions = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
        ];
        
        return winConditions.some((combination) => {
            return combination.every(index => {
                return board[index] == (activePlayer);
            })
        })
    }

    return {
        init,
        player1,
        player2
    };
})();


// Controls visibility of DOM elements
const displayController = (() => {     
    const init = (e) => {
        e.preventDefault();
        DOM.setupWindow.style.display = 'none';
        DOM.boardHTML.style.display = 'grid';
        gameController.init();
        DOM.container.appendChild(playerDisplay().players);    
    }

    // Function used to grab and display player names on screen
    const playerDisplay = () => {
        const players = document.createElement('div');
        players.classList.add('players');

        const player1 = document.getElementById('player-1').value;

        const player1Title = document.createElement('h3');
        player1Title.setAttribute('id', 'left-title');
        player1Title.classList.add('left-title');
        player1Title.innerHTML = 'Player 1:'

        const player1Name = document.createElement('h2');
        player1Name.setAttribute('id', 'left-name');
        player1Name.classList.add('left-name');
        if (player1 !== '') {
            player1Name.innerHTML = `${player1}`;
        } else {
            player1Name.innerHTML = 'X';
        }
        
        const player2 = document.getElementById('player-2').value;

        const player2Title = document.createElement('h3');
        player2Title.setAttribute('id', 'right-title');
        player2Title.classList.add('right-title');
        player2Title.innerHTML = 'Player 2:'

        const player2Name = document.createElement('h2');
        player2Name.setAttribute('id', 'left-name');
        player2Name.classList.add('left-name');
        if (player2 !== '') {
            player2Name.innerHTML = `${player2}`;
        } else {
            player2Name.innerHTML = 'O';
        }
        

        players.appendChild(player1Title);
        players.appendChild(player1Name);
        players.appendChild(player2Title);
        players.appendChild(player2Name);

        return { players, player1, player2 };
    }

    // Displays winning message
    const winDisplay = (condition) => {
        //this.condition = condition;
        const player1 = playerDisplay().player1
        const player2 = playerDisplay().player2
        DOM.statusMsg.style.display = 'flex';
        if (condition == 'x') {
            if (player1 !== ''){
                DOM.statusMsgElement.innerHTML = `${player1} Wins!`;  
            } else {
                DOM.statusMsgElement.innerHTML = `X Wins!`
            } 
        } else if (condition == 'o') {
            if (player2 !== ''){
                DOM.statusMsgElement.innerHTML = `${player2} Wins!`;  
            } else {
                DOM.statusMsgElement.innerHTML = `O Wins!`
            } 
        } else {
            DOM.statusMsgElement.innerHTML = 'Draw!'
        }
        DOM.restartBtn.addEventListener('click', () => {
            location.reload();
            return false;
        });
    }

    DOM.playBtn.addEventListener('click', init); 

    return { winDisplay };
})();