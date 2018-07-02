const express = require('express');
const bodyParser = require("body-parser");
const axios = require("axios");
const mongoose = require("mongoose");
const request = require('request');
const mongodb = require("mongodb");
const path = require("path");
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 3000;


// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactnyt",
  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
