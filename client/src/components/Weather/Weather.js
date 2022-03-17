import React from 'react';

const Weather = ({ weather }) => {
  return (
    <section className='weather'>
      <h2>Current Weather:</h2>
      <p>min.Temp: {weather.minTemp}</p>
      <p>max.Temp: {weather.maxTemp}</p>
      <p>humidity: {weather.humidity}</p>
      <p>sky: {weather.sky}</p>
  </section>
  )
}

export default Weather;