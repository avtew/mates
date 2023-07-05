import React from "react";
import classes from './Avatar.module.css'
import avatar from '../../../assets/img/avatar.png'

let Avatar = (props) => {
  const avatarDidChange = (e) => {
    if(e.target.files.length) {
      props.updateAvatar(e.target.files[0]);
    }
  }

  return (
    <div className={classes.avatar}>
      <img className={classes.img} src={props.photo || avatar} alt='Avatar' />
      {props.id === props.userId
        ? <div className={classes.back}>
          <label className={`${classes.icon} ${classes.upload}`}>
            <input type={"file"} onChange={avatarDidChange} />
          </label>
        </div>
        : <></>}
    </div>
  );
}

export default Avatar;