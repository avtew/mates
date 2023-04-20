import profileReduser from './profileReduser';
import dialogsReduser from './dialogsReduser';

let store = {
  _state: {
    dialogs: {
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
    },
    profile: {
      cover: 0,
      info: 0,
      newPostText: '',
      feed: [
        {
          'id': '2',
          'img': '',
          'time': '15:00',
          'name': 'Антон Ишкин',
          'text': 'Свойство box-shadow позволяет добавить тень вокруг элемента на веб-странице. Тень подсказывает пользователю, является ли элемент — кнопка, картинка — интерактивным. Благодаря теням, вне экранов гаджетов мы получаем представление о размере и глубине объекта, и свойство box-shadow добавляет реализм в оформление сайта.',
          'likesQnt': '15'
        },
        {
          'id': '1',
          'img': '',
          'time': '16:00',
          'name': 'Антон Ишкин',
          'text': 'Следующее значение в свойстве — цвет. Используем цвета rgba() с альфа-каналом, чтобы указывать непрозрачность: это важно для стилизации под реальность, ведь тени в хорошо освещённых местах не чисто чёрные и не слишком плотные. Можете понаблюдать, как тени ведут себя по отношению к источникам света и к поверхностям, на которых лежат. Самые тёмные тени падают на плоскости, которые ближе всего к объекту, а дальше они размываются. Поэтому тень не должна быть похожа на чёрную обводку.',
          'likesQnt': '25'
        }
      ]
    }
  },
  _callSubscriber() {
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profile = profileReduser(this._state.profile, action);
    this._state.dialogs = dialogsReduser(this._state.dialogs, action);
    this._callSubscriber(this._state);
  }
}

export default store;