var greet = require('./greet');
greet();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');//se obtiene un objeto
greet3.greet();
greet3.greeting = 'Changed hello world!';//cambiamos su propiedad

var greet3b = require('./greet3');//obtenemos el mismo objeto
greet3b.greet();

var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();//para acceder a la propiedad se usa el punto