const gameModule = (() => {
  const movesMade = [];
  let gameBoardTiles = document.getElementsByClassName("boardTiles");
  gameBoardTiles.addEventListener("click", function () {
    // Logic that adds the players value to the board and adds it to the movesMade array
  });
  return {
    movesMade,
  };
})();

const playerInfo = (() => {
  const playerName = document.getElementById("playerName");
  const blockedGameBoard = document.getElementById("blocked");
})();

const playerFactory = (name) => {
  const sayName = function () {
    console.log(`This is ${player}`);
  };
  let player = name;
  let playerValue = value;
  return {
    sayName,
    player,
    playerValue,
  };
};
