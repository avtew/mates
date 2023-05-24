import React from "react";
import classes from './Avatar.module.css'
import avatar from '../../../assets/img/avatar.png'

let Avatar = (props) => {
  return (
    <div className={classes.avatar}>
      <img className={classes.img} src={props.photo ? props.photo : avatar} />
    </div>
  );
}

export default Avatar;