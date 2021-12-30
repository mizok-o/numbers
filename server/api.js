const http = require('http');

const server = http.createServer
	(function (request, response) {
		response.writeHead(200, {"Content-Type": "text/plain"});
		if (!request.url.endsWith('/')) {
			response.end("Hello World!!, ("+request.url+")\n");
		} else {
			response.end("Hello World!!\n");
		}
});

server.listen(8590);

console.log("Server running at http://127.0.0.1:8590/");