const database = require('../database/index.js');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/../client/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/login', (request, response) => {
  // Return login page.
});

app.post('/login', (request, response) => {
  let username = request.body.username;
  let password = request.body.password;
  // Load and compare with DB.
  // Redirect to app or to login.
});

app.get('/signup', (request, response) => {
  // Return signup page.
});

app.post('/signup', (request, response) => {
  let username = request.body.username;
  let password = request.body.password;
  // Save to DB.
  // Redirect to login or app.
});

app.get('/api/log/entries/current/day', (request, response) => {
  // RETURN JSON -- ARRAY OF OBJECTS
  console.log('RECEIVED A GET');
  database.load('cd', (entries) => {
    console.log('LOADED ENTRIES:');
    console.log(entries);
    console.log('RESPONDING WITH ENTRIES');
    response.json(entries);
  });
});

app.post('/api/log/entry', (request, response) => {
  console.log('RECEIVED A POST');
  database.save(request.body);
  response.send('RECEIVED YOUR POST');
});

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
