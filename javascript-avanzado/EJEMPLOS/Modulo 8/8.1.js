//Ejercicio 1 — Crear objeto simple
const coche = { marca: "Toyota", modelo: "Corolla", año: 2020 };
//Ejercicio 2 — Añadir propiedades
coche.color = "Rojo";
coche.color = "Negro";
//Ejercicio 3 — Método con this
coche.descripcion = function () {
  return `Coche ${this.marca} ${this.modelo} (${this.año})`;
};
//Ejercicio 4 — Objeto anidado
coche.propietario = { nombre: "Juan", licencia: "12345678A" };
//Ejercicio 5 — Recorrer propiedades
for (let clave in coche) {
  console.log(`${clave}: ${coche[clave]}`);
}
//Ejercicio 6 — Copiar objeto
const copiaCoche = { ...coche };
console.log(copiaCoche);
