/*Ejercicio 1 — Validar parámetros*/
function cuadrado(n) {
  if (typeof n !== "number") {
    throw new TypeError("El parámetro debe ser un número");
  }
  return n * n;
}
// Ejemplo de uso:
console.log(cuadrado(5)); // 25
console.log(cuadrado("5")); // Lanza TypeError

/*Ejercicio 2 — Validar cadena*/
function setNombre(nombre) {
  if (!nombre) {
    throw new Error("El nombre es obligatorio");
  }
  return `Nombre guardado: ${nombre}`;
}
// Ejemplo de uso:
console.log(setNombre("Juan")); // Nombre guardado: Juan
console.log(setNombre("")); // Lanza Error

/*Ejercicio 3 — Validar rango*/
function validarEdad(edad) {
  if (edad < 0 || edad > 120) {
    throw new RangeError("Edad fuera de rango");
  }
  return "Edad correcta";
}
// Ejemplo de uso:
console.log(validarEdad(25)); // Edad correcta
console.log(validarEdad(150)); // Lanza RangeError

/*Ejercicio 4 — Función robusta con try/catch + throw */
function dividir(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Los parámetros deben ser números");
  }
  if (b === 0) {
    throw new Error("No se puede dividir entre cero");
  }
  return a / b;
}

try {
  console.log(dividir(10, 2)); // 5
  console.log(dividir("10", 2)); // error
} catch (error) {
  console.log("Ocurrió un problema:", error.message);
}
