/* Exercise 9 Learn You Node */
var http = require('http'), urls = [];
function getData(url) {
  http.get(url, function(response) {
    var str = '';
    response.setEncoding('utf8');
    response.on('data', function(data) {
      str += data;
    });
    response.on('end', function() {
      console.log(str);
      var nextURL = urls.pop();
      if(nextURL) {
        getData(nextURL);
      }
    });
  });
}
urls.push(process.argv[4]);
urls.push(process.argv[3]);
getData(process.argv[2]);

/* Exercise 9 Learn You Node (Official Solution) */
var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      results[index] = data.toString()
      count++

      if (count == 3)
        printResults()
    }))
  })
}

for (var i = 0; i < 3; i++)
  httpGet(i)
