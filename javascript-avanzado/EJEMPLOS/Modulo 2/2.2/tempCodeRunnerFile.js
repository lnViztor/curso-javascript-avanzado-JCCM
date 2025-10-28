const objA = { nombre: "Juan" };
const objB = { nombre: "Juan" };
console.log(objA === objB); // false
const objC = objA;
console.log(objA === objC); // true