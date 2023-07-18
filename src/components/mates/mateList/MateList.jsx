import React from 'react';
import Mate from './mate/Mate';
import classes from './MateList.module.css';


let MateList = (props) => {
  let mates = props.users.map(mate => <Mate key={mate.id} id={mate.id} photo={mate.photos.large} name={mate.name} city={mate.city} status={mate.status} followed={mate.followed} users={props.users} follow={props.follow} unfollow={props.unfollow} />);
  return (
    <div className={classes.users}>
      <div className={classes.container}>
        {props.withPhoto === true
          ? mates.filter(mate => mate.props.photo != null)
          : mates }
      </div>
      {/* <button className={`${classes.button} ${classes.more}`} onClick={() => { props.pageDidChange(props.currentPage + 1) }}>More</button> */}
    </div>
  );
}

export default MateList;