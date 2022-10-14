export const SET_USER = "setUser";
export const LOGOUT = "Logout";

export const setUser = (payload) => {
  return {
    type: SET_USER,
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
