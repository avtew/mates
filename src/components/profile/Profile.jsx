import React from 'react';
import Cover from './cover/Cover';
import Info from './info/Info';
import Details from './details/Details'
// import MateList from './mateList/MateList';
import Feed from './feed/Feed';
import classes from './Profile.module.css';

const Profile = (props) => {
  return (
    <div className={classes.profile}>
      <Cover />
      <Info id={props.id} profile={props.profile.profile} status={props.status} updateStatus={props.updateStatus} updateAvatar={props.updateAvatar} />
      <Details id={props.id} profile={props.profile.profile} updateProfile={props.updateProfile} />
      {/* <MateList id={props.id} profile={props.profile.profile} /> */}
      <Feed id={props.id} profile={props.profile.profile} feed={props.profile.feed} newPostText={props.profile.newPostText} addPost={props.addPost} inputUpdate={props.inputUpdate} name={props.name} />
    </div>
  );
}

export default Profile;