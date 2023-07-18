import React from "react";
import avatar from '../../../assets/img/avatar.png'
import classes from './AvatarSmall.module.css'

let AvatarSmall = (props) => {
  return (
    <div className={classes.avatar}>
      <img className={classes.img} src={props.photo ? props.photo : avatar} alt='Avatar' />
    </div>
  );
}

export default AvatarSmall;