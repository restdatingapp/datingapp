import React, { Component }from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Login } from './Components/Login/Login';
import { Signup } from './Components/Signup/Signup';

import "./App.css";
import { Home } from './Components/Home/Home';
import { Dashboard } from './Components/Dashboard/Dashboard';
import { Cards } from './Components/Cards/cards';
import ImgUpload from './Components/ImgUpload/ImgUpload';

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path = 'cards' element = {<Cards />}></Route>
          <Route path = 'login' element = {<Login />}></Route>
          <Route path = '/' element = {<Signup />}></Route>
          <Route path = 'home' element = {<Home />}></Route>
          <Route path = 'dashboard' element = {<Dashboard />}></Route>
          <Route path='imgupload' element={<ImgUpload/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
