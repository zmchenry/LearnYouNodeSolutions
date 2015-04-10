/* Exercise 7 Learn You Node */
var http = require('http');
http.get(process.argv[2], function(response) {
  response.setEncoding('utf8');
  response.on('data', console.log);
  response.on('error', console.error);
});

/* Exercise 7 Learn You Node (Official Solution)*/
var http = require('http')

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
})
