/* Exercise 10 Learn You Node */
var padWithZero = function(num) {
  if(num < 10) {
    return '0' + num;
  }
  return num;
}

var net = require('net'),
    server = net.createServer(function(socket) {
      var dateObj = new Date(),
      date = [dateObj.getFullYear(), padWithZero(dateObj.getMonth() + 1), padWithZero(dateObj.getDate())].join('-');
      time = [padWithZero(dateObj.getHours()), padWithZero(dateObj.getMinutes())].join(':');
      fullDate = [date, time].join(' ');
      socket.end(fullDate);
    });
server.listen(process.argv[2]);

/* Exercise 10 Learn You Node (Official Solution)*/
var net = require('net')

function zeroFill(i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  var d = new Date()
  return d.getFullYear() + '-'
    + zeroFill(d.getMonth() + 1) + '-'
    + zeroFill(d.getDate()) + ' '
    + zeroFill(d.getHours()) + ':'
    + zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))
