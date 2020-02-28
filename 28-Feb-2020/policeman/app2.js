//var util = require('util');

'use strict';

class Person{
    constructor(){
        this.firstname = 'John';
        this.lastname = 'Doe';
    }

    greet(){
        console.log(`Hola ${this.firstname} ${this.lastname}`);
    }
}

class Policeman extends Person{// Policeman hereda de Person
    constructor(){
        super();
        this.badgenumber = '1234';
    }

    mostrarPlaca() {
        console.log(`Mi placa es ${this.badgenumber}`);
    }
}

var officer = new Policeman();
officer.greet();
officer.mostrarPlaca();
//What the heck is the event loop anyway?