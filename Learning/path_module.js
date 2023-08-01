const path = require('path')

const file_name1 = path.basename('fs.html');
console.log(file_name1);

const file_name2 = path.extname('index.html');
console.log(file_name2);

// const file_name3 = path.delimiter('D:/Desktop/Relinns Technologies/Node JS/Learning/fs.html');
console.log(path.delimiter);
console.log(path.sep);

console.log(path.basename(file_name1));
console.log(path.basename(file_name2));
console.log(__dirname);

console.log(__filename);


console.log(path.basename(file_name1 , '.html'));


console.log(path.dirname(':/Desktop/Relinns Technologies/Node JS/Learning/fs.html'));

console.log(path.parse(':/Desktop/Relinns Technologies/Node JS/Learning/fs.html'));

console.log(path.normalize('D:\\Desktop/Relinns Technologies/Node JS/Learning/fs.html'));

// console.log(path.relative('D:/Desktop/Relinns Technologies/Node JS/Learning/fs.html'));

console.log(path.resolve('D:\\Desktop/Relinns Technologies/Node JS/Learning/', 'fs.html'));

// console.log(path.normalize('D:\\Desktop/Relinns Technologies/Node JS/Learning/fs.html'));

let relativePath = path.relative('/home/user/config/','/home/user/js/')
console.log(relativePath);


console.log(path.basename('/foo/bar/baz/asdf'));