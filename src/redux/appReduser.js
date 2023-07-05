import { getUserAuth } from "./authReduser";

let initialState = {
  isInitialized: false
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

export const initialaze = () => {
  return {
    type: INITIALIZE,
  }
};

export const initializeApp = () => (dispatch) => {
  let authPromise = dispatch(getUserAuth());
  Promise.all([authPromise]).then(() => {
    dispatch(initialaze());
  });
}

export default appReduser;