import { stopSubmit } from 'redux-form';
import { authAPI } from './../api/api';

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  isFetching: false,
}

const SETUSERDATA = 'SET-USER-DATA';

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SETUSERDATA:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
}

export const setUserData = (userId, login, email, isAuth) => ({ type: SETUSERDATA, payload: { userId, login, email, isAuth } });

export const getUserAuth = () => (dispatch) => {
  return authAPI.getAuth().then(response => {
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data;
      dispatch(setUserData(id, login, email, true));
    }
  });
}

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(getUserAuth());
    } else {
      let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
      dispatch(stopSubmit('login', {_error: message}));
    }
  })
}

export const logout = () => (dispatch) => {
  authAPI.logout().then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setUserData(null, null, null, false));
    }
  })
}

export default authReduser;