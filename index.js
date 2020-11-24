var visit = require('unist-util-visit')
var is = require('unist-util-is')
const videos = require('./videos.json')
const uploadfile = require('./upload-video');
const getvideo = require('./get-video');
function attacher() {
  function transformer(tree, file) {
    visit(tree, 'text', visitor)

    function visitor(node, type, ast) {
      console.log('visitor');
      const matches = node.value.match(/\!\[\[(.*.mp4)\]\]/);
      let filename;
      if (matches) {
        filename = matches[1]
        console.log(filename);
        console.log('filename is ', filename);

        const fileexists = videos.find(v => {
          return v.filename === filename
        })

        if (!fileexists) {
          console.log('uploading');
          uploadfile(filename, (url) => {
            getvideo();//update videos.json list
            node.value = `<div class="muse-video-player" data-video="${fileexists.fid}" data-width="600"></div>`
          });

        } else {
          console.log('file already exists', fileexists.url);
          node.value = `<div class="muse-video-player" data-video="${fileexists.fid}" data-width="600"></div>`
        }

      }
      return node;
    }
  }
  return transformer
}
module.exports = attacher