import React from 'react';
import Message from './message/Message';
import classes from './Chat.module.css';
import AvatarSmall from './../../common/avatar/AvatarSmall';
import { Field, reduxForm } from 'redux-form';

const MessageForm = (props) => {
  return (
    <form className={classes.form} onSubmit={props.handleSubmit}>
      <Field component={'textarea'} name={'newMessageText'} className={classes.textarea} rows='3' />
      <button className={`${classes.button} ${classes.send}`} />
    </form>
  )
}

const MessageReduxForm = reduxForm({form: 'messageForm'})(MessageForm)

const Chat = (props) => {
  let chat = props.chat.map(message => <Message id={message.id} name={props.name} text={message.text} />);

  let createMessage = (values) => {
    props.addMessage(values.newMessageText);
  }

  return (
    <div className={classes.chat}>
      <div className={classes.container}>
        {chat}
      </div>
      <div className={classes.input}>
        <AvatarSmall />
        <div className={classes.content}>
          <MessageReduxForm onSubmit={createMessage} />
        </div>
      </div>
    </div>
  );
}

export default Chat;