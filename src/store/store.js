import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers/rootReducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const Store = createStore(RootReducer, enhancer(applyMiddleware(thunk)));
