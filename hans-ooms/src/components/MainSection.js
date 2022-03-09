import React from 'react';
import './MainSection.css';
import '../App.css';
import Button from './Button.js'

function MainSection() {
  return (
    <div className='main-container'> 
      <h1>Hi!</h1>
      <p>My name is Hans Ooms and I'm a Full Stack Developer currently out of Columbus, OH. I'm a generalist by nature and have most 
        recently worked with Ruby on Rails, Cypress, Terraform, Node, and React (this website!).</p>
      <p>For business opportunities, you can reach me at <a className='special-link' href='mailto:hans@hansooms.com'>hans@hansooms.com</a></p>
    </div>
  )
}

export default MainSection;