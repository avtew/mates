import { getUserAuth } from "./authReduser";

let initialState = {
  isInitialized: false
}

export const initialaze = () => {
  return {
    type: 'INITIALIZE'
  }
};

const appReduser = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIALIZE':
      return {
        ...state,
        isInitialized: true,
      }
    default:
      return state;
  }
}

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getUserAuth());
  Promise.all([promise]).then(() => {
    dispatch(initialaze());
  });
}

export default appReduser;