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

const playerFactory = (name) => {
  const sayName = function () {
    console.log(`This is ${name}`);
  };
  return {
    sayName,
  };
};

const player1 = playerFactory("joe");
