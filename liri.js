// add code to read and set any environment variables with the dotenv package
require("dotenv").config();
//  API library for the Spotify REST API
var Spotify = require('node-spotify-api');
// asynchronous client library for the Twitter REST and Streaming API's
var Twitter = require('twitter');
// make http calls
var request = require('request');

// add the code required to import the `keys.js` file and store it in a variable
var keys = require("./keys.js");

// access your keys information
var spotify = new Spotify(keys.spotify);
var twitter = new Twitter(keys.twitter);
 