var Twitter = require('twitter');

console.log('this is loaded');

var twitterKeys = new Twitter ({
  consumer_key: 'HreTSPWUzldaZpew6qeBmmHWB',
  consumer_secret: 'O0DtaHsBEPXzA5EpjfF42hhYd2RroVLHgbksIYHAHDTysAyfJP',
  access_token_key: '925365590189109249-1LHBXFcWcCGyV5MYced0Q0iHeeLCgM7',
  access_token_secret: 'mwLiC3v5kwEak6ITt7pRQCiQ3xCqwMvJt5kh3Wbr1RYfY'
});

var spotifyKeys = new Spotify ({
	clientId: '1ffe44ec666849f9b956da357e9a7aac',
	clientSecret: '55eeff27aaa74a13a276bb9d01d59a9d'
});

module.exports = {
	twitterKeys: twitterKeys,
	spotifyKeys: spotifyKeys
};