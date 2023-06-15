import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Aside.module.css';

const Aside = (props) => {
  return (
    props.isAuth
      ? <aside className={classes.aside}>
        <nav className={classes.nav}>
          <ul className={classes.menu}>
            <li className={classes.item}>
              <div className={classes.container}>
                <NavLink className={classes.link} to='/user'>
                  <span className={`${classes.icon} ${classes.profile}`}></span>
                  <span>Profile</span>
                </NavLink>
              </div>
            </li>
            {/* <li className={classes.item}>
              <div className={classes.container}>
                <NavLink className={classes.link} to='/friends'>
                  <span className={`${classes.icon} ${classes.friends}`}></span>
                  <span>Mates</span>
                </NavLink>
              </div>
            </li> */}
            <li className={classes.item}>
              <div className={classes.container}>
                <NavLink className={classes.link} to='/dialogs'>
                  <span className={`${classes.icon} ${classes.dialogs}`}></span>
                  <span>Messages</span>
                </NavLink>
              </div>
            </li>
            <li className={classes.item}>
              <div className={classes.container}>
                <NavLink className={classes.link} to='/users'>
                  <span className={`${classes.icon} ${classes.search}`}></span>
                  <span>Search</span>
                </NavLink>
              </div>
            </li>
          </ul>
        </nav>
      </aside >
    : <></>
  )
}

export default Aside;