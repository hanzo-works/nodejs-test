// Authentication module.
const auth = require('http-auth');
const authConnect = require('http-auth-connect');

const basic = auth.basic({
    realm: "Simon Area.",
    file: __dirname + "/data/users.htpasswd"
});
const PORT = process.env.PORT || 3000;
// Application setup.
const express = require('express');
const app = express();
app.use(authConnect(basic));

// Setup route.
app.get('/', (req, res) => {
    res.send(`Hello from express - ${req.user}!`);
});
app.listen(PORT);
