const http = require("http");
const console = require('console');
const hostname = "127.0.0.1";
const postNumber = 8081;
console.info("Console is working...")
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end("Connection Successful.");
    // res.write(req.url);
  // res.end();
});

server.listen( postNumber, hostname, () => {
    console.log(`listening at port number: ${postNumber} and hostname: ${hostname}`)
});
