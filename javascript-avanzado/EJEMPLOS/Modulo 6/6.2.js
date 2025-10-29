console.log("Ejemplos de selección de elementos del DOM");
console.log("=====================================");
console.log("6.2.js");
//Ejercicio 2 — Listar hijos
console.log("Ejercicio 2 — Listar hijos");
const lista = document.querySelector("ul");
console.log(lista.children);

//Ejercicio 3 — Recorrer hijitos uno a uno
console.log("Ejercicio 3 — Recorrer hijitos uno a uno");
for (const hijo of lista.children) {
  console.log("Hijo:", hijo.textContent);
}
//Ejercicio 4 — Hermanos
console.log("Ejercicio 4 — Hermanos");
const segundo = lista.children[1];
console.log("Hermanos del segundo elemento:", segundo.textContent);

console.log("Anterior", segundo.previousElementSibling.textContent); // anterior
console.log("Posterior", segundo.nextElementSibling.textContent); // siguiente
