import isLoggedReducer from "./isLogged";
import { combineReducers } from "redux";
import moviesReducer from "./movies";
import genreReducer from "./genre";

const allReducers = combineReducers({
  isLogged: isLoggedReducer,
  movies: moviesReducer,
  genre: genreReducer,
});

export default allReducers;
