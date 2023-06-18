const gameModule = (() => {
  const movesMade = [];
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
