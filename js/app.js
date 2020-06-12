"use strict";

const DisplayController = (function() {

    const initializeDisplay = (() => {
        let board = document.querySelector(".gameboard");
        for (let i = 0; i < 9; i++) {
            let boardSpot = document.createElement("div");
            boardSpot.setAttribute('id', i);
            boardSpot.classList.add('spot');
            board.appendChild(boardSpot);
        }
    })();

return;
})();

"use strict";

const GameBoard = (function() {
    let gameData = [['','',''],['','',''],['','','']];

    const setPosition = (x, y, player) => {
        gameData[x][y] = player.symbol;
    }

    return {
        gameData
    };

})();

function Player(symbol) {
    
    let player = Object.create(Player.prototype);
    player.symbol = symbol;
    
    return player;
}