const fs = require('fs');
const http = require('http');

http.createServer(function (req, res) {

    // fs.readFile('try.txt', function(err, data){
    //     // if (err) throw err; 
    //     res.writeHead(200, {'Content-Type' : "text/html"});
    //     res.write(data);
    //     return res.end('done!');
    // });

    // fs.open("file1.txt", 'w', function (err, file) {
    //     if (err) throw err;
    //     console.log('file1 opened');
    // });
    
    fs.appendFile("file2.txt", '\nFile created using appendFile method of fs module.', function (err) {
        if (err) throw err;
        console.log('file2 opened');
    })


    // fs.unlink("file2.txt" ,function(err){ if(err) throw err;
    // console.log("file deleted.");
    // })

    fs.rename('file2.txt', 'filerenamed.txt', function(err){
        if (err) throw err;
        console.log('file2 renamed');
    })
}).listen(8081);
