function bienvenida(nombre = "invitado") {
  return "Bienvenido " + nombre;
}
console.log(bienvenida()); // Bienvenido invitado
console.log(bienvenida("Carlos")); // Bienvenido Carlos
const despedida = function (nombre = "amigo") {
  return "Adiós " + nombre;
};
console.log(despedida()); // Adiós amigo
console.log(despedida("Ana")); // Adiós Ana
