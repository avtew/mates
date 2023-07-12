import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { required } from '../../../utils/validators';
import Post from './post/Post';
import { Textarea } from '../../common/forms/textarea/Textarea';
import Preloader from '../../common/preloader/Preloader';
import AvatarSmall from '../../common/avatar/AvatarSmall';
import classes from './Feed.module.css';

const PostForm = (props) => {
  return (
    <form className={classes.form} onSubmit={props.handleSubmit}>
      <Field component={Textarea} validate={required} name={'newPostText'} rows='6' placeholder={"What's up, mate?"} />
    </form>
  )
}

const PostReduxForm = reduxForm(
  { 
    form: 'postForm',
    enableReinitialize: true,
  }
)(PostForm)

const Feed = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  let feed = props.feed.map(post => <Post key={post.id} id={post.id} photo={props.userPhoto} name={props.name} time={post.time} text={post.text} />);

  let createPost = (values, dispatch) => {
    props.addPost(values.newPostText);
    dispatch(reset('postForm'));
  }
  
  return (
    <div className={classes.feed}>
      <div className={classes.input}>
        <AvatarSmall photo={props.userPhoto} />
        <div className={classes.content}>
          <PostReduxForm onSubmit={createPost} />
        </div>
      </div>
      <div className={classes.posts}>
        {feed}
      </div>
    </div>
  );
}

export default Feed;