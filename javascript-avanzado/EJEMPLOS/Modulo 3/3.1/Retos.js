/* 
Crea un regex que detecte si un texto contiene solo números. */
console.log(/^\d+$/.test("12345")); // true
console.log(/^\d+$/.test("123a45")); // false

/*Detecta si un texto empieza con "https".*/
console.log(/^https/.test("https://example.com")); // true
console.log(/^https/.test("http://example.com")); // false

/*Escribe una expresión regular que coincida con palabras que tengan al menos una vocal.
Comprueba si una cadena termina con ".js" o ".ts".*/
console.log(/[aeiouAEIOU]/.test("rhythm")); // false
console.log(/[aeiouAEIOU]/.test("hello")); // true

console.log(/\.(js|ts)$/.test("script.js")); // true
console.log(/\.(js|ts)$/.test("style.css")); // false
console.log(/\.(js|ts)$/.test("module.ts")); // true
