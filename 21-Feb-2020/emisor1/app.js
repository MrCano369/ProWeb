var Emitter = require('./emitter');
var emtr = new Emitter();
emtr.on('greet', ()=>{console.log('Hola a todos xd')});
emtr.on('greet', ()=>{console.log('Hola x2')});
emtr.emit('greet');