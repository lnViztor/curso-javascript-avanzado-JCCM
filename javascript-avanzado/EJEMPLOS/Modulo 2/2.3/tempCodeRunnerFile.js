function filtrarPares(numeros, callback) {
  return numeros.filter(callback);
}
const esPar = (num) => num % 2 === 0;
const listaNumeros = [1, 2, 3, 4, 5, 6];
console.log(filtrarPares(listaNumeros, esPar)); // [2, 4, 6]
