import { getUserAuth, getUserPhoto } from "./authReduser";

let initialState = {
  isInitialized: false,
}

const INITIALIZE = 'mates/appReduser/INITIALIZE';

const appReduser = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE:
      return {
        ...state,
        isInitialized: true,
      }
    default:
      return state;
  }
}

export const initialize = () => {
  return {
    type: INITIALIZE,
  }
};

export const initializeAuth = () => (dispatch) => {
  dispatch(getUserAuth());
}

export const initializeProfile = (userId) => (dispatch) => {
  dispatch(getUserPhoto(userId)).then(() => {
    dispatch(initialize());
  })
}

export default appReduser;