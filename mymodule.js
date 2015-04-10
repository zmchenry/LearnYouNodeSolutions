/*Exercise 6 Learn You Node */
module.exports = function(dir, extension, callback) {
  // Import modules here to keep out of global namespace
  var fs = require('fs'), path = require('path');
  //
  fs.readdir(dir, function(err, list) {
      if (err)
        return callback(err);
        // Filter filenames based on filepath passed in.
      var li = list.filter(function(item) {
        return path.extname(item) === ('.' + extension);
      });
      callback(null, li);
  });
}

/* Exercise 6 Learn You Node (Official Solution)*/
var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {

  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err)

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}
