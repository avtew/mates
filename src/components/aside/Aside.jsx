import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Aside.module.css';

const MenuLink = ({ path, className, title }) => {
  return (
    <li className={classes.item}>
      <div className={classes.container}>
        <NavLink className={classes.link} to={path}>
          <span className={`${'icon'} ${classes.icon} ${className}`}></span>
          <span>{title}</span>
        </NavLink>
      </div>
    </li>
  )
}

const Aside = (props) => {
  return (
    props.isAuth &&
    <aside className={classes.aside}>
      <nav className={classes.nav}>
        <ul className={classes.menu}>
          <MenuLink path={'/user'} className={'profile'} title={'Profile'} />
          <MenuLink path={'/dialogs'} className={'dialogs'} title={'Messages'} />
          <MenuLink path={'/users'} className={'search'} title={'Search'} />
        </ul>
      </nav>
    </aside >
  )
}

export default Aside;