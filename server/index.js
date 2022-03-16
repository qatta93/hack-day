const express = require('express');

const app = express();

app.get('/', async (req, res) => {
  res.send('im working!')
});

app.listen(8080, () => console.log('server is running on port 8080'));
