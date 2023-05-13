import React from 'react';
import { Navigate } from 'react-router-dom';
import Cover from './cover/Cover';
import Info from './info/Info';
import Feed from './feed/Feed';
import classes from './Profile.module.css';

const Profile = (props) => {
  if (!props.isAuth) {
    return <Navigate to={'/login'} />
  }
  return (
    <div className={classes.profile}>
      <Cover />
      <Info profile={props.profile.profile} />
      <Feed profile={props.profile.profile} feed={props.profile.feed} />
    </div>
  );
}

export default Profile;