//Ejercicio 1 — Función anónima básica
const hola = function () {
  console.log("Hola mundo");
};
hola();

//Ejercicio 2 — Callback anónimo
setTimeout(function () {
  console.log("Ejecutado después");
}, 1000);

//Ejercicio 3 — IIFE básica
(function () {
  console.log("Esto se ejecuta ya mismo 👋");
})();

//Ejercicio 4 — IIFE con parámetros
(function (nombre) {
  console.log("Bienvenido " + nombre);
})("Carlos");

//Ejercicio 5 — Encapsulación con IIFE
const app = (function () {
  let secreto = "12345";

  return {
    mostrarSecreto() {
      return secreto;
    },
  };
})();
console.log(app.mostrarSecreto()); // Debería mostrar "12345"
//console.log(app.secreto); // Debería ser undefined
