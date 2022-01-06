import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes> 
          <Route path='/' exact /> 
        </Routes>
      </Router>
    );
  }
}

export default App;