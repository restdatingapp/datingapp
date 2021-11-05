import React from 'react';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import { Login } from './Components/Login/Login';

import "./App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = '/' element = {<Login />}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
