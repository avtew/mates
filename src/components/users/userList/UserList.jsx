import React from 'react';
import User from './user/User';
import Preloader from '../../common/preloader/Preloader';
import classes from './UserList.module.css';


let UserList = (props) => {

  let users = props.users.map(user => <User id={user.id} photo={user.photos} name={user.name} city={user.city} status={user.status} followed={user.followed} follow={props.follow} unfollow={props.unfollow} />);
  let pageQnt = Math.ceil(props.userQnt / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pageQnt; i++) {
    pages.push(i);
  }
  let slicedPages;
  let curPage = props.currentPage;
  if (curPage - 3 < 0) {
    slicedPages = pages.slice(0, 5);
  } else {
    slicedPages = pages.slice(curPage - 3, curPage + 2);
  }

  return (
    <div className={classes.users}>
      <div className={classes.container}>
        {users}
      </div>
      {props.isFetching ? <Preloader /> : null}
      <div className={classes.pages}>
        {slicedPages.map((p) => {
          return <div className={`${classes.number} ${props.currentPage === p && classes.selected}`} onClick={() => { props.pageDidChange(p) }}>{p}</div>
        })
        }
      </div>
    </div>
  );
}

export default UserList;