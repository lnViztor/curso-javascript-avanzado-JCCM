//Crea una IIFE que reciba un número y muestre si es par o impar.
(function (num) {
  if (num % 2 === 0) {
    console.log(num + " es par");
  } else {
    console.log(num + " es impar");
  }
})(7);

//Usa una IIFE para crear una "mini calculadora" privada con sumar() y restar().
const calculadora = (function () {
  return {
    sumar(a, b) {
      return a + b;
    },
    restar(a, b) {
      return a - b;
    },
  };
})();
console.log(calculadora.sumar(5, 3));

// Protege con IIFE un array de tareas para que solo pueda modificarse desde métodos públicos.
const gestorTareas = (function () {
  //explicacion: el array tareas es privado dentro de la IIFE
  let tareas = ["Tarea 1", "Tarea 2"];

  return {
    agregarTarea(tarea) {
      console.log("Agregando tarea: " + tarea);
      tareas.push(tarea);
    },
    listarTareas() {
      //que itere sobre el array tareas y devuelva una copia y devuelva un string con las tareas separadas por comas con otro color
      return tareas.join(", ");
    },
  };
})();
gestorTareas.agregarTarea("Estudiar JavaScript");
console.log(gestorTareas.listarTareas());
