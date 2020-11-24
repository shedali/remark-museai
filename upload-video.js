const fs = require('fs');
const request = require('request');
require('dotenv').config()

module.exports= uploadfile = (filepath, cb) => {
  var formData = {
    file: fs.createReadStream(filepath),
  };

  request.post(
    {
      url: 'https://muse.ai/api/files/upload',
      headers: {
        'Key': process.env.MUSE_AI_API_KEY,
        'Content-Type': 'multipart/form-data'
      },
      formData: formData
    }, function optionalCallback(err, httpResponse, body) {
      if (err) {
        return console.error('upload failed:', err);
      }
      console.log('Upload successful!  Server responded with:', body);

      cb(JSON.parse(body).url);
    });
}