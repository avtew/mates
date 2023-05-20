import React from 'react';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img className={classes.logo} src={require('../../assets/icons/logo.png')} alt='logo' />
      <div className={classes.icons}>
        <div className={classes.avatar}></div>
      </div>
    </header>
  );
}

export default Header;