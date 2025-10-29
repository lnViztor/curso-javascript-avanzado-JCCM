console.log("Ejemplos de selección de elementos del DOM");
console.log("=====================================");
console.log("6.1.js");
/*Ejercicio 1 — Seleccionar por ID*/
const elemento = document.getElementById("nombre");
console.log(elemento.placeholder);
console.log(elemento.type);

/*Ejercicio 2 — Seleccionar por clase */
const items = document.getElementsByClassName("field");
console.log(items.length);

/*Ejercicio 3 — querySelector */
const p = document.querySelector("div");
console.log(p.textContent);

/*Ejercicio 4 — querySelectorAll*/
const parrafos = document.querySelectorAll("p");
parrafos.forEach((p) => console.log(p.textContent));

/*Ejercicio 5 — Comparar DOM viejo vs moderno*/
const viejo = document.getElementById("nombre");
const moderno = document.querySelector("#nombre");
console.log(viejo === moderno); // true
// ❌ document.all["field"];
// ✅ document.getElementById("titulo");
