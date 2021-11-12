import React, { Component }from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Login } from './Components/Login/Login';
import { Signup } from './Components/Signup/Signup';
import { Profile } from './Components/Profile/Profile';

import "./App.css";
import { Home } from './Components/Home/Home';
import { Dashboard } from './Components/Dashboard/Dashboard';
import { Cards } from './Components/Cards/cards';

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path = 'cards' element = {<Cards />}></Route>
          <Route path = 'login' element = {<Login />}></Route>
          <Route path = '/' element = {<Signup />}></Route>
          <Route path = 'home' element = {<Home />}></Route>
          <Route path = 'profile' element = {<Profile />}></Route>
          <Route path = 'dashboard' element = {<Dashboard />}></Route>
        </Routes>
    </div>
  );
}

export default App;
