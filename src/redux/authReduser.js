import { stopSubmit } from 'redux-form';
import { authAPI, profileAPI } from './../api/api';

let initialState = {
  userId: null,
  login: null,
  email: null,
  userPhoto: null,
  isAuth: false,
  isFetching: false,
}

const SET_USER_DATA = 'mates/authReduser/SET_USER_DATA';
const SET_USER_PHOTO = 'mates/authReduser/SET_USER_PHOTO';

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }
    case SET_USER_PHOTO:
      return {
        ...state,
        userPhoto: action.photo,
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

export const setUserPhoto = (photo) => {
  return {
    type: SET_USER_PHOTO,
    photo,
  };
}

export const getUserAuth = () => async (dispatch) => {
  const response = await authAPI.getAuth();
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setUserData(id, login, email, true));
  } else {
    dispatch(setUserData(null, null, null, false));
  }
}

export const getUserPhoto = (userId) => async (dispatch) => {
  const response = await profileAPI.getProfile(userId);
  debugger
  dispatch(setUserPhoto(response.data.photos.small));
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