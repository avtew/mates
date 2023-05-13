import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserProfile } from '../../redux/profileReduser';
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
    this.props.getUserProfile(userId);
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profile,
    isAuth: state.auth.isAuth
  }
}

let ProfileContainerUrl = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getUserProfile })(ProfileContainerUrl);