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
            cell.classList.add(mark);
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
            _board.push('o');
        }
        DOM.renderBoard(_board);
    }

    const setBoard = (mark, index) => {
        board[index] = mark;
        DOM.renderBoard(_board);
    } 

    return {
        init,
        getBoard,
        setBoard
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

    //let test = true;

    let activePlayer = player1;

    // Event listener for each cell for players move
    const init = () => {
        const cellElements = document.querySelectorAll('.cell');
        cellElements.forEach((cell) => {
            cell.addEventListener('click', () => {

            }, { once: true })
        })
        handleHover();
    }

    const handleTurn = (e) => {
        const cell = e.target;
        //placeMarker(cell);
        gameBoard.setBoard(activePlayer.marker, cell);
        switchPlayer();
        handleHover();
    }

    /*const placeMarker = (cell) => {
        cell.classList.add(activePlayer.marker);
    }*/

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

    const checkForWin = () => {
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
        
        winConditions.some((combination) => {
            return combination.every(index => {
                return cellElements[index].classList.contains(activePlayer.marker);
            })
        })
    }


    const startGame = () => {
        // adds marker hover for first player
        DOM.boardHTML.classList.add('x');
        gameBoard.init();
        init();
    }

    return {
        startGame
    };
})();


// Controls what's visibility of DOM elements
const displayController = (() => {   
    DOM.playBtn.addEventListener('click', () => {
        DOM.playBtn.style.display = 'none';
        DOM.boardHTML.style.display = 'grid';
        init();   
    }); 

    const init = (() => {
        gameController.startGame();
    })
})();