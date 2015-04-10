/* Exercise 13 Learn You Node */
var http = require('http'),
    url = require('url'),
    server = http.createServer(function(request, response) {
      response.writeHead(200, { 'Content-Type': 'application/json' });
      var route = url.parse(request.url, true).pathname,
           date = new Date(url.parse(request.url, true).query.iso);
      if(route === '/api/parsetime') {
        response.end(JSON.stringify({
          'hour': date.getHours(),
          'minute': date.getMinutes(),
          'second': date.getSeconds()
        }));
      } else if(route === '/api/unixtime') {
        response.end(JSON.stringify({'unixtime':date.getTime()}));
      }
    });
server.listen(process.argv[2]);

/* Exercise 13 Learn You Node (Official Solution) */
var http = require('http')
var url = require('url')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime : time.getTime() }
}

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  var time = new Date(parsedUrl.query.iso)
  var result

  if (/^\/api\/parsetime/.test(req.url))
    result = parsetime(time)
  else if (/^\/api\/unixtime/.test(req.url))
    result = unixtime(time)

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))
