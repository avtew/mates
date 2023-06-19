import { profileAPI } from "../api/api"

let initialState = {
  profile: null,
  status: '',
  newPostText: '',
  feed: [],
}

const SET_USER_PROFILE = 'mates/profileReduser/SET_USER_PROFILE';
const SET_STATUS = 'mates/profileReduser/SET_STATUS';
const UPDATE_NEW_POST_TEXT = 'mates/profileReduser/UPDATE_NEW_POST_TEXT';
const ADD_POST = 'mates/profileReduser/ADD_POST';

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  }
}

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status: status,
  }
}

export const addPost = (newPostText) => {
  return {
    type: ADD_POST,
    newPostText,
  }
}

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }
    case ADD_POST:
      let newPost = {
        id: 0,
        time: new Date().toLocaleString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' }),
        text: action.newPostText,
      };
      return {
        ...state,
        newPostText: '',
        feed: [newPost, ...state.feed]
      }
    default:
      return state;
  }
}

export const getUserProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then(response => {
      dispatch(setUserProfile(response.data));
    })
  }
}

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
      dispatch(setStatus(response.data));
    })
  }
}

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    })
  }
}

export default profileReduser;