import { profileAPI } from "../api/api"
import { getUserAuth } from "./authReduser"

getUserAuth();

let initialState = {
  profile: null,
  newPostText: '',
  feed: [],
}

export const setUserProfile = (profile) => {
  return {
    type: 'SET-USER-PROFILE',
    profile
  }
}

export const inputUpdate = (text) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT', 
    newText: text
  }
}

export const addPost = () => {
  return {
    type: 'ADD-POST'
  }
}

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case 'SET-USER-PROFILE':
      return {
        ...state,
        profile: action.profile
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
        text: state.newPostText,
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

export default profileReduser;