var http = require('http');

var nodeversion = process.version;
var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello Azure to Johnny's world~~~~!");
    //response.end();
    //response.end("Hello Azure to Johnny's world~~~~!");

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
console.log(`Version: ${process.version}`);