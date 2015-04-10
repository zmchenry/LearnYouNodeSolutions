/* Exercise 11 Learn You Node */
var http = require('http'),
    fs = require('fs'),
    server = http.createServer(function(request, response) {
      var stream = fs.createReadStream(process.argv[3]);
      stream.pipe(response);
    });
server.listen(process.argv[2]);

/* Exercise 11 Learn You Node (Official Solution) */
var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]));
