import React from 'react';
import classes from './Post.module.css';
import avatar from '../../../../assets/img/avatar.png'

const Post = (props) => {
  return (
    <div className={classes.post}>
      <div className={classes.avatar}>
        <img className={classes.img} src={avatar} />
      </div>
      <div className={classes.content}>
        <div className={classes.container}>
          <span className={classes.name}>{props.name}</span>
          <span className={classes.time}>{props.time}</span>
          <p className={classes.text}>{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;