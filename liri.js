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

// get artist name
var artists = function(artist) {
    return artist.name;
}

// function for spotify
var sSpotify = function(songName) {

// copied from spotify nmp, want to display artist, song name, link, album, default to ace of base-the sign
    spotify.search({ type: 'track', query: songName }, function(err, data) {
        if (err) {
        return console.log('Error occurred: ' + err);
        }
    
        var songs = data.tracks.items;
            for (var i = 0; i < songs.length; i++) {
                console.log(i);
                // copied map, i wasn't sure how to use it
                console.log("artists: " + songs[i].artists.map(artists));
                console.log("song name: " + songs[i].name);
                console.log("link: " + songs[i].preview_url);
                console.log("album: " + songs[i].album.name);
                console.log("\n-------------\n");
            }
    });
};

// copied from request npm
request('http://www.omdbapi.com/?t=winner&apikey=trilogy', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

// user input
var lCommand = function(info, sInfo) {
    switch (info) {
        case 'my-tweets':
            myTs();
            break;
        case 'spotify-this-song':
            sSpotify(sInfo);
            break;
        default: 
            console.log("What was that? LIRI has no clue");
    }
};

// pass arguments into Tcommand, remember to use argv
var pass = function(itwo, ithree) {
    lCommand(itwo, ithree);
}

pass(process.argv[2],process.argv[3]);
