import React, { useState } from "react";
import classes from './ProfileStatus.module.css'

const ProfileStatus = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);
  
  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }

  return (
    <div className={classes.status}>
      {editMode
        ? <input className={classes.input} autofocus='true' value={status} onChange={onStatusChange} />
        : <p className={classes.text}>{props.status}</p>
      }
      {editMode
        ? <span className={`${classes.icon} ${classes.save}`} onClick={deactivateEditMode}></span>
        : <span className={`${classes.icon} ${classes.pencil}`} onClick={activateEditMode}></span>
      }
    </div>
  );
}

export default ProfileStatus;