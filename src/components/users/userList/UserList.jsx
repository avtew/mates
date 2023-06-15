import React from 'react';
import User from './user/User';
import Preloader from '../../common/preloader/Preloader';
import classes from './UserList.module.css';


let UserList = (props) => {
  let users = props.users.map(user => <User id={user.id} photo={user.photos.large} name={user.name} city={user.city} status={user.status} followed={user.followed} follow={props.follow} unfollow={props.unfollow} withPhoto={props.withPhoto} />);
  return (
    <div className={classes.users}>
      <div className={classes.container}>
        {props.withPhoto === true
          ? users.filter(user => user.props.photo != null)
          : users }
      </div>
      {props.isFetching ? <Preloader /> : null}
      <button className={`${classes.button} ${classes.more}`} onClick={() => { props.pageDidChange(props.currentPage + 1) }}>More</button>
    </div>
  );
}

export default UserList;