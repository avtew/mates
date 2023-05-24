import React from "react";
import classes from './Status.module.css'

let Status = (props) => {
  return (
    <div className={classes.status}>
      <p className={classes.text}>{props.status}</p>
    </div>
  );
}

export default Status;