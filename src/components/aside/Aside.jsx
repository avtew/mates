import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Aside.module.css';

const Aside = (props) => {
  return (
    <aside className={classes.aside}>
      <nav className={classes.nav}>
        <ul className={classes.menu}>
          <li className={classes.item}>
            <div className={classes.container}>
              <NavLink className={classes.link} to='/feed'>
                <span className={`${classes.icon} ${classes.feed}`}></span>
                <span>Лента</span>
              </NavLink>
            </div>
          </li>
          <li className={classes.item}>
            <div className={classes.container}>
              <NavLink className={classes.link} to='/dialogs'>
                <span className={`${classes.icon} ${classes.dialogs}`}></span>
                <span>Сообщения</span>
              </NavLink>
            </div>
          </li>
          <li className={classes.item}>
            <div className={classes.container}>
              <NavLink className={classes.link} to='/friends'>
                <span className={`${classes.icon} ${classes.friends}`}></span>
                <span>Друзья</span>
              </NavLink>
            </div>
          </li>
          <br></br>
          <li className={classes.item}>
            <div className={classes.container}>
              <NavLink className={classes.link} to='/profile'>
                <span className={`${classes.icon} ${classes.profile}`}></span>
                <span>Профайл</span>
              </NavLink>
            </div>
          </li>
          <li className={classes.item}>
            <div className={classes.container}>
              <NavLink className={classes.link} to='/photos'>
                <span className={`${classes.icon} ${classes.photos}`}></span>
                <span>Фотографии</span>
              </NavLink>
            </div>
          </li>
          <li className={classes.item}>
            <div className={classes.container}>
              <NavLink className={classes.link} to='/music'>
                <span className={`${classes.icon} ${classes.music}`}></span>
                <span>Музыка</span>
              </NavLink>
            </div>
          </li>
          <br></br>
          <li className={classes.item}>
            <div className={classes.container}>
              <NavLink className={classes.link} to='/settings'>
                <span className={`${classes.icon} ${classes.settings}`}></span>
                <span>Настройки</span>
              </NavLink>
            </div>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Aside;