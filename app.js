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
  let tiles = document.querySelectorAll(".boardTiles");

  // add event listeners to each tile
  Array.from(tiles).forEach((tiles, index) => {
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

// Game IIFE object
const game = (() => {
  // declare players
  const playerOne = playerFactory("Player 1", "X");
  const playerTwo = playerFactory("Player 2", "O");

  // starting point
  let activePlayer = playerOne;
  let winnerDeclared = false;
  let remainingSpots = 9;

  // selectors
  let subText = document.querySelector(".subtext"); // display winner/tie
  let playerName = document.querySelector(".player-name"); // purpose: alert player turn

  // winning conditions
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // check winner
  function checkWinner() {
    winConditions.forEach((item, index) => {
      if (
        gameModule.board[item[0]] === this.activePlayer.marker &&
        gameModule.board[item[1]] === this.activePlayer.marker &&
        gameModule.board[item[2]] === this.activePlayer.marker
      ) {
        subText.innerHTML = `<b>${this.activePlayer.name} wins!</b>`;
        this.winnerDeclared = true;
      }
    });
  }

  // alert next player
  function alertNextPlayer() {
    this.activePlayer === playerOne
      ? (playerName.textContent = "Player 2")
      : (playerName.textContent = "Player 1");
  }

  // next player
  function nextPlayer() {
    this.activePlayer === playerOne
      ? (this.activePlayer = playerTwo)
      : (this.activePlayer = playerOne);
  }

  // declare tie
  function declareTie() {
    subText.innerHTML = "<br>Tie game!</br>";
  }

  return {
    activePlayer,
    remainingSpots,
    checkWinner,
    alertNextPlayer,
    nextPlayer,
    declareTie,
    winnerDeclared,
  };
})();
