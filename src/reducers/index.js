import isLoggedReducer from "./isLogged";
import { combineReducers } from "redux";
import moviesReducer from "./movies";
import genreReducer from "./genre";
import searchReducer from "./search";

const allReducers = combineReducers({
  isLogged: isLoggedReducer,
  movies: moviesReducer,
  genre: genreReducer,
  search: searchReducer,
});

export default allReducers;
