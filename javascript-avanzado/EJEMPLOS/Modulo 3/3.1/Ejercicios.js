/*Ejercicio 1 — Buscar una palabra*/
const texto = "Aprendiendo JAVASCRIPT es divertido";
const resultado = /javascript/i.test(texto);
console.log(resultado); // true

/*Ejercicio 3 — Buscar números
Verifica si un texto contiene algún número.*/

console.log(/\d/.test("abc")); // false
console.log(/\d/.test("abc3")); // true

/*Ejercicio 4 — Buscar al inicio o al final*/
console.log(/^Hola/.test("Hola mundo")); // true
console.log(/mundo$/.test("Hola mundo")); // true

/*Ejercicio 5 — Repeticiones
Comprueba si una cadena tiene exactamente 3 letras.*/

console.log(/^[a-zA-Z]{3}$/.test("Sol")); // true
console.log(/^[a-zA-Z]{3}$/.test("Luna")); // false
