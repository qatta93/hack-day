import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Gallery from './Gallery/index'
import Weather from './Weather/index'
import './Holidays.css';
import heart from '../img/heart.png'
const countryList = require('country-list');

const Holidays = () => {
  const [country, setCountry] = useState('');
  const [gallery, setGallery] = useState([]);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [weather, setWeather] = useState({});
  const [btnTitle, setBtnTitle] = useState('TAKE ME THERE !');

  const randomIntNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  const generateRandomCountry = (e) => {
    e.preventDefault()
    if (btnTitle === 'TAKE ME THERE !') {
      setBtnTitle('TRY AGAIN !')
    }
    const randomInt = randomIntNumber(1, 150)
    const randomCountry = countryList.getData()[randomInt].name;
    setCountry(randomCountry);
  }

  const getGallery = () => {
    const options = {
        method: 'GET',
        url: 'http://localhost:8080/holidays/gallery',
        params: {country: country},
    }
    axios.request(options)
    .then((response) => {
      const link = response.data;
      setGallery(link);
    })
    .catch((error) => {console.error(error)})
  }

  const getCountryData = () => {
    const options = {
        method: 'GET',
        url: 'http://localhost:8080/holidays',
        params: {country: country},
    }
    axios.request(options)
    .then((response) => {
      const {lon} = response.data
      const {lat} = response.data
      setLongitude(lon);
      setLatitude(lat);
    }
      )
    .catch((error) => {console.error(error)})
  }

  const getCountryWeather = () => {
    const options = {
        method: 'GET',
        url: 'http://localhost:8080/holidays/weather',
        params: {lon: longitude, lat: latitude},
    }
    axios.request(options)
    .then((response) => {
      const countryWeather = {
        maxTemp: parseInt(response.data.main.temp_max - 273.15),
        minTemp: parseInt(response.data.main.temp_min -273.15),
        humidity: response.data.main.humidity,
        sky: response.data.weather[0].main,
      }
      setWeather(countryWeather);
    })
    .catch((error) => {console.error(error)})
  }



  useEffect(() => {
    getCountryData()
    getGallery()
    getCountryWeather()
  },[country]);

  return (
    <main className='holidays'>
      <header className='header'>
        {country === '' ? <h1 className='header__title'>Are you ready?</h1> : null}
        {country !== '' ? 
          <>
          <img className='header__heart' src={heart} alt='heart' title='add me to FAV!'/>
          <h2 className='header__destination'>Your holidays destination is:</h2>
          <p className='header__country'>{country}</p>
          <Weather weather={weather}/>
          </>
        : null}
        <button className='header__button' onClick={generateRandomCountry}>{btnTitle}</button>
      </header>
      <Gallery gallery={gallery} country={country} setGallery={setGallery}/>
    </main>
  )
}

export default Holidays;