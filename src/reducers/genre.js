const genreReducer = (state = null, action) => {
  switch (action.type) {
    case "SELECT_GENRE":
      return action.payload;
    default:
      return state;
  }
};

export default genreReducer;
