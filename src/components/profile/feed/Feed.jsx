import React from 'react';
import classes from './Feed.module.css';
import Post from './post/Post';
import { addPostActionCreator, inputUpdatePostActionCreator } from '../../../redux/profileReduser';

const Feed = (props) => {
  let feed = props.feed.map(post => <Post id={post.id} name={post.name} time={post.time} text={post.text} likesQnt={post.likesQnt} />);
  let newPost = React.createRef();

  let inputUpdate = () => {
    let text = newPost.current.value;
    props.dispatch(inputUpdatePostActionCreator(text));
  }

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  return (
    <div className={classes.feed}>
      <div className={classes.input}>
        <div className={classes.avatar}></div>
        <div className={classes.content}>
          <form className={classes.form}>
            <textarea className={classes.textarea} onChange={inputUpdate} value={props.newPostText} ref={newPost} />
          </form>
          <div className={classes.container}>
            <button className={classes.button} type='button' onClick={addPost} >Опубликовать</button>
          </div>
        </div>
      </div>
      <div className={classes.posts}>
        {feed}
      </div>
    </div>
  );
}

export default Feed;