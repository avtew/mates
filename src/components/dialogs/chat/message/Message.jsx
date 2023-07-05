import React from 'react';
import classes from './Message.module.css';
import AvatarSmall from '../../../common/avatar/AvatarSmall';

const Message = (props) => {
  return (
    <div className={classes.message}>
      <AvatarSmall photo={props.photo} />
      <div className={classes.content}>
        <span className={classes.name}>{props.name}</span>
        <p className={classes.text}>{props.text}</p>
      </div>
    </div>
  );
}

export default Message;