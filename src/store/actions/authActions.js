export const SET_USER = "setUser";
export const SET_USER_LIKES = "setUserLikes";
export const LOGOUT = "Logout";

export const setUser = (payload) => {
  return {
    type: SET_USER,
    payload,
  };
};
export const setUserLikes = (payload) => {
  return {
    type: SET_USER_LIKES,
    payload,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const setUserAction = (data) => {
  return (dispatch) => {
    dispatch(setUser(data));
  };
};

export const setUserLikesAction = (data) => {
  return (dispatch) => {
    dispatch(setUserLikes(data));
  };
};
