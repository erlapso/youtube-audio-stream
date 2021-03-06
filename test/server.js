var http   = require('http');
var fs     = require('fs');
var stream = require('..');

http.createServer(demo).listen(3000);

function demo(req, res) {
  if (req.url === '/') {
    return fs.createReadStream(__dirname + '/server.html').pipe(res);
  }
  stream(req.url.slice(1)).pipe(res);
}

console.log('open http://localhost:3000 for demo of audio stream');
