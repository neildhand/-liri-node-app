var myTwitterKeys = require("./keys.js");
var spotify = require("./keys.js")

for (var key in myTwitterKeys){
	console.log("key: " + key + " is " + myTwitterKeys[key]);
}

var userInput = process.argv[2];

if(userInput === "my-tweets"){
	console.log("tweets");
}
else if(userInput === "spotify-this-song"){
	console.log("spotify");
	var songTitle = process.argv[3];
	console.log("song title: " + songTitle)
}
else if(userInput === "movie-this"){
	console.log("movie");
}
else if(userInput === "do-what-it-says"){
	console.log("do what it says");
}
else{
	console.log("Invalid command");
}