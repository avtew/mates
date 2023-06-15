import React from "react";
import classes from './AvatarSmall.module.css'
import avatar from '../../../assets/img/avatar.png'

let AvatarSmall = (props) => {
  return (
    <div className={classes.avatar}>
      <img className={classes.img} src={props.photo ? props.photo : avatar} alt='Avatar' />
    </div>
  );
}

export default AvatarSmall;