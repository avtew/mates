import { profileAPI } from "../api/api"

let initialState = {
  profile: null,
  status: '',
  newPostText: '',
  feed: [],
}

export const setUserProfile = (profile) => {
  return {
    type: 'SET-USER-PROFILE',
    profile
  }
}

export const setStatus = (status) => {
  return {
    type: 'SET-STATUS',
    status: status
  }
}

export const addPost = (newPostText) => {
  return {
    type: 'ADD-POST',
    newPostText
  }
}

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case 'SET-USER-PROFILE':
      return {
        ...state,
        profile: action.profile
      }
    case 'SET-STATUS':
      return {
        ...state,
        status: action.status
      }
    case 'UPDATE-NEW-POST-TEXT':
      return {
        ...state,
        newPostText: action.newText
      }
    case 'ADD-POST':
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