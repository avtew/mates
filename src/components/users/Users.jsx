import React from 'react';
import FiltersContainer from './filters/FiltersContainer';
import UserListContainer from './userList/UserListContainer';
import classes from './Users.module.css';

const Users = (props) => {
  return (
    <div className={classes.users}>
      <FiltersContainer />
      <UserListContainer />
    </div>
  );
}

export default Users;