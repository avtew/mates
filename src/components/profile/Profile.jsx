import React from 'react';
import Cover from './cover/Cover';
import Info from './info/Info';
import Feed from './feed/Feed';
import classes from './Profile.module.css';

const Profile = (props) => {
  return (
    <div className={classes.profile}>
      <Cover />
      <Info profile={props.profile.profile} />
      <Feed profile={props.profile.profile} feed={props.profile.feed} />
    </div>
  );
}

export default Profile;