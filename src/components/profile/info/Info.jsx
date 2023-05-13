import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import classes from './Info.module.css';

const Info = (props) => {
  if(!props.profile) {
    return <Preloader />
  }
  
  return (
    <div className={classes.info}>
      <img className={classes.avatar} src={props.profile.photos.large} />
      <span className={classes.name}>{props.profile.fullName}</span>
      <span className={classes.social}>{props.profile.contacts.facebook}</span>
      <span className={classes.social}>{props.profile.contacts.vk}</span>
      <span className={classes.social}>{props.profile.contacts.twitter}</span>
      <span className={classes.social}>{props.profile.contacts.github}</span>
    </div>
  );
}

export default Info;