const fs = require('fs');

var folderName = __dirname + '/public';

try {

    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
        // console.log('public folder created.')

    }

    folderName = folderName + '/files';

    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName)
        // console.log('files folder created.')
    }
    // else console.log('File exists.')

} catch (err) {
    console.error(err);
}


const task = folderName + '/task.txt';

let introduction_part1 = 'My name is Sukhveer Singh. \nI\'m 23 years old. \nI\'m from Rupnagar, Punjab. \nI\'m pursuing my graduation from IKG PTU. \nTill now my overall CGPA is 8.6. \nCurrently I\'m working as a Web Developer - Intern at "Relinns Technologies". \nI have completed HTML, CSS, and Bootstrap courses there. \nCurrently learinig NOde.JS. \nMy hobbies are watching movies and listening to songs. \nI like to play football.'

let introduction_part2 = '\n\n\n\n\n';
let introduction_part3 = 'Sukhveer Singh.';

fs.appendFile(task, introduction_part1, function (err) {
    if (err) throw err;
});

setTimeout(() => {
    fs.appendFile(task, introduction_part2, function (err) {
        if (err) throw err;
    });
}, 500);


setTimeout(() => {
    fs.appendFile(task, introduction_part3, function (err) {
        if (err) throw err;
    });
}, 600);

setTimeout(() => {
    fs.readFile(task, function (err, data) {
        console.log(data.toString());
    })
}, 2000);

setTimeout(() => {
    fs.unlink(task, err => {
        if (err) {
            throw err;
        }
        console.log(`${task} is deleted!`);
    });
}, 10000);











