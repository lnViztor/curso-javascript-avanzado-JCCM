//Activa/desactiva un botón al hacer clic (como ON/OFF).
const botonToggle = document.getElementById("btnToggle");
botonToggle.addEventListener("click", () => {
  botonToggle.disabled = !botonToggle.disabled;
});
