import React from 'react';
import classes from './Message.module.css';

const Message = (props) => {
  return (
    <div className={classes.message}>
      <div className={classes.avatar}></div>
      <div className={classes.content}>
        <span className={classes.name}>{props.name}</span>
        <p className={classes.text}>{props.text}</p>
      </div>
    </div>
  );
}

export default Message;