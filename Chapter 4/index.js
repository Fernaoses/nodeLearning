const logEvent = require('./logEvents');

const EventEmmiter = require('events');

class MyEmitter extends EventEmmiter {}

// Initialize object
const myEmitter = new MyEmitter();

// Add listener for the log event
myEmitter.on('log', (msg) => logEvent(msg));

setTimeout(() => {
    // Emit the log event
    myEmitter.emit('log', 'Log event emitted!');
}, 2000);