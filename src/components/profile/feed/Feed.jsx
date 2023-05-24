import React from 'react';
import Post from './post/Post';
import classes from './Feed.module.css';
import avatar from '../../../assets/img/avatar.png'
import Preloader from '../../common/preloader/Preloader';

const Feed = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  let feed = [];
  if (props.id === props.profile.userId) {
    feed = props.feed.map(post => <Post id={post.id} name={props.name} time={post.time} text={post.text} likesQnt={post.likesQnt} photo={post.photo} />);
  }

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
          <img className={classes.img} src={avatar} />
        </div>
        <div className={classes.content}>
          <form className={classes.form}>
            <textarea className={classes.textarea} onChange={inputUpdate} value={props.newPostText} ref={newPost} placeholder="What's up, mate?" />
            <button className={classes.button} type='button' onClick={addPost}>Publish</button>
          </form>
        </div>
      </div>
      <div className={classes.posts}>
        {feed}
      </div>
    </div>
  );
}

export default Feed;