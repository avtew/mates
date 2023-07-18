import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Mate.module.css';
import Avatar from '../../../common/avatar/Avatar';
import Status from './../../../common/status/Status';

const Mate = (props) => {
  return (
    <div className={classes.user}>
      <div className={classes.container}>
        <NavLink to={'/user/' + props.id}>
          <Avatar photo={props.photo} id={props.id} />
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
      <button className={`${classes.button} ${classes.unsub}`} onClick={() => { props.unfollow(props.id) }}></button>
    </div>
  );
}

export default Mate;