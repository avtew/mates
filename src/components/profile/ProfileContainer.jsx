import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserProfile, inputUpdate, addPost } from '../../redux/profileReduser';
import getUserAuth from '../../redux/authReduser'
import Profile from './Profile';
// import { withAuthRedirect } from '../hoc/authRedirect';
import { compose } from 'redux';

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
    this.props.getUserProfile(userId);
  }
}

let mapStateToProps = (state) => {
  return {
    id: state.auth.userId,
    name: state.auth.login,
    profile: state.profile,
  }
}

export default compose(
  connect(mapStateToProps, { getUserAuth, getUserProfile, inputUpdate, addPost }),
  withRouter,
  // withAuthRedirect
)(ProfileContainer);