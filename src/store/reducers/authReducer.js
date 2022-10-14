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

const setUserLikes = (state, action) => {
  let liked = state?.likes;
  if (liked.find((l) => l === action?.payload)) {
    liked = liked?.filter((l) => l !== action.payload);
  } else {
    liked = [...liked, action.payload];
  }
  set("likes", liked);
  return updateState(state, {
    likes: liked,
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
    case actions.SET_USER_LIKES:
      return setUserLikes(state, action);
    case actions.LOGOUT:
      return logout(state, action);

    default:
      return state;
  }
};

export default AuthReducer;
