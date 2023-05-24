import React from 'react';
import { connect } from 'react-redux';
import { getUsers, setCurrentPage, getNewUsers, followUser, unfollowUser,  } from '../../../redux/usersReduser';
import UserList from './UserList';

class UserListContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  pageDidChange = (page) => {
    this.props.setCurrentPage(page);
    this.props.getNewUsers(page, this.props.pageSize);
  }

  render() {
    return (
      <UserList users={this.props.users} userQnt={this.props.userQnt} pageSize={this.props.pageSize} currentPage={this.props.currentPage} pageDidChange={this.pageDidChange} isFetching={this.props.isFetching} follow={this.props.followUser} unfollow={this.props.unfollowUser} withPhoto={this.props.withPhoto} />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.users.users,
    withPhoto: state.users.withPhoto,
    userQnt: state.users.userQnt,
    pageSize: state.users.pageSize,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching
  }
}

let mapDispatchToProps = {
  getUsers,
  getNewUsers,
  setCurrentPage,
  followUser,
  unfollowUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
