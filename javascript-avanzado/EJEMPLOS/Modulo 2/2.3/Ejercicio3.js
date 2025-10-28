function calcular(a, b, operacion) {
  return operacion(a, b);
}
const suma = (x, y) => x + y;
const resta = (x, y) => x - y;

console.log(calcular(5, 3, suma)); // 8
console.log(calcular(5, 3, resta)); // 2
