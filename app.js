// What will be returned by require is whatever has been assigned to module.exports 
const Service = require('./service');

console.log(Service.add(5, 6));

const {add, subtract} = require('./service');

console.log(add(1, 2));
console.log(subtract(10, 3));

console.log(require('./service')) // { add: [Function: add], subtract: [Function: subtract] }