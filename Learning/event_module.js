// const EventEmitter = require('events');
const events = require('events');
let eventEmitter = new events.EventEmitter();

eventEmitter.on("myevent", () => { console.log("Event emitted.") });
// eventEmitter.emit("myevent");


eventEmitter.on('newEvent', (fname, lname) => { console.log("The name is " + lname + ' - ' + fname + ' ' + lname) });
// eventEmitter.emit('newEvent', 'James', 'Bond'); 
// eventEmitter.emit("myevent");
eventEmitter.emit('newEvent', 'Sukhveer', 'Singh'); 
// eventEmitter.emit("myevent");


eventEmitter.once("myevent1", () => { console.log("Event1 emitted.") });
eventEmitter.emit("myevent1");
eventEmitter.emit("myevent");