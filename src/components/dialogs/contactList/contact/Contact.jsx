import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Contact.module.css';

const Contact = (props) => {
  let path = `/dialogs/${props.id}`;
  return (
    <NavLink to={path}>
      <div className={classes.contact}>
        <div className={classes.avatar}></div>
        <div className={classes.content}>
          <span className={classes.name}>{props.name}</span>
          <div className={classes.message}>
            <p className={classes.text}>{props.lastMsg}</p>
            <span className={classes.time}>{props.time}</span>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default Contact;