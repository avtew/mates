import React from 'react';
import { connect } from 'react-redux';
import { getUserAuth } from '../../redux/authReduser';
import Header from './Header';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getUserAuth();
    this.setState();
  }

  render() {
    return (
      <Header {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})

export default connect(mapStateToProps, { getUserAuth })(HeaderContainer);