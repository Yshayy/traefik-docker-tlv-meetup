const http = require("http");

const msg = process.env["MESSAGE"];
const flakiness = parseFloat(process.env["FLAKINESS"] || "0");
let currentFlakiness = 0;
setInterval(()=> currentFlakiness = Math.random(), 5000);

http.createServer(function (request, response) {
    if (currentFlakiness < flakiness && Math.random() < flakiness){
        response.statusCode = 500;
        response.end();
    }
    else{
        response.end(process.env["MESSAGE"] || 'Hello World\n');
    }
}).listen(3000);