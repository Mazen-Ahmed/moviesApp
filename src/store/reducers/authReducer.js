import * as actions from "../actions/authActions";
import { get, remove, set } from "helpers/useSessions";

const updateState = (oldState, newState) => {
  return {
    ...oldState,
    ...newState,
  };
};

const initialState = {
  user: get("user") || null,
  likes: get("likes") || [],
  theme: 1,
};

const setUser = (state, action) => {
  return updateState(state, {
    user: action.payload,
    likes: [],
  });
};

const logout = (state, action) => {
  remove("likes");
  remove("user");
  return updateState(state, {
    likes: [],
    user: null,
  });
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_USER:
      return setUser(state, action);

    case actions.LOGOUT:
      return logout(state, action);

    default:
      return state;
  }
};

export default AuthReducer;
