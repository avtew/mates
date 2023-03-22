import React from 'react';
import './App.css';
import Aside from './components/Aside';
import Header from './components/Header';
import Profile from './components/Profile';

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Aside />
      <Profile />
    </div>
  );
}

export default App;
