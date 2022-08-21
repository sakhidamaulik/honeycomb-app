const initialState = {
  shuffledValues: [],
  remainingValues: []
}

const shuffleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHUFFLE":
      console.log("action shuffle", action);
      const shuffledArray = action.payload;

      return {
        shuffledValues: shuffledArray.slice(0, 4),
        remainingValues: shuffledArray.slice(4, 6),
      };
    case "RESET":
      console.log("action reset", action);
      const remainingValues = action.payload;
      return {
        shuffledValues: [],
        remainingValues
      };
    default:
      return state;
  }
};
export default shuffleReducer;