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
  console.log(req.query.country);
  const options = {
    method: 'GET',
    url: `https://api.openweathermap.org/geo/1.0/direct?q=poland&limit=5&appid=${process.env.GEO_KEY}`,
    params: {country: 'poland'},
    headers: {
        'x-rapidapi-host': 'https://api.openweathermap.org/geo/1.0/',
        'x-rapidapi-key': process.env.GEO_KEY
    }
}

axios.request(options).then((response) => {
  // console.log(response.data)
    res.json(response.data)

}).catch((error) => {
    console.error(error)
})
});

app.post("/holidays", async (req, res) => {
  const customDate = req.body
  console.log(customDate)
  // await axios({
  //   method: "GET",
  //   url: `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY_NASA}&date=${customDate}`,
  //   withCredentials: false
  // }).then((response) => {
  //   res.send(response.image)
  // })
})

app.listen(8080, () => console.log('server is running on port 8080'));
