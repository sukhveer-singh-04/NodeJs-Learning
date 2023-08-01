const http = require('http');

const port = 8080;
const localhost = '127.0.0.1';

const server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write("Hello Fucking World!");
    // res.end();
    res.write('Aronis wishes u happy holidays! \n');
    res.write(`URL from request ${req.url} \n`);
    res.write(`Address from request ${req.connection.remoteAddress} \n`);
    res.write(`Headers from request ${JSON.stringify(req.headers)} \n`);
    res.end();

});

server.listen(port, localhost, `The server is listening at ${port} and ${localhost}`);
