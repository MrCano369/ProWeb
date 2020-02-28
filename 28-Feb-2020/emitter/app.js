'use strict';

var EventEmitter = require('events');
//var util = require('util');

//function Greetr() { this.greeting = 'Hello world!';}
class Greetr extends EventEmitter{
    constructor(){
        super();
        this.greeting = 'Hello world!';
    }

    greet(data){
        console.log(`${this.greeting}: ${data}`);
        this.emit('greet', data);
    }
}

/*util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function (data) {
    console.log(`${this.greeting}: ${data}`);
    this.emit('greet', data);
}*/

let data = 'corona';
var greeting1 = new Greetr();
greeting1.on('greet', function (data) {
    console.log(`Someone greeted! ${data}`);
});
greeting1.greet(data);