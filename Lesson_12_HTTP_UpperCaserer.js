/* Exercise 12 Learn You Node */
var http = require('http'),
    fs = require('fs'),
    map = require('through2-map'),
    server = http.createServer(function(request, response) {
      request.pipe(map(function(chunk) {
        return chunk.toString().toUpperCase();
      })).pipe(response);
    });
server.listen(process.argv[2]);

/* Exercise 12 Learn You Node (Official Solution) */
var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
  if (req.method != 'POST')
    return res.end('send me a POST\n')

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(Number(process.argv[2]))
