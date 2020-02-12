/*function greet(){
    console.log('hi');
}
greet();
let greet = ()=>{
    console.log(`hi`);
}
greet();
*/
let logGreeting = (fn) =>{
    fn();
}
//logGreeting(greet);

//let logGreeting = (() => {console.log(`hi`)});

logGreeting(() => {
    console.log(`hi`)
});