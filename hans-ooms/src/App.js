import React from 'react';
import './App.css';
import Contact from './components/pages/Contact'
import Music from './components/pages/Music'
import TwitterProject from './components/pages/TwitterProject'
import Navbar from './components/Navbar.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes> 
          <Route exact path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/music' element={<Music />} />
          <Route path='/twitter-project' element={<TwitterProject />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default App;