export const signInAction = () => {
  return {
    type: "SIGN_IN",
  };
};

export const signOutAction = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const loadMoviesAction = (moviesData) => {
  return {
    type: "LOAD_MOVIES",
    payload: moviesData,
  };
};

export const selectGenreAction = (genreId) => {
  return {
    type: "SELECT_GENRE",
    payload: genreId,
  };
};

export const searchChangeAction = (searchValue) => {
  return {
    type: "SEARCH_CHANGE",
    payload: searchValue,
  };
};
