import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Gallery from './Gallery/index'
import Weather from './Weather/index'
import './Holidays.css';
const countryList = require('country-list');

const Holidays = () => {
  // Get random country after clicking
  const [country, setCountry] = useState('');
  const [btnTitle, setBtnTitle] = useState('TAKE ME THERE!');

  const randomIntNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  const generateRandomCountry = async () => {
    if (btnTitle === 'TAKE ME THERE!') {
      setBtnTitle('TRY AGAIN!')
    }


    const randomInt = randomIntNumber(1, 150)
    const randomCountry = countryList.getData()[randomInt].name;
    setCountry(randomCountry);
  }

  // pass the name of country to swapiAPI

  const getRandomWords = () => {
    console.log('fetch called!')
    const options = {
        method: 'GET',
        url: 'http://localhost:8080/holidays',
        params: {country: country},
    }

    axios.request(options).then((response) => {
        // console.log(response.data)
        // setWords(response.data)

    }).catch((error) => {
        console.error(error)
    })
  }

  useEffect(() => {
    getRandomWords()
  }, [generateRandomCountry]);

  //POST request with body equal on data in JSON format


  // pass the name of country to params of geolocation

  // read lat and lon and pass it to weather app



  return (
    <main className='holidays'>
      <header className='header'>
        <h1 className='header__title'>Are you ready?</h1>
        <button className='header__button' onClick={generateRandomCountry}>{btnTitle}</button>
        <h2 className='header__destination'>Your holidays destination is..</h2>
        <p className='header__country'>{country}</p>
      </header>
      <Weather />
      <Gallery country={country}/>
    </main>
  )
}

export default Holidays;