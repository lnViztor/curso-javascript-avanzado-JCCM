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