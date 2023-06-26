// PLayer factory Function
const playerFactory = (player, marker) => {
  return {
    player,
    marker,
  };
};

// Game board IIFE object
const gameModule = (() => {
  // generate board array
  let board = [];

  for (i = 0; i < 9; i++) {
    board.push("");
  }

  let boardTilesContainer = document.querySelector(".board");
  let tiles = document.querySelector(".boardTiles");

  Array.from(boardTilesContainer.children).forEach((tiles, index) => {
    tiles.addEventListener("click", () => {
      // Display active payer marker
      tiles.classList.add(game.activePlayer.marker);
      tiles.setAttribute("data", game.activePlayer.marker);

      // Update array value to be that of active player
      board[index] = game.activePlayer.marker;

      // remove event listener from the marked index
      tiles.getElementsByClassName.pointerEvents = "none";

      // Update remaining spots
      game.remainingSpots -= 1;

      // Check winner
      game.checkWinner();

      // Check remaining spots
      if (game.winnerDeclared == false) {
        if (game.remainingSpots > 0) {
          game.alertNextPlayer();
          game.nextPlayer();
        } else if (game.remainingSpots == 0) {
          game.declareTie();
        }
      }
    });
  });
  return { board };
})();
