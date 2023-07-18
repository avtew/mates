import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Contact.module.css';
import AvatarSmall from './../../../common/avatar/AvatarSmall';

const Contact = (props) => {
  let path = `/dialogs/${props.id}`;
  return (
    <NavLink to={path}>
      <div className={classes.contact}>
        <AvatarSmall />
        <div className={classes.content}>
          <span className={classes.name}>{props.name}</span>
        </div>
      </div>
    </NavLink>
  );
}

export default Contact;