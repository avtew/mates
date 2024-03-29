import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/authReduser';
import Header from './Header';

class HeaderContainer extends React.Component {
  render() {
    return (
      <Header {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  userId: state.auth.userId,
  photo: state.auth.userPhoto,
})

export default connect(mapStateToProps, { logout })(HeaderContainer);