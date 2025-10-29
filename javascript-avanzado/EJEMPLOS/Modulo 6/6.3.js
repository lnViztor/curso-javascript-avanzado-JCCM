//crear elemento con class
const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Hola, soy nuevo en la página";
nuevoParrafo.className = "nuevo-parrafo";
nuevoParrafo.id = "mensaje";
document.body.appendChild(nuevoParrafo);

const nuevoDiv = document.createElement("div");
nuevoDiv.textContent = "Hola, soy nuevo en la página DIV";
nuevoDiv.className = "nuevo-div";
document.body.appendChild(nuevoDiv);

//Ejercicio 1 — Cambiar texto al hacer clic en un botón
console.log("Ejercicio 1 — Cambiar texto al hacer clic en un botón");
const btn = document.getElementById("cambiar");
const p = document.getElementById("mensaje");
btn.addEventListener("click", () => {
  p.textContent = "Texto cambiado ✅";
});

//Ejercicio 2 — Agregar un elemento a la página
console.log("Ejercicio 2 — Agregar un elemento a la página");
const buttonE2 = document.createElement("button");
buttonE2.textContent = "Agregar ítem lista";
buttonE2.className = "btn-primary";
buttonE2.id = "agregar";
document.body.appendChild(buttonE2);
const lista = document.querySelector("ul");
const btnAdd = document.getElementById("agregar");

btnAdd.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "Nuevo ítem";
  lista.appendChild(li);
});
