const express = require('express');
const app = express();
const PORT = 3000;

/**
 * Root Route
 * @method GET
 * @description Testing to see is server.js is working
 */
app.get('/', (req, res) => {
    console.log("And we are live!");
    res.send("And we are live!");
});

/**
 * Live Server
 */
app.listen(PORT, (req, res) => {
    console.log(`Server is running on localhost:${PORT}`);
});