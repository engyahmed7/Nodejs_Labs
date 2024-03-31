const {EventEmit} = require('./eventEmit');
const event = new EventEmit();
const callback = (name) => {
    console.log(`Hello ${name}`);
};

event.on('greet', callback);
event.emit('greet', 'engyy');
