var http = require('http')
var os = require('os')
	
	http.createServer(function(req,res) {
	res.writeHead(200, {'Content-Tyep': 'text/plain'})
	const host = os.hostname()
	res.end(`hello ${host}`)
}).listen(8080)
