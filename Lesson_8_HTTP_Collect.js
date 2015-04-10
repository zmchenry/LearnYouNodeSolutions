/* Exercise 8 Learn You Node */
// Import packages
var http = require('http');
http.get(process.argv[2], function(response) {
  // Set encoding so I dont have to cast to string.
  response.setEncoding('utf8');
  var responseCount = 0, responseStr = '', responseArr = [];
  // Successful
  response.on('data', function(data) {
    responseCount += data.length;
    responseStr += data;
  });
  // When done doing request
  response.on('end', function() {
    responseArr = responseStr.split('\n');
    console.log(responseCount);
    for(var i = 0, len = responseArr.length; i < len; i++) {
      console.log(responseArr[i]);
    }
  });
});

/* Exercise 8 Learn You Node (Official Solution)*/
var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err)
      return console.error(err)
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})
