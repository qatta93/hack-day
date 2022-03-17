const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();


const app = express();
app.use(cors());

app.get('/', async (req, res) => {
  res.send('im working!')
});

app.get('/holidays', async (req, res) => {
  const country = req.query.country;
  console.log('tutaj country', country);
  const options = {
    method: 'GET',
    url: `https://api.openweathermap.org/geo/1.0/direct?q=${country}&limit=5&appid=${process.env.GEO_KEY}`,
    // params: {country: 'poland'},
    headers: {
        'x-rapidapi-host': 'https://api.openweathermap.org/geo/1.0/',
        'x-rapidapi-key': process.env.GEO_KEY
    }
}

await axios.request(options).then((response) => {
  const countryData = response.data[0]
  const countryName = response.data[0].name;
  const lat = countryData.lat;
  const lon = countryData.lon;
  console.log(countryName, lat, lon);
  console.log(response.data[0])
    res.json(response.data)

}).catch((error) => {
    console.error(error)
})
});

app.listen(8080, () => console.log('server is running on port 8080'));
