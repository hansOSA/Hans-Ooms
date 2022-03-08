import React from 'react';
import './MainSection.css';
import '../App.css';
import Button from './Button.js'

function MainSection() {
  return (
    <div className='main-container'> 
        <h1>Main Content Section</h1>
        <p>ur mom bitch</p>

        <Button 
            className='btns' 
            buttonStyle='btn--outline' 
            buttonSize='btn--larges'
        >
            GET STARTED
        </Button>
    </div>
  )
}

export default MainSection;