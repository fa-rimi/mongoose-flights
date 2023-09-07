const express = require("express");
const mongoose = require("mongoose");
const Flight = require("./models/Flights");

// ** Variables ** //
const app = express();
const PORT = 3000;

// ** Middleware  ** //
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // will allow us to receive data as json and send it to our req.body

// ** Routes ** //
/**
 * Root Route
 * @method GET
 * @description Testing to see is server.js is working
 */
app.get("/", (req, res) => {
  console.log("And we are live!");
  res.send("And we are live!");
});

/**
 * Show
 * @method GET
 * @description Display flights
 */
app.get("/flights", async (req, res) => {
  try {
    const flights = await Flight.find({});
    // using the .find method with empty params to grab all flights
    res.send(flights)
  } catch (e) {
    console.log(e);
  }
});

/**
 * Live Server
 */
app.listen(PORT, (req, res) => {
  console.log(`Server is running on localhost:${PORT}`);
});
