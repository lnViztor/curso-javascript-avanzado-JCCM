const tienda = {
  productos: [],
  agregarProducto(nombre) {
    this.productos.push(nombre);
  },
};
tienda.agregarProducto("🍊");
tienda.agregarProducto("🍎");
console.log(tienda.productos); // Debería mostrar ["Manzanas", "Naranjas"]
