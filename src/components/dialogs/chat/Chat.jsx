import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import Message from './message/Message';
import AvatarSmall from './../../common/avatar/AvatarSmall';
import Preloader from './../../common/preloader/Preloader';
import classes from './Chat.module.css';

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
  if (!props.profile) {
    return <Preloader />
  }

  let chat = props.chat.map(message => <Message key={message.id} id={message.id} name={props.name} text={message.text} />);

  let createMessage = (values, dispatch) => {
    props.addMessage(values.newMessageText);
    dispatch(reset('messageForm'));
  }

  return (
    <div className={classes.chat}>
      <div className={classes.container}>
        {chat}
      </div>
      <div className={classes.input}>
        <AvatarSmall photo={props.profile.photos.small} />
        <div className={classes.content}>
          <MessageReduxForm onSubmit={createMessage} />
        </div>
      </div>
    </div>
  );
}

export default Chat;