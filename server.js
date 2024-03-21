var http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
    response.write("Hola Món");
    response.end();
}).listen(8888);