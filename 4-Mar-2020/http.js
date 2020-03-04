var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(fs.readFileSync(__dirname + '/index.htm'));
}).listen(1337, '127.0.0.1');