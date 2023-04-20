import React from 'react';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img className={classes.logo} src={require('../../icons/logo.png')} alt='logo' />
      <div className={classes.searchbox}>
        <input className={classes.input} type='search' placeholder='Поиск...'></input>
        <span className={`${classes.icon} ${classes.search}`}></span>
      </div>
      <div className={classes.icons}>
        <span className={`${classes.icon} ${classes.alarm}`}></span>
        <span className={`${classes.icon} ${classes.messages}`}></span>
        <span className={`${classes.icon} ${classes.profile}`}></span>
      </div>
    </header>
  );
}

export default Header;