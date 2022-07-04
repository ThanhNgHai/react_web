import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Playlists</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/korea.jpg'
              text='Korea'
              label='Hot'
              path='/korea'
            />
            <CardItem
              src='images/us-uk.jpg'
              text='US - UK'
              label='Hot'
              path='/us-uk'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/china.jpg'
              text='China'
              label='Hot'
              path='/china'
            />
            <CardItem
              src='images/japan.png'
              text='Japan'
              label='Hot'
              path='/japan'
            />
            <CardItem
              src='images/thailand.jpg'
              text='Thailand'
              label='Hot'
              path='/thailand'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
