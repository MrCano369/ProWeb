var Emitter = require('events');
var configE = require('./config').events;//objeto recuperado
var emtr = new Emitter();
emtr.on(configE.GREET, ()=>{console.log('Hola a todos xd')});
emtr.on(configE.GREET, ()=>{console.log('Hola x2')});
emtr.emit(configE.GREET);