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
const SET_AVATAR = 'mates/profileReduser/SET_AVATAR';

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

export const setAvatar = (photos) => {
  return {
    type: SET_AVATAR,
    photos,
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
        newPostText: action.newText,
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
        feed: [newPost, ...state.feed],
      }
    case SET_AVATAR:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos }
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

export const updateAvatar = (file) => async (dispatch) => {
  let response = await profileAPI.updateAvatar(file);
  if (response.data.resultCode === 0) {
    dispatch(setAvatar(response.data.data.photos));
  }
}

export const updateProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  let response = await profileAPI.updateProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  }
}

export default profileReduser;