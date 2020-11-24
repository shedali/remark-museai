var fs = require('fs')
var remark = require('remark')
var doc = fs.readFileSync('fixture.md')
const muse = require('./index.js');

remark()
  .use(muse)
  .process(doc, function(err, file) {
    console.log(file);
  })