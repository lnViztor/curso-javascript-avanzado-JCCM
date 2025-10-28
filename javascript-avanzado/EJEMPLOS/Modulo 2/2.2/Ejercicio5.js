const config = Object.freeze({ modo: "producción" });
config.modo = "debug"; // ignorado
console.log(config.modo); // "producción"
