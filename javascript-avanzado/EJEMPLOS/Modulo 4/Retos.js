/*Crea una función login(usuario, contraseña) que lance errores si:

usuario o contraseña están vacíos
usuario tiene menos de 3 caracteres*/
function login(usuario, contraseña) {
  if (!usuario || !contraseña) {
    throw new Error("El usuario y la contraseña son obligatorios");
  }
  if (usuario.length < 3) {
    throw new Error("El usuario debe tener al menos 3 caracteres");
  }
  return "Login exitoso";
}
// Ejemplo de uso:
console.log(login("us", "pass")); // Lanza Error
console.log(login("user", "pass")); // Login exitoso

/*Crea calcularArea(radio) y lanza error si el radio no es positivo.*/
function calcularArea(radio) {
  if (typeof radio !== "number" || radio <= 0) {
    throw new RangeError("El radio debe ser un número positivo");
  }
  return Math.PI * radio * radio;
}
// Ejemplo de uso:
console.log(calcularArea(5)); // 78.53981633974483
console.log(calcularArea(-3)); // Lanza RangeError

/*Haz una función parsearJSON(texto) que:
use JSON.parse
capture errores
si falla, lance un nuevo error explicando qué pasó*/
function parsearJSON(texto) {
  try {
    return JSON.parse(texto);
  } catch (error) {
    throw new Error("Error al parsear JSON: " + error.message);
  }
}
// Ejemplo de uso:
console.log(parsearJSON('{"nombre": "Juan"}')); // { nombre: 'Juan' }
console.log(parsearJSON('{"nombre": "Juan"')); // Lanza Error
