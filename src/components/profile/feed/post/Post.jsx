import React from 'react';
import classes from './Post.module.css';
import AvatarSmall from '../../../common/avatar/AvatarSmall';

const Post = (props) => {
  return (
    <div className={classes.post}>
      <AvatarSmall />
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