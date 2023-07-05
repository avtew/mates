import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import classes from './Info.module.css';
import Avatar from '../../common/avatar/Avatar';
import ProfileStatus from '../../common/status/ProfileStatus';
import Status from '../../common/status/Status';

const Info = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div className={classes.info}>
      <Avatar photo={props.profile.photos.large} userId={props.profile.userId} id={props.id} updateAvatar={props.updateAvatar} />
      <div className={classes.container}>
        <span className={classes.name}>{props.profile.fullName}</span>
        {props.id === props.profile.userId
          ? <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
          : <Status status={props.status} updateStatus={props.updateStatus} />}
      </div>
    </div>
  );
}

export default Info;