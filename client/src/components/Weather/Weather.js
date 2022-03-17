import React from 'react';
import './Weather.css';

const Weather = ({ weather }) => {
  return (
    <section className='weather'>
      <h2 className='weather__title'>Current Weather:</h2>
      <p>min. Temp: <span>{weather.minTemp} °C</span></p>
      <p>max. Temp: <span>{weather.maxTemp} °C</span></p>
      <p>humidity: <span>{weather.humidity} %</span></p>
      <p>sky: <span>{weather.sky}</span></p>
  </section>
  )
}

export default Weather;