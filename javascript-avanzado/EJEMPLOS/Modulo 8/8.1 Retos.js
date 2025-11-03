//Crea un objeto contador con valor inicial 0 y métodos incrementar() y reset()
const contador = {
  valor: 0,
  incrementar() {
    this.valor++;
  },
  reset() {
    this.valor = 0;
  },
};
contador.incrementar();
contador.incrementar();
console.log(contador.valor); // Debería mostrar 2
contador.reset();
console.log(contador.valor); // Debería mostrar 0

//Crea un objeto tienda con productos (array) y método agregarProducto(nombre).
const tienda = {
  productos: [],
  agregarProducto(nombre) {
    this.productos.push(nombre);
  },
};
tienda.agregarProducto("🍊");
tienda.agregarProducto("🍎");
console.log(tienda.productos); // Debería mostrar ["Manzanas", "Naranjas"]
