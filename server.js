const PORT = process.env.PORT || 3000;
// Application setup.
const express = require('express');
const app = express();


// Setup route.
app.get('/', (req, res) => {
    res.send(`Hello !`);
});
app.listen(PORT);
