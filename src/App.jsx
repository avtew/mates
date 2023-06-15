import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReduser';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/login/Login';
import Aside from './components/aside/Aside';
import ProfileContainer from './components/profile/ProfileContainer';
import Dialogs from './components/dialogs/Dialogs';
import Users from './components/users/Users';
import './App.css';
import PreloaderLogo from './components/common/preloader/PreloaderLogo';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if(!this.props.isInitialized) {
      return <PreloaderLogo />
    }

    return (
      <div className='wrapper'>
        <HeaderContainer />
        <Aside isAuth={this.props.isAuth} />
        <main className='main'>
          <Routes>
            <Route path='/' element={this.props.isAuth ? <Navigate to={`/user/${this.props.userId}`} /> : <Navigate to={'/login'} />} />
            <Route path='/user' element={<Navigate to={`/user/${this.props.userId}`} />} />
            <Route path='/user/:userId' element={<ProfileContainer />} />
            <Route path='/login/*' element={<Login />} />
            <Route path='/dialogs/*' element={<Dialogs />} />
            <Route path='/users/*' element={<Users />} />
          </Routes>
        </main>
        <div className='friends'></div>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    isInitialized: state.app.isInitialized,
    isAuth: state.auth.isAuth,
    userId: state.auth.userId
  }
}

export default connect(mapStateToProps, { initializeApp })(App);
