import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserAuth } from './redux/authReduser';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/login/Login';
import Aside from './components/aside/Aside';
import Dialogs from './components/dialogs/Dialogs';
import Users from './components/users/Users';
import ProfileContainer from './components/profile/ProfileContainer';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.getUserAuth();
    this.setState();
  }

  render() {
    return (
      <div className='wrapper'>
        <HeaderContainer />
        <Aside />
        <main className='main'>
          <Routes>
            <Route path='/user' element={<Navigate to={`/user/${this.props.userId}`} />} />
            <Route path='/user/:userId' element={<ProfileContainer />} />
            <Route path='/login/' element={<Login />} />
            <Route path='/dialogs/*' element={<Dialogs />} />
            <Route path='/users/*' element={<Users />} />
          </Routes>
        </main>
        <div className='ghost'></div>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    userId: state.auth.userId
  }
}

export default connect(mapStateToProps, { getUserAuth }) (App);
