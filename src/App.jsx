import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/login/Login';
import Aside from './components/aside/Aside';
import Dialogs from './components/dialogs/Dialogs';
import Users from './components/users/Users';
import ProfileContainer from './components/profile/ProfileContainer';
import './App.css';

const App = (props) => {
  return (
    <div className='wrapper'>
      <HeaderContainer />
      <Aside />
      <main className='main'>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/dialogs/*' element={<Dialogs />} />
          <Route path='/users/*' element={<Users />} />
          <Route path='/profile/:userId' element={<ProfileContainer />} />
        </Routes>
      </main>
      <div className='ghost'></div>
    </div>
  );
}

export default App;
