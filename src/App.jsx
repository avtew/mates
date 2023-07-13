import React, { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { initializeAuth, initializeProfile } from './redux/appReduser';
import { setCurrentPage } from './redux/usersReduser';
import { getUserPhoto } from './redux/authReduser';
import HeaderContainer from './components/header/HeaderContainer';
import Aside from './components/aside/Aside';
import ProfileContainer from './components/profile/ProfileContainer';
import PreloaderLogo from './components/common/preloader/PreloaderLogo';
import Preloader from './components/common/preloader/Preloader';
import './App.css';
const Login = lazy(() => import('./components/login/Login'));
const Mates = lazy(() => import('./components/mates/Mates'));
const Dialogs = lazy(() => import('./components/dialogs/Dialogs'));
const Users = lazy(() => import('./components/users/Users'));
// import Login from './components/login/Login';
// import Dialogs from './components/dialogs/Dialogs';
// import Users from './components/users/Users';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props.initializeAuth();
  }

  componentDidUpdate() {
    if (this.props.isAuth) {
      this.props.initializeProfile(this.props.userId);
    }
  }

  render() {
    if (!this.props.isInitialized && this.props.isAuth) {
      return <PreloaderLogo />
    }

    return (
      <div className='wrapper'>
        <HeaderContainer />
        <Aside isAuth={this.props.isAuth} setCurrentPage={this.props.setCurrentPage} />
        <main className='main'>
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path='/' element={this.props.isAuth ? <Navigate to={`/user/${this.props.userId}`} /> : <Navigate to={'/login'} />} />
              <Route path='/user' element={<Navigate to={`/user/${this.props.userId}`} />} />
              <Route path='/user/:userId' element={<ProfileContainer />} />
              <Route path='/login/*' element={<Login />} />
              <Route path='/mates/*' element={<Mates />} />
              <Route path='/dialogs/*' element={<Dialogs />} />
              <Route path='/users/*' element={<Users />} />
            </Routes>
          </Suspense>
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

export default connect(mapStateToProps, { initializeAuth, initializeProfile, setCurrentPage, getUserPhoto })(App);
