//Ejercicio 3 — Función que devuelve función
function crearSaludo(saludo) {
  return function (nombre) {
    return saludo + " " + nombre;
  };
}

const hola = crearSaludo("Hola");
hola("Ana"); // "Hola Ana"

//Ejercicio 4 — Iteración personalizada
function iterarArray(arr, funcion) {
  for (let i = 0; i < arr.length; i++) {
    funcion(arr[i], i);
  }
}
const numeros = [1, 2, 3];
iterarArray(numeros, function (num, indice) {
  console.log("Número en índice " + indice + ": " + num);
});

function porCadaUno(lista, callback) {
  for (const elem of lista) callback(elem);
}
porCadaUno(["🍎", "🍌", "🍇"], console.log);

//Ejercicio 5 — Decorador simple
function conLog(fn) {
  return function (...args) {
    console.log("Llamada con args:", args);
    return fn(...args);
  };
}
const sumar = (a, b) => a + b;
const sumarConLog = conLog(sumar);
console.log(sumarConLog(2, 3));
