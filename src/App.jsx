import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { initializeAuth, initializeProfile } from './redux/appReduser';
import { setCurrentPage } from './redux/usersReduser';
import HeaderContainer from './components/header/HeaderContainer';
import Aside from './components/aside/Aside';
import Footer from './components/footer/Footer';
import ProfileContainer from './components/profile/ProfileContainer';
import PreloaderLogo from './components/common/preloader/PreloaderLogo';
import Preloader from './components/common/preloader/Preloader';
import './App.css';
const Login = lazy(() => import('./components/login/Login'));
const Mates = lazy(() => import('./components/mates/Mates'));
const Dialogs = lazy(() => import('./components/dialogs/Dialogs'));
const Users = lazy(() => import('./components/users/Users'));

const App = (props) => {

  useEffect( () => {
    props.initializeAuth();
    props.initializeProfile(props.userId);
  })

  if (!props.isInitialized && props.isAuth) {
    return <PreloaderLogo />
  }

  return (
    <div className='wrapper'>
      <HeaderContainer />
      <Aside isAuth={props.isAuth} setCurrentPage={setCurrentPage} />
      <main className='main'>
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path='/' element={props.isAuth ? <Navigate to={`/user/${props.userId}`} /> : <Navigate to={'/login'} />} />
            <Route path='/user' element={<Navigate to={`/user/${props.userId}`} />} />
            <Route path='/user/:userId' element={<ProfileContainer />} />
            <Route path='/login/*' element={<Login />} />
            <Route path='/mates/*' element={<Mates />} />
            <Route path='/dialogs/*' element={<Dialogs />} />
            <Route path='/users/*' element={<Users />} />
          </Routes>
        </Suspense>
      </main>
      <div className='friends'></div>
      <Footer />
    </div>
  )
}

let mapStateToProps = (state) => {
  return {
    isInitialized: state.app.isInitialized,
    isAuth: state.auth.isAuth,
    userId: state.auth.userId
  }
}

export default connect(mapStateToProps, { initializeAuth, initializeProfile, setCurrentPage })(App);
