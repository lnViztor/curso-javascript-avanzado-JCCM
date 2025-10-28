//Crea una función flecha que devuelva el número mayor entre dos valores.
const mayor = (a, b) => (a > b ? a : b);
console.log(mayor(10, 5));

//Escribe una función repetir(texto, veces) que repita un texto las veces indicads.
function repetir(texto, veces) {
  return texto.repeat(veces);
}
console.log(repetir("Hola ", 3)); // Hola Hola Hola

//Crea una función que reciba una lista de números y devuelva solo los pares usando una función callback.
function filtrarPares(numeros, callback) {
  return numeros.filter(callback);
}
const esPar = (num) => num % 2 === 0;
const listaNumeros = [1, 2, 3, 4, 5, 6];
console.log(filtrarPares(listaNumeros, esPar)); // [2, 4, 6]
