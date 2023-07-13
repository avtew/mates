import React from 'react';
import { connect } from 'react-redux';
import { getMates, setCurrentPage, getNewMates, followUser, unfollowUser, } from '../../../redux/usersReduser';
import { getCurrentPageSelector, getIsFetchingSelector, getPageSizeSelector, getUserQntSelector, getUsersSelector } from '../../../redux/usersSelectors';
import MateList from './MateList';

class MateListContainer extends React.Component {

  componentDidMount() {
    this.props.getMates(1, this.props.pageSize);
  }

  pageDidChange = (page) => {
    this.props.setCurrentPage(page);
    this.props.getNewMates(page, this.props.pageSize);
  }

  render() {
    return (
      <MateList users={this.props.users} userQnt={this.props.userQnt} pageSize={this.props.pageSize} currentPage={this.props.currentPage} pageDidChange={this.pageDidChange} isFetching={this.props.isFetching} follow={this.props.followUser} unfollow={this.props.unfollowUser} withPhoto={this.props.withPhoto} />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    withPhoto: state.users.withPhoto,
    userQnt: getUserQntSelector(state),
    pageSize: getPageSizeSelector(state),
    currentPage: getCurrentPageSelector(state),
    isFetching: getIsFetchingSelector(state)
  }
}

let mapDispatchToProps = {
  getMates,
  getNewMates,
  setCurrentPage,
  followUser,
  unfollowUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(MateListContainer);
