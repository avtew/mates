let initialState = {
  contacts: [],
  chat: []
}

export const addMessage = (newMessageText) => {
  return {
    type: 'ADD-MESSAGE',
    newMessageText
  }
}

const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD-MESSAGE':
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