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

// access keys information
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

// function to get my tweets
var myTs = function() {    

// copied from twitter npm
    var params = {screen_name: 'noliloli'};
        client.get('statuses/user_timeline', params, function(error, tweets, response) {
            if (!error) {
            // console.log(tweets);
            for (var i = 0; i < tweets.length; i++) {
                console.log(tweets[i].created_at);
                console.log(tweets[i].text);
                }
            }
        });
};

// copied from spotify nmp, want to display artist, song name, link, album, default to ace of base-the sign
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data.tracks.items[0]); 
  });

// user input
var Tcommand = function(myTweets) {
    switch (myTweets) {
        case 'my-tweets':
            myTs();
            break;
        default: 
            console.log("What was that? LIRI has no clue");
    }
};

// pass arguments into Tcommand, remember to use argv
var pass = function(itwo, ithree) {
    Tcommand(itwo, ithree);
}

pass(process.argv[2],process.argv[3]);
