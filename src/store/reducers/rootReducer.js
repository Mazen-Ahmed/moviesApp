import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
import MoviesReducer from "./moviesReducer";

const RootReducer = combineReducers({ AuthReducer, MoviesReducer });

export default RootReducer;
