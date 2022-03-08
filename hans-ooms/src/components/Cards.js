import React from 'react';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
        <h1>
            specific information
        </h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <div className='cards__items'>
                  <CardItem 
                  src='/logo192.png'
                  text="some sample text"
                  label="Header"
                  path="/contact"
                  
                  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards