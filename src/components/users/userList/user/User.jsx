import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './User.module.css';
import avatar from '../../../../assets/img/avatar.png'

const User = (props) => {
  return (
    <div className={classes.user}>
      <div className={classes.container}>
        <NavLink to={'/user/' + props.id}>
          <div className={classes.avatar}>
            <img className={classes.img} src={props.photo.large != null ? props.photo.large : avatar}></img>
          </div>
        </NavLink>
        <div className={classes.info}>
          <NavLink to={'/user/' + props.id}>
            <span className={classes.name}>{props.name}</span>
          </NavLink>
          {/* <span className={classes.city}>{props.city}</span> */}
          {props.status != null
            ? <div className={classes.content}>
              {<p className={classes.status}>{props.status}</p>}
            </div>
            : <div></div>
          }
        </div>
      </div>
      <div className={classes.buttons}>
        <div className={classes.link} to='/feed'>
          {props.followed
            ? <span className={`${classes.icon} ${classes.sub}`} onClick={ () => { props.unfollow(props.id) }}></span>
            : <span className={`${classes.icon} ${classes.unsub}`} onClick={ () => { props.follow(props.id) }}></span>}
        </div>
        <NavLink className={classes.link} to='/dialogs'>
          <span className={`${classes.icon} ${classes.message}`}></span>
        </NavLink>
      </div>
    </div>
  );
}

export default User;