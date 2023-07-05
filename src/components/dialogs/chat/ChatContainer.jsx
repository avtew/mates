import { connect } from 'react-redux';
import { addMessage } from '../../../redux/dialogsReduser';
import Chat from './Chat';

let mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    chat: state.dialogs.chat,
    name: state.auth.login,
  }
}

const ChatContainer = connect(mapStateToProps, { addMessage })(Chat);

export default ChatContainer;