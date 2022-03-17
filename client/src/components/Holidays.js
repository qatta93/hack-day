import React from 'react';
import Gallery from './Gallery/index'
import Weather from './Weather/index'
import './Holidays.css';

const Holidays = () => {
  return (
    <main className='holidays'>
      <header className='header'>
        <h1 className='header__title'>Are you ready?</h1>
        <button className='header__button'>TAKE ME THERE!</button>
        <h2 className='header__destination'>Your holidays destination is..</h2>
        <p className='header__country'>country name</p>
      </header>
      <Weather />
      <Gallery />
    </main>
  )
}

export default Holidays;