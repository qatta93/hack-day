const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('im working!')
});

app.get('/holidays', (req, res) => {
  const country = req.query.country;
  const getCountryData = {
    method: 'GET',
    url: `https://api.openweathermap.org/geo/1.0/direct?q=${country}&limit=5&appid=${process.env.GEO_KEY}`,
    headers: {
        'x-rapidapi-host': 'https://api.openweathermap.org/geo/1.0/',
        'x-rapidapi-key': process.env.GEO_KEY
    }
  }

  axios.request(getCountryData)
  .then((response) => {
  const countryData = response.data[0]
  console.log(countryData)
  res.json(countryData)
  })
  .catch((error) => {
    console.error(error)
  })
});

app.get('/holidays/weather', (req, res) => {
  res.send('holidays/weather is working!!')
})

app.get('/holidays/gallery', (req, res) => {
  res.send('holidays/gallery is working!!')
})




app.listen(8080, () => console.log('server is running on port 8080'));
