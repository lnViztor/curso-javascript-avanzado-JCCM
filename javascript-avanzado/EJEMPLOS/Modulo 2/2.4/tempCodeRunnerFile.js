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
  contraseñaUsuario = prompt("Introduce la contraseña: ");
}

console.log("¡Contraseña correcta!");
