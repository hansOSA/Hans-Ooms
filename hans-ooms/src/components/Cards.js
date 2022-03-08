import React from 'react';
import CardItem from './CardItem';
import './Card.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>
            Recent Projects
        </h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                  <CardItem 
                    src='/logo192.png'
                    text="some sample text"
                    label="Header"
                    path="/contact"
                  />

                  <CardItem 
                    src='/logo192.png'
                    text="More Text"
                    label="Header2"
                    path="/contact"
                  />
                </ul>
                <ul className='cards__items'>
                  <CardItem 
                      src='/logo192.png'
                      text="Big Money"
                      label="Header3"
                      path="/contact"
                    />

                    <CardItem 
                      src='/logo192.png'
                      text="idk what"
                      label="Header4"
                      path="/contact"
                    />
                    <CardItem 
                      src='/logo192.png'
                      text="projects and ideas"
                      label="Header5"
                      path="/contact"
                    />

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards