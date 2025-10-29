console.log("Ejemplos de selección de elementos del DOM");
console.log("=====================================");
console.log("Retos.js");
//1. Selecciona todos los elementos <li> y muestra solo los tengan más de 3 letras.
console.log("Items con más de 5 letras:");
const listaItems = document.querySelectorAll("li");
console.log(listaItems);

//recorrelo con For normal
console.log("Items con más de 5 letras (for normal):");
for (let i = 0; i < listaItems.length; i++) {
  if (listaItems[i].innerText.length > 3) {
    console.log(listaItems[i].innerText);
  }
}

//recorrelo con for...of
console.log("Items con más de 5 letras (for...of):");
for (const item of listaItems) {
  if (item.innerText.length > 3) {
    console.log(item.innerText);
  }
}

//recorrelo con forEach
console.log("Items con más de 5 letras (forEach):");
listaItems.forEach((item) => {
  if (item.innerText.length > 3) {
    console.log(item.innerText);
  }
});

//Busca el primer botón dentro de un div con clase .contenedor.
const boton = document.querySelector(".actions button");
console.log("Primer botón dentro de .actions:");
console.log(boton);

//Recorre todos los nodos <li> y numéralos: "Elemento 1", "Elemento 2", etc.
console.log("Numerar elementos <li>:");
let contador = 1;
listaItems.forEach((item) => {
  item.innerText = `Elemento ${contador}`;
  contador++;
});
console.log(listaItems);
