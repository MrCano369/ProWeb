/*
var obj = {
    greet: 'Hello',
    greetr: function(){
        console.log('hola de la funcion xd');
    }
}

var seleccion = 'greetr';
obj[seleccion]();


console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);


var event = {
    click: () => {console.log('se hizo clikc xd')},
    dblClick: () => {console.log('doble')}
}

var e = 'click';

event[e]();
*/

var arr = [];
arr.push(() => {
    console.log('Hola mundo 1');
});

arr.push(() => {
    console.log('Hola mundo 2');
});

arr.push(() => {
    console.log('Hola mundo 3');
});

arr.forEach( item => {
    item();
});