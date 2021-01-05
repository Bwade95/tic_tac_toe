// Grabbing HTML Elements
const DOM = (() => {
    return { 
        playBtn: document.querySelector('.play-btn'),

        boardHTML: document.querySelector('#gameBoard'),
        
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
    const _board = [];
    
    // For retrieving _board in other functions
    const getBoard = () => _board;
    
    // 
    const init = () => {
        for (i = 0; i < 9; i++) {
            _board.push('');
        }
        DOM.renderBoard(_board);
    }

    const addMarkerClass = (marker) => {
        _marker = document.querySelector('.cell');
        _marker.classList.add(marker);
        return _marker;
    }

    const setMarker = (marker, index) => {
        _board[index] = marker;
        addMarkerClass(marker);
        DOM.renderBoard(_board);
    }

    return {
        init,
        getBoard,
        setMarker
    }
    
})();

const createPlayer = (name, marker) => {
    return {name, marker}
}

// Code for game logic
const gameController = (() => {
    const player1 = createPlayer('Player 1', 'x');
    const player2 = createPlayer('Player 2', 'o');

    const board = gameBoard.getBoard();

    let activePlayer = player1;

    const init = () => {
        gameBoard.init();
        startGame();
    }

    // Handles gameplay events
    const startGame = () => {
        const cellElements = document.querySelectorAll('.cell');
        cellElements.forEach((cell) => {
            cell.addEventListener('click', handleTurn, { once: true })
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
                startGame();
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
        if (draw) {
            console.log("Draw!");
        } else {
            console.log("Win!");
        }
    }

    const isDraw = () => {
        return board.every(cell => {
            return cell !== '' || cell !== '';
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
        init
    };
})();


// Controls visibility of DOM elements
const displayController = (() => {   
    const init = () => {
        DOM.playBtn.style.display = 'none';
        DOM.boardHTML.style.display = 'grid';
        gameController.init(); 
    }

    DOM.playBtn.addEventListener('click', init); 
})();