import React from 'react';
import Filters from './filters/Filters';
import UserListContainer from './userList/UserListContainer';
import classes from './Users.module.css';

const Users = (props) => {
  return (
    <div className={classes.users}>
      <Filters />
      <UserListContainer />
    </div>
  );
}

export default Users;