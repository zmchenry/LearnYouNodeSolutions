/* Exercise 4 Learn You Node */
// Load fs module for FileSystem operations
var fs = require('fs');
// Call read file (async) and use callback to print newlines
fs.readFile(process.argv[2], 'utf-8', function readAsync(err, data) {
  if(!err) {
    console.log(data.split('\n').length - 1);
  }
});

/* Exercise 4 Learn You Node (Official Solution)*/
var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
  // fs.readFile(file, 'utf8', callback) can also be used
  var lines = contents.toString().split('\n').length - 1
  console.log(lines)
})
