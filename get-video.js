require('dotenv').config()
const fs = require('fs');
const request = require('request');

module.exports = getvideo => {
	request.get({
		url: "https://muse.ai/api/files/list",
		headers: {
			"Key": process.env.MUSE_AI_API_KEY
		}
	}, (err, httpResponse, body) => {
		console.log('got videos');
		fs.writeFileSync('./videos.json', body)
	})
}