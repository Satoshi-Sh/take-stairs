
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Navigation from './components/navigation/Navigation'
import Homepage from './pages/homepage/Homepage'
import Login from './pages/login/Login'
import Stats from './pages/stats/Stats'
import Monthly from './pages/Monthly/Monthly'
function App() {
  return (
    <div className="App">
      <Router basename='take-stairs'>
       <Navigation />
       <Routes>
       <Route exact path='/' element= {<Homepage />} />
       <Route path='/login' element = {<Login />} />
       <Route path='/stats' element= {<Stats />} />
       <Route path='/monthly' element = {<Monthly />} />
       </Routes>
       </Router>
    </div>
  );
}

export default App;
