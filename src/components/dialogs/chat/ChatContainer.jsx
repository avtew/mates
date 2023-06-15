import {connect} from 'react-redux';
import { addMessage } from '../../../redux/dialogsReduser';
import Chat from './Chat';

let mapStateToProps = (state) => {
  return {
    chat: state.dialogs.chat,
    name: state.auth.login
  }
}

const ChatContainer = connect (mapStateToProps, {addMessage}) (Chat);

export default ChatContainer;