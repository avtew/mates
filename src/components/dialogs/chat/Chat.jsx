import React from 'react';
import Message from './message/Message';
import classes from './Chat.module.css';
import { addMessageActionCreator, inputUpdateMessageActionCreator } from '../../../redux/dialogsReduser';

const Chat = (props) => {
  let chat = props.chat.map(message => <Message id={message.id} name={message.name} time={message.time} text={message.text} likesQnt={message.likesQnt} />);
  let newMessage = React.createRef();

  let inputUpdate = () => {
    let text = newMessage.current.value;
    props.dispatch(inputUpdateMessageActionCreator(text));
  }

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  }

  return (
    <div className={classes.messages}>
      <div className={classes.container}>
        {chat}
      </div>
      <div className={classes.input}>
        <div className={classes.avatar}></div>
        <div className={classes.content}>
          <form className={classes.form}>
            <textarea className={classes.textarea} onChange={inputUpdate} value={props.newMessageText} ref={newMessage} />
          </form>
          <div className={classes.container}>
            <button className={classes.button} type='button' onClick={addMessage}>Опубликовать</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;