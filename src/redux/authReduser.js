import { stopSubmit } from 'redux-form';
import { authAPI } from './../api/api';

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  isFetching: false,
}

const SET_USER_DATA = 'mates/authReduser/SET_USER_DATA';

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
}

export const setUserData = (userId, login, email, isAuth) => {
  return {
    type: SET_USER_DATA, 
    payload: { userId, login, email, isAuth },
  };
}

export const getUserAuth = () => async (dispatch) => {
  const response = await authAPI.getAuth();
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setUserData(id, login, email, true));
  }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe);
  if (response.data.resultCode === 0) {
    dispatch(getUserAuth());
  } else {
    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
    dispatch(stopSubmit('login', { _error: message }));
  }
}

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout()
  if (response.data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
  }
}

export default authReduser;