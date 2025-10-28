const a = 0 / 0;
console.log(Number.isNaN(a)); // true

const numero = Number("42"); // 42
const malo = Number("10px"); // NaN
console.log(parseFloat("10px")); // 10
