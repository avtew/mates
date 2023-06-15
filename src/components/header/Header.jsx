import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

class Header extends React.Component {
  render() {
    return (
      <header className={classes.header}>
        <NavLink to={'/'}>
          <img className={classes.logo} src={require('../../assets/icons/logo.png')} alt='logo' />
        </NavLink>
        {this.props.isAuth
          ? <div className={classes.buttons}>
              <NavLink to={'/user'} className={classes.profile}><span className={`${classes.icon} ${classes.user}`}></span> <span className={classes.link}>{this.props.login}</span></NavLink>
              <span onClick={this.props.logout} className={`${classes.icon} ${classes.logout}`}></span>
            </div>
          : <NavLink to={'/login'} className={classes.link}>Login</NavLink>}
      </header>
    );
  }
}

export default Header;