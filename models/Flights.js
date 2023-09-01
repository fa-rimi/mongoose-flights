const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema(
  {
    airline: {
      type: String, // name
      enum: ['American', 'Southwest', 'United'],
      required: true, // required
    },
    flightNo: {
      type: Number,
      required: true,
      minLength: 10,
      maxLength: 9999,
    },
    departs: {
        type: Date,
    }
  },
); 

// Define a Mongoose model named 'Flight' using the 'mongoose.model' method 
const Flight = mongoose.model('Flight', flightSchema);
module.exports = Flight; // export so we can use the model in our routes