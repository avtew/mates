import { profileAPI } from "../api/api"

let initialState = {
  profile: null,
  cover: null,
  info: null,
  newPostText: '',
  feed: [
    {
      'id': '2',
      'img': '',
      'time': '15:00',
      'name': 'User',
      'text': 'Свойство box-shadow позволяет добавить тень вокруг элемента на веб-странице. Тень подсказывает пользователю, является ли элемент — кнопка, картинка — интерактивным. Благодаря теням, вне экранов гаджетов мы получаем представление о размере и глубине объекта, и свойство box-shadow добавляет реализм в оформление сайта.',
      'likesQnt': '15'
    },
    {
      'id': '1',
      'img': '',
      'time': '16:00',
      'name': 'User',
      'text': 'Следующее значение в свойстве — цвет. Используем цвета rgba() с альфа-каналом, чтобы указывать непрозрачность: это важно для стилизации под реальность, ведь тени в хорошо освещённых местах не чисто чёрные и не слишком плотные. Можете понаблюдать, как тени ведут себя по отношению к источникам света и к поверхностям, на которых лежат. Самые тёмные тени падают на плоскости, которые ближе всего к объекту, а дальше они размываются. Поэтому тень не должна быть похожа на чёрную обводку.',
      'likesQnt': '25'
    }
  ]
}

export const setUserProfile = (profile) => {
  return {
    type: 'SET-USER-PROFILE',
    profile
  }
}

export const inputUpdatePostActionCreator = (text) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT', 
    newText: text
  }
}

export const addPostActionCreator = () => {
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
        id: 3,
        img: 0,
        time: new Date().toLocaleString('ru-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        name: 'user',
        text: state.newPostText,
        likesQnt: 0
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