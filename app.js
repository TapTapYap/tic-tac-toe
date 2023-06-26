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

  let tiles = document.querySelector(".boardTiles");

  return { board };
})();

console.log(board);
