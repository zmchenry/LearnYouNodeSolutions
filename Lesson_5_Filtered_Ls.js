/* Exercise 5 Learn You Node */
// Import modules
var fs = require('fs'), path = require('path');
// Read in directory
fs.readdir(process.argv[2], function(err, list) {
    if(!err) {
      // Filter filenames based on filepath passed in.
      var li = list.filter(function(item) {
        return path.extname(item) === ('.' + process.argv[3]);
      });
      console.log(li.join('\n'));
    };
});

/* Exercise 5 Learn You Node (Official Solution)*/
var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + process.argv[3])
      console.log(file)
  })
})
