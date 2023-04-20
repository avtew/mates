import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Aside from './components/aside/Aside';
import Dialogs from './components/dialogs/Dialogs';
import Profile from './components/profile/Profile';
import './App.css';

const App = (props) => {
  return (
    <div className='wrapper'>
      <Header />
      <Aside />
      <main className='main'>
        <Routes>
          <Route path='/dialogs/*' element={<Dialogs dialogsState={props.state.dialogs} dispatch={props.dispatch}/>} />
          <Route path='/profile/*' element={<Profile profileState={props.state.profile} dispatch={props.dispatch} />} />
        </Routes>
      </main>
      <div className='ghost'></div>
    </div>
  );
}

export default App;
