import { authAPI } from './../api/api';

let initialState = {
  userId: null,
  login: null,
  email: null,
  isFetching: false,
  isAuth: false,
}

const SETUSERDATA = 'SET-USER-DATA';

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SETUSERDATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    default:
      return state;
  }
}

export const setUserData = (userId, login, email) => ({ type: SETUSERDATA, data: { userId, login, email } });

export const getUserAuth = () => (dispatch) => {
  authAPI.getAuth().then(response => {
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data;
      dispatch(setUserData(id, login, email));
    }
  });
}

export default authReduser;