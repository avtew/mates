import {connect} from 'react-redux';
import { addMessageActionCreator, inputUpdateMessageActionCreator } from '../../../redux/dialogsReduser';
import Chat from './Chat';

let mapStateToProps = (state) => {
  return {
    chat: state.dialogs.chat,
    newMessageText: state.dialogs.newMessageText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    inputUpdate: (text) => {
      dispatch(inputUpdateMessageActionCreator(text));
    },
    addMessage: () => {
      dispatch(addMessageActionCreator());
    }
  }
}

const ChatContainer = connect (mapStateToProps, mapDispatchToProps) (Chat);

export default ChatContainer;