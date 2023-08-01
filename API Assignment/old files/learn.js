const express = require('express');
const path = require('path');
const app = express();


const port = 8080;
console.log(path.resolve('/a/b', './c'));
// Returns: '/foo/bar/baz'

console.log(path.resolve('/a/b', './d/e/'));
// Returns: '/tmp/file'

console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));
// console.log(path.relative('C:\\orandea\\test\\gf\\bff\\gnfjgndf\\rvrv\\impl\\bbb', 'C:\\orandea\\test\\gf\\asdf\\aa' ));
// Listening to the server at port number - 8080:
app.listen(port, console.log(`Server is listening at  ${port}`));