const http = require("http");

http.createServer(function (request, response) {
   response.end(process.env["MESSAGE"] || 'Hello World\n');
}).listen(3000);