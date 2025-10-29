/*Ejercicio 1 — Crear tu primer callback*/
function procesarNombre(nombre, callback) {
  callback(nombre);
}
//Expliacion: La función procesarNombre recibe un nombre y una función de callback. Llama a la función de callback pasando el nombre como argumento.
procesarNombre("Ada", function (n) {
  console.log("Hola " + n);
});
procesarNombre("Grace", function (n) {
  console.log("Hola " + n);
});

procesarNombre("Alan", (n) => {
  console.log("Hola " + n);
});

/*Ejercicio 2 — Operaciones matemáticas con callback*/
//Expliacion: La función calcular recibe dos números y una función de callback que define la operación matemática a realizar con esos números.
function calcular(a, b, callback) {
  return callback(a, b);
}

calcular(5, 2, (x, y) => x + y); // 7
calcular(5, 2, (x, y) => x * y); // 10

/*Ejercicio 3 — Callback en eventos*/
//Expliacion: Se agrega un event listener a un botón que cambia el color de fondo del cuerpo del documento cuando se hace clic en el botón.
const botonBlue = document.getElementById("miBotonBlue");
function cambiarColor(color) {
  console.log("Cambiando color a:", color);
  document.body.style.backgroundColor = color;
}
botonBlue.addEventListener("click", () => cambiarColor("lightblue"));

/*Ejercicio 4 — Filtrar con callback*/
//Explicacion: La funcion despues ejecuta un callback despues de 1 segundo.
function despues(callback) {
  setTimeout(callback, 1000);
}

despues(() => console.log("Han pasado 1 segundo"));
