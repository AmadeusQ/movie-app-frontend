const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case "LOAD_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

export default moviesReducer;
