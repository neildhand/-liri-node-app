var userInput = process.argv[2];
//if twitter
if(userInput === "my-tweets"){
	var Twitter = require('twitter');
	var myTwitterKeys = require("./keys.js");

	var params = {screen_name: 'peach_fanta23'};
	myTwitterKeys.get('statuses/user_timeline', params, function(error, tweets) {
  	if (!error) {
  		for(var i = 0; i < 20; i++){
  			console.log("created at: " + tweets[i].created_at);
  			console.log("tweet: " + tweets[i].text + "\n");
  		}
  	}
  	else{
  		console.log(error);
  	}
});

	console.log("\ntweets\n");
}
// if spotify
else if(userInput === "spotify-this-song"){
	var Spotify = require('node-spotify-api')
	var mySpotifyKeys = require("./spotifyKeys.js")

	console.log("\nspotify\n");

	var songTitle = process.argv;
	var songTitleString = "";

	if(songTitle.length > 3){
		for(var i = 3; i < songTitle.length; i++){
			songTitleString = songTitleString + " " + songTitle[i];
		}
		console.log("song title: " + songTitleString);
	}
	else{
		songTitleString = "The Sign";
	}
	
		spotifySearch({ type: 'track', query: songTitleString }, function(err, data) {
  		if (err) {
    		return console.log('Error occurred: ' + err);
  		}
		console.log(data); 


});
  	
  }

//if omdb
else if(userInput === "movie-this"){
	console.log("movie\n");

	var request = require("request");
	var nodeArgs = process.argv;
	var movieName = "";

	if(nodeArgs.length > 3)
	{
		for(var i = 3; i < nodeArgs.length; i++){

			if(i>3 && i<nodeArgs.length){
				movieName = movieName + "+" + nodeArgs[i];
			}else{
				movieName += nodeArgs[i];
			}
		}
	}
	else{
		movieName = "mr+nobody"
	}

		var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

		console.log(queryUrl);
request(queryUrl, function(error, response, body) {
	if(!error && response.statusCode === 200) {
		// Title of the movie.
		console.log("Title: " + JSON.parse(body).Title);
		// * Year the movie came out.
		console.log("Year: " + JSON.parse(body).Year);
		// * IMDB Rating of the movie.
		console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
		// * Rotten Tomatoes Rating of the movie.
		console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
		// * Country where the movie was produced.
		console.log("Country: " + JSON.parse(body).Country);
		// * Language of the movie.
		console.log("Language: " + JSON.parse(body).Language);
		// * Plot of the movie.
		console.log("Plot: " + JSON.parse(body).Plot);
		// * Actors in the movie.
		console.log("Actors: " + JSON.parse(body).Plot);
	}
});
}
//if do what it says 
else if(userInput === "do-what-it-says"){
	console.log("do what it says");

	var fs = require("fs");
}
else{
	console.log("Invalid command");
}