var userInput = process.argv[2];

//this is  a function loading my 20 most recent tweets
	function myTweets(){
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
};

//if twitter
if(userInput === "my-tweets"){
	myTweets();
}
//if spotify (doesnt work)
else if(userInput === "spotify-this-song"){
	var Spotify = require('node-spotify-api')
	var mySpotifyKeys = require("./spotifyKeys.js")

	console.log("\nspotify\n");

	//this would take in the arguments for the song title
	var songTitle = process.argv;
	//this is an empty string where each word of the song title will go
	var songTitleString = "";

	//we use this to check if there is a multi-word song title
	if(songTitle.length > 3){
		//this is to loop through the song multi-word song title
		for(var i = 3; i < songTitle.length; i++){
			//this puts each word together in the string separated by a space
			songTitleString = songTitleString + " " + songTitle[i];
		}
		//this console logs the title once it is finished looping
		console.log("song title: " + songTitleString);
	}
	//if the user doesn't input a song title, default to "the sign"
	else{
		songTitleString = "The Sign";
	}
	//search the spotify api using the songTitleString variable from earlier
		spotify.search({ type: 'track', query: songTitleString }, function(err, songData){
  		//if there is an error, show it to the screen
  		if (err) {
    		return console.log('Error occurred: ' + err);
  		}
  		//otherwise log the song data to the screen
		console.log(songData); 


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
		console.log("Actors: " + JSON.parse(body).Actors);
	}
});
}
//if do what it says 
else if(userInput === "do-what-it-says"){
	console.log("do what it says");

	var fs = require("fs");

	fs.readFile("random.txt", "utf-8", function(err, data){
		if(err){
			return console.log(err);
		}

		data = data.split(",");
		console.log(data[0]);

		if(data[0] === "movie-this"){
			var request = require("request");
			var	movieName = data[1];

			var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

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
		} else if(data[0] === "my-tweets"){
			myTweets();
		}
		//if it worked, this would be where the spotify api would go
		// else if (data[0] === "spotify-this-song"){
		// 	//first we would take in the song title to a variable
		// 	//ex: var songName = data[1];
		// 	//we would use this function to search the spotify api for that track, setting the query to songName
		// 	spotify.Search({ type: 'track', query: songName }, function((err, songData){
		// 	//if there are any errors, log the errors
  // 			if (err) {
  //   			return console.log('Error occurred: ' + err);
  // 			}
  // 			//otherwise log the song data 
		// 	console.log(songData); 
			


		
	});
}
else{
	console.log("Invalid command");
}