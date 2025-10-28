/*Ejercicio 1 — Buscar palabras */
const texto = "Me gusta JS porque JS es potente";
texto.match(/JS/g); // ["JS","JS"]
/*Ejercicio 2 — Buscar números en un texto*/
const cadena = "Tengo 2 gatos y 1 perro";
cadena.match(/\d+/g); // ["2", "1"]

/*Ejercicio 3 — Limpiar texto*/
"   hola mundo   ".replace(/^\s+|\s+$/g, ""); // "hola mundo"
