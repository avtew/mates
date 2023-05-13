let initialState = {
  contacts: [
    {
      'id': '1',
      'img': '',
      'name': 'Саша Павлов',
      'lastMsg': 'Привет!',
      'time': '15:05'
    },
    {
      'id': '2',
      'img': '',
      'name': 'Паша Александров',
      'lastMsg': 'Ну, хрен знает',
      'time': '11:46'
    },
    {
      'id': '3',
      'img': '',
      'name': 'Маша Гришина',
      'lastMsg': 'Да иди ты :(',
      'time': '06:04'
    },
    {
      'id': '4',
      'img': '',
      'name': 'Гриша Машин',
      'lastMsg': 'Да, реакт вообще тема',
      'time': '23:43'
    },
    {
      'id': '5',
      'img': '',
      'name': 'Даша Дашина',
      'lastMsg': 'Hello!',
      'time': '16:55'
    }
  ],
  newMessageText: '',
  chat: [
    {
      id: null,
      img: null,
      name: 'Саша Павлов',
      text: 'Привет',
    }
  ]
}

export const inputUpdateMessageActionCreator = (text) => {
  return {
    type: 'UPDATE-NEW-MESSAGE-TEXT', 
    newText: text
  }
}

export const addMessageActionCreator = () => {
  return {
    type: 'ADD-MESSAGE'
  }
}

const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE-NEW-MESSAGE-TEXT':
      return {
        ...state,
        newMessageText: action.newText
      }
    case 'ADD-MESSAGE':
      let newMessage = {
        id: 2,
        img: null,
        name: 'User',
        text: state.newMessageText,
      }
      return {
        ...state,
        newMessageText: '',
        chat: [...state.chat, newMessage]
      }
    default:
      return state;
  }
}

export default dialogsReduser;