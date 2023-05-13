import React from 'react';
import Post from './post/Post';
import classes from './Feed.module.css';

const Feed = (props) => {
  let feed = props.feed.map(post => <Post id={post.id} time={post.time} text={post.text} likesQnt={post.likesQnt} />);
  let newPost = React.createRef();

  let inputUpdate = () => {
    let text = newPost.current.value;
    props.inputUpdate(text);
  }

  let addPost = () => {
    props.addPost();
  }

  return (
    <div className={classes.feed}>
      <div className={classes.input}>
        <div className={classes.avatar}>
          
        </div>
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