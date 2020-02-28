var util = require('util');

function Person() {
    this.firstname = 'John';
    this.lastname = 'Doe';
}

Person.prototype.greet = function () {
    console.log(`Hola ${this.firstname} ${this.lastname}`);
}

function Policeman() {
    Person.call(this); // lo mismo que super()
    this.badgenumber = '1234';
}

Policeman.prototype.mostrarPlaca = function () {
    console.log(`Mi placa es ${this.badgenumber}`);
}

util.inherits(Policeman, Person); // Policeman hereda de Person
var officer = new Policeman();
officer.greet();
officer.mostrarPlaca();