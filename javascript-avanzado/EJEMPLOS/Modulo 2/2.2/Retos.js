//Crea una función clonar(obj) que haga una copia profunda (deep copy) sin usar librerías.
function clonar(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj; // Retorna el valor si no es un objeto
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => clonar(item)); // Copia profunda para arrays
  }
  const copia = {};
  for (const key in obj) {
    copia[key] = clonar(obj[key]); // Copia profunda para objetos
  }
  return copia;
}
//Ejemplos de uso:
const original = { a: 1, b: { c: 2 } };
const copia = clonar(original);
console.log(copia); // { a: 1, b: { c: 2 } }
copia.b.c = 3;
console.log(original.b.c); // 2
console.log(copia.b.c); // 3

// Crea una función mismoContenido(a, b) que compare si dos objetos tienen el mismo contenido (sin comparar referencia).
function mismoContenido(a, b) {
  if (a === b) return true; // Misma referencia o ambos null/undefined
  if (
    typeof a !== "object" ||
    typeof b !== "object" ||
    a === null ||
    b === null
  ) {
    return false; // Diferentes tipos o uno es null
  }
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false; // Diferente número de propiedades
  for (const key of keysA) {
    if (!keysB.includes(key) || !mismoContenido(a[key], b[key])) {
      return false; // Propiedad faltante o diferente valor
    }
  }
  return true;
}
// Ejemplos de uso:
const obj1 = { x: 1, y: { z: 2 } };
const obj2 = { x: 1, y: { z: 2 } };
console.log(mismoContenido(obj1, obj2));
const obj3 = { x: 1, y: { z: 3 } };
console.log(mismoContenido(obj1, obj3));

//Explica cuándo usarías Map y Set en vez de objetos planos {} o arrays [].
// Usaría Map cuando necesito una colección de pares clave-valor donde las claves pueden ser de cualquier tipo (no solo strings o symbols como en los objetos planos). Map también mantiene el orden de inserción y tiene métodos útiles como .size, .clear(), .keys(), .values(), y .entries().
// Usaría Set cuando necesito una colección de valores únicos, sin duplicados. Set es útil para operaciones como verificar la existencia de un elemento, eliminar duplicados de un array, y realizar operaciones de conjuntos (unión, intersección, diferencia).
// Los objetos planos {} son adecuados para estructuras de datos simples con claves de tipo string o symbol, mientras que los arrays [] son ideales para listas ordenadas de elementos donde el orden y la indexación son importantes.
