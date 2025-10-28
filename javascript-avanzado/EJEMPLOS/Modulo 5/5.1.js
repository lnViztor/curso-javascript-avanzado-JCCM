/*Ejercicio 1 — Evento click*/
const boton = document.getElementById("btn");
boton.addEventListener("click", () => {
  console.log("Clic detectado 🚀");
});

/*Ejercicio 2 — Modificar el DOM con click */
const boton2 = document.getElementById("btnCambiar");
const mensaje = document.getElementById("mensaje");

boton2.addEventListener("click", () => {
  mensaje.textContent = "Texto actualizado ✅";
});

/*Ejercicio 3 — Evento input*/
const input = document.getElementById("nombre");
const salida = document.getElementById("salida");

input.addEventListener("input", () => {
  salida.textContent = input.value;
});

/*Ejercicio 4 — Evitar que un form recargue la página*/
const form = document.getElementById("miForm");
const formName = document.getElementById("nombre");
form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  console.log(evento);
  console.log("Formulario enviado sin recargar la página ✅");
  if (formName.value == "hola") {
    evento.target.submit();
  }
});

/*Ejercicio 5 — Varias acciones*/
