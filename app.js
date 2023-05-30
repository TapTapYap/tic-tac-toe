const gameBoard = (() => {
  const movesMade = [];
  return {
    movesMade,
  };
})();

const playerFactory = (score) => {
  const logScore = () => console.log(this.score);
  return {
    logScore,
    score,
  };
};
