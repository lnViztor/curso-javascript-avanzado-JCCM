//console.log({ x: 1 } === { x: 1 }); // false
console.log(JSON.stringify({ x: 1 }) === JSON.stringify({ x: 1 })); // true
const obj1 = { y: 2 };
const obj2 = obj1;
console.log(obj1 === obj2); // true

//Comparacion de objetos por valor y por referencia
const objA = { nombre: "Juan" };
const objB = { nombre: "Juan" };
console.log(objA === objB); // false
const objC = objA;
console.log(objA === objC); // true
