//Ejercicio 1 — Closure simple
function crearSaludo(nombre) {
  return function () {
    console.log("Hola " + nombre);
  };
}
const saludo = crearSaludo("Carlos");
saludo(); // Muestra "Hola Carlos"

//Ejercicio 2 — Contador con variable privada
function crearContador() {
  let c = 0;
  return function () {
    c++;
    return c;
  };
}
const contar = crearContador();
contar(); // 1
contar(); // 2
