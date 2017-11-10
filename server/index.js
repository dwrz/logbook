const database = require('../database/index.js');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/../client/public'));

app.get('/api/log/entries/current/day', (request, response) => {
  // RETURN JSON -- ARRAY OF OBJECTS
  console.log('RECEIVED A GET');
  database.load((entries) => {
    console.log('LOADED ENTRIES:');
    console.log(entries);
    console.log('RESPONDING WITH ENTRIES');
    response.json(entries);
  });
});

app.post('/api/log/entry', (request, response) => {
  console.log('RECEIVED A POST');
  // STORE ENTRY IN DATABASE
  database.save({timestamp: new Date(), event: 'default', description:'This is a test log.'});
  
  response.send('RECEIVED YOUR POST');
});

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
