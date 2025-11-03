//Ejercicio 1 — Closure simple
function crearSaludo(nombre) {
  return function () {
    console.log("Hola " + nombre);
  };
}
const saludo = crearSaludo("Carlos");
saludo(); // Muestra "Hola Carlos"
