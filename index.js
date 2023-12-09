const http = require('http');

http.createServer((req,res) => {
    res.writeHead(200,{"Content-type":"text/html"});
    res.write("hey returning response");
    res.end();
}).listen(8000);