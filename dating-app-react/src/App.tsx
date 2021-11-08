import React, { Component }from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Login } from './Components/Login/Login';
import { Signup } from './Components/Signup/Signup';

import "./App.css";
import { Home } from './Components/Home/Home';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path = 'login' element = {<Login />}></Route>
          <Route path = 'signup' element = {<Signup />}></Route>
          <Route path = 'home' element = {<Home />}></Route>
        </Routes>
    </div>
  );
}

export default App;
