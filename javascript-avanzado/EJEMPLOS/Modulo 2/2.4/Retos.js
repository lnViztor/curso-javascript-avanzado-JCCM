//Crea un bucle que cuente cuántos números pares hay en un array.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let contadorPares = 0;
for (const num of numeros) {
  if (num % 2 === 0) {
    contadorPares++;
  }
}
console.log(`Cantidad de números pares: ${contadorPares}`);

//Recorre una lista de usuarios y muestra solo los que tengan más de 30 años.
const usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 35 },
  { nombre: "Marta", edad: 28 },
  { nombre: "Carlos", edad: 40 },
];
for (const usuario of usuarios) {
  if (usuario.edad > 30) {
    console.log(usuario.nombre);
  }
}

//Escribe un programa que pregunte contraseñas hasta que el usuario acierte (usa while).
const fs = require("fs");

// Para leer entrada del usuario de forma síncrona:
const prompt = (texto) => {
  fs.writeSync(1, texto); // Muestra el texto sin salto de línea
  const buffer = Buffer.alloc(1024); // Reserva espacio
  const bytes = fs.readSync(0, buffer, 0, 1024); // Lee del teclado
  return buffer.toString("utf8", 0, bytes).trim(); // Devuelve lo escrito
};

const contraseñaCorrecta = "secreto123";
let contraseñaUsuario = "";

while (contraseñaUsuario !== contraseñaCorrecta) {
  contraseñaUsuario = prompt("Introduce la password: ");
}

console.log("¡Contraseña pasword!");
