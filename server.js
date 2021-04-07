//app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const basicAuth = require('basic-auth-connect');

app.use(basicAuth('n0bisuke', 'sugawara'));
app.get('/', (req, res) => {
  res.send('Hello World')
});

app.listen(PORT);
