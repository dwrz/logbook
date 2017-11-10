const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (request, response) => {
  response.send('ROOT');
});
app.post('/api/log/entry', (request, response) => {});
app.get('/api/log/entries/current/day', (request, response) => {});

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
