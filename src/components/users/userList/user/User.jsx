import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './User.module.css';
import Avatar from '../../../common/avatar/Avatar';
import Status from './../../../common/status/Status';

const User = (props) => {
  return (
    <div className={classes.user}>
      <div className={classes.container}>
        <NavLink to={'/user/' + props.id}>
          <Avatar photo={props.photo} />
        </NavLink>
        <div className={classes.info}>
          <NavLink to={'/user/' + props.id}>
            <span className={classes.name}>{props.name}</span>
          </NavLink>
          {props.status != null
            ? <Status status={props.status} />
            : <div></div>
          }
        </div>
      </div>
      {props.followed
        ? <button className={`${classes.button} ${classes.sub}`} onClick={() => { props.unfollow(props.id) }}>Unfollow</button>
        : <button className={`${classes.button} ${classes.unsub}`} onClick={() => { props.follow(props.id) }}>Follow</button>}
    </div>
  );
}

export default User;