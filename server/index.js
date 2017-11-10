const database = require('../database/index.js');
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (request, response) => {
  response.send('ROOT');
});

app.get('/api/log/entries/current/day', (request, response) => {
  // RETURN JSON -- ARRAY OF OBJECTS
  console.log('RECEIVED A GET');
  response.send('RECEIVED YOUR GET');
});

app.post('/api/log/entry', (request, response) => {
  console.log('RECEIVED A POST');
  // STORE ENTRY IN DATABASE
  // database.save
  
  response.send('RECEIVED YOUR POST');
});

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
