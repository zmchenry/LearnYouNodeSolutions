/* Exercise 6 Learn You Node (MyModule.js is module file)*/
// Import custom module
var mymodule = require('./mymodule');
// Call module with callback
mymodule(process.argv[2], process.argv[3], function(err, data) {
  if(!err) {
    console.log(data.join('\n'));
  }
});


/* Exercise 6 Learn You Node (Official Soltuion MyModule.js is module file)*/
var filterFn = require('./mymodule.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
  if (err)
    return console.error('There was an error:', err)

  list.forEach(function (file) {
    console.log(file)
  })
})
