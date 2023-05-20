import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import classes from './Info.module.css';
import avatar from '../../../assets/img/avatar.png'

const Info = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={classes.info}>
      <div className={classes.avatar}>
        <img className={classes.img} src={props.profile.photos.small ? props.profile.photos.small : avatar} />
      </div>
      <div className={classes.container}>
        <span className={classes.name}>{props.profile.fullName}</span>
        <div className={classes.status}>
          <span className={classes.text}>{props.status}</span>
          <span className={`${classes.icon} ${classes.pencil}`}></span>
        </div>
      </div>
    </div>
  );
}

export default Info;