const original = { nombre: "Ada", edad: 36 };
const copia = { ...original };
copia.nombre = "Alan";
console.log(original.nombre); // "Ada"
console.log(copia.nombre); // "Alan"
