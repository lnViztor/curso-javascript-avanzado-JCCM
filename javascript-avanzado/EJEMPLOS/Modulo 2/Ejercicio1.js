const APP = "Mi App";
let usuarios = 0;
usuarios++;
APP += " - Usuarios: " + usuarios; // Esto generará un error porque APP es una constante
console.log(APP);
