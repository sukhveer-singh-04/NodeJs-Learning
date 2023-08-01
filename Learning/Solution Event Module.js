const fs = require('fs');
const events = require("events");

const eventEmitter = new events.EventEmitter();

// data to be added to the file
let introduction_part1 = 'My name is Sukhveer Singh. \nI\'m 23 years old. \nI\'m from Rupnagar, Punjab. \nI\'m pursuing my graduation from IKG PTU. \nTill now my overall CGPA is 8.6. \nCurrently I\'m working as a Web Developer - Intern at "Relinns Technologies". \nI have completed HTML, CSS, and Bootstrap courses there. \nCurrently learinig NOde.JS. \nMy hobbies are watching movies and listening to songs. \nI like to play football.'

let introduction_part2 = '\n\n\n\n\n';
let introduction_part3 = 'Sukhveer Singh.';

const folder = './public1/files';

// creating event for creating the multilevel directories - task 2
eventEmitter.on('creatingFolder', () => {
    try {
        if (!fs.existsSync('public1')) {
            fs.mkdir(folder, { recursive: true }, function (err) {
                if (err) console.log(err);
            });
        }
    } catch (err) { console.log(err) };
});

const task = folder + '/task5.txt';

// event for updating file data - task.txt - task 3
eventEmitter.on('updateFile', () => {
    fs.appendFile(task, introduction_part1, function (err) {
        if (err) console.log(err);
    })
})

// event for updating file data - task.txt - task 4
eventEmitter.on('updateFile', () => {
    fs.appendFile(task, introduction_part2, function (err) {
        if (err) console.log(err);
    })
})


// event for updating file data - task.txt - task 5
eventEmitter.on('updateFile', () => {
    fs.appendFile(task, introduction_part3, function (err) {
        if (err) console.log(err);
    })
})

// event for reading file - task.txt - task 6
eventEmitter.on('readFile', () => {
    fs.readFile(task, (err, data) => {
        console.log(data.toString());
    })
})

// event for deleting the folder task - 7
eventEmitter.on('deleteFolder', () => {
    fs.rm('public1', { recursive: true, force: true }, function (err) { if (err) console.log(err); else console.log('File and folder deleted.'); });
})




// emitting the event for creating the folder - task 2
eventEmitter.emit('creatingFolder');

// emitting the event for creating and appending data to the file - task 3, 4 ,5
setTimeout(() =>
    eventEmitter.emit('updateFile'), 100);

// emitting the event for creating the folder - task 6
setTimeout(() =>
    eventEmitter.emit('readFile'), 2000);

// emitting the event for deleting the folder - task 7
setTimeout(() =>
    eventEmitter.emit('deleteFolder'), 8000);

