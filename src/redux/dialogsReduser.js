let initialState = {
  contacts: [],
  chat: []
}

const ADD_MESSAGE = 'mates/dialogsReduser/ADD_MESSAGE';

export const addMessage = (newMessageText) => {
  return {
    type: ADD_MESSAGE,
    newMessageText,
  }
}

const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 2,
        img: null,
        text: action.newMessageText,
      }
      return {
        ...state,
        chat: [...state.chat, newMessage]
      }
    default:
      return state;
  }
}

export default dialogsReduser;