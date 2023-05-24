import React from "react";
import classes from './ProfileStatus.module.css'

let ProfileStatus = (props) => {
  return (
    <div className={classes.status}>
      <p className={classes.text}>{props.status}</p>
      <span className={`${classes.icon} ${classes.pencil}`}></span>
    </div>
  );
}

export default ProfileStatus;