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
  .catch((error) => console.error(error));
});



app.get('/holidays/weather', (req, res) => {
  res.send('holidays/weather is working!!')
})



app.get('/holidays/gallery', (req, res) => {
  const country = req.query.country;
  console.log('tutaj holidays gallery', country);
  const getCountryData = {
    method: 'GET',
    url: `https://api.unsplash.com/search/photos?query=${country}}`,
    headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_KEY}`,
    }
  }
  axios.request(getCountryData)
  .then((response) => {
    const pictureUrl = response.data.results[0].urls.regular
  // const pictureUrl = response.data.results[0].urls.regular
  // const data = json.results.map((obj: any) => obj.urls.small);
  console.log('tutaj gallery response', response.data.results[0].urls.regular)
  res.json(pictureUrl);
  })
  .catch((error) => console.error(error));
})




app.listen(8080, () => console.log('server is running on port 8080'));
