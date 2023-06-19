import React from "react";
import classes from './ProfileStatus.module.css'

let Status = (props) => {
  return (
    props.status
      ? <div className={classes.status}>
          <p className={classes.text}>{props.status}</p>
        </div>
      : <></>
  );
}

export default Status;