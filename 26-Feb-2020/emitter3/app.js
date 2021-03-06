var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    this.greeting = 'Hello world!';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function (data) {
    console.log(`${this.greeting}: ${data}`);
    this.emit('greet', data);
}

greeting1 = new Greetr();
greeting1.on('greet', function (data) {
    console.log(`Someone greeted! ${data}`);
});
greeting1.greet('Belsebu');