import React, { Component }from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Login } from './Components/Login/Login';
import { Signup } from './Components/Signup/Signup';

import "./App.css";
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path = 'login' element = {<Login />}></Route>
          <Route path = 'signup' element = {<Signup />}></Route>
        </Routes>
    </div>
  );
}

export default App;
