import React from 'react';
import { useParams } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/authRedirect';
import { getUserProfile, getStatus, updateStatus, addPost, updateAvatar, updateProfile } from '../../redux/profileReduser';
import Profile from './Profile';

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />
  }
}

class ProfileContainer extends React.Component {
  render() {
    return (
      <Profile {...this.props} />
    );
  }

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = this.props.id
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    id: state.auth.userId,
    name: state.auth.login,
    profile: state.profile,
    status: state.profile.status,
    userPhoto: state.auth.userPhoto,
  }
}

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, addPost, updateAvatar, updateProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);