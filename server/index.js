const database = require('../database/index.js');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const PORT = process.env.PORT;

app.use(session({
  secret: 'mJ?LY0.^te]BZB0W7U#/R^n{+',
  resave: false,
  saveUninitialized: true
}));

app.use(express.static(__dirname + '/../client/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/login', (request, response) => {
  if (!isLoggedIn(request)) {
    response.send('false');
  } else {
    response.send('true');
  }
  
  function isLoggedIn(request) {
    return request.session ? !!request.session.user : false;
  }
  
});

app.post('/login', (request, response) => {
  console.log('RECEIVED USERNAME');
  database.saveUser(request.body);
  request.session.user = request.body.username;
  response.send('true');
});

app.get('/logout', function(request, response) {
  console.log('LOGGING OUT');
  request.session.destroy(function() {
    response.redirect('/');
  });
});

app.get('/api/log/entries/current/day', (request, response) => {
  // RETURN JSON -- ARRAY OF OBJECTS
  console.log('RECEIVED A GET');
  database.loadEntries(request.session.user, 'cd', (entries) => {
    console.log('LOADED ENTRIES:');
    console.log(entries);
    console.log('RESPONDING WITH ENTRIES');
    response.json(entries);
  });
});

app.post('/api/log/entry', (request, response) => {
  console.log('RECEIVED A POST');
  database.saveEntry(request.body, request.session.user);
  response.send('RECEIVED YOUR POST');
});

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});

// HELPERS
