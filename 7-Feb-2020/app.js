var carNames = require('car-names');
var allNames = carNames.all;
var randomName = carNames.random();
console.log(allNames.length);
allNames.forEach(e => {
    if (e.charAt(0) == "A"){
        console.log(e);
    }
});