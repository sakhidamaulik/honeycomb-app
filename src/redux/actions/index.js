export const shuffleAction = (shuffledArray) => {
  return {
    type: "SHUFFLE",
    payload: shuffledArray
  };
};

export const resetAction = (initialArray) => {
  return {
    type: "RESET",
    payload: initialArray
  };
};