import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.post}>
      <div className={classes.avatar}></div>
      <div className={classes.content}>
        <span className={classes.name}>{props.name}</span>
        <span className={classes.time}>{props.time}</span>
        <p className={classes.text}>{props.text}</p>
        <div className={classes.likes}>
          <span className={`${classes.icon} ${classes.heart}`}></span> 
          <span className={classes.likesQnt}>{props.likesQnt}</span>
        </div>
      </div>
    </div>
  );
}

export default Post;