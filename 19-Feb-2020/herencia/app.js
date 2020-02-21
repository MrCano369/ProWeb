function Person(first, last){
    this.firstName = first;
    this.lastName = last;
}

//el prototype agrega propiedades o metodos
Person.prototype.greet = function(){
    console.log(`Hello ${this.firstName} ${this.lastName}`);
};

var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();