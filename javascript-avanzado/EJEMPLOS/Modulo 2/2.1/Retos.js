//1.Crea una función esNumeroSeguro(valor) que devuelva true solo si el valor puede usarse como número sin fallar.
function esNumeroSeguro(valor) {
  const numero = Number(valor);
  return (
    typeof numero === "number" &&
    !Number.isNaN(numero) &&
    Number.isFinite(numero)
  );
}
console.log(esNumeroSeguro("42")); // true
console.log(esNumeroSeguro("10px")); // false
console.log(esNumeroSeguro(NaN)); // false
console.log(esNumeroSeguro(Infinity)); // false
console.log(esNumeroSeguro(100));
console.log(esNumeroSeguro([])); // true
console.log(esNumeroSeguro({})); // false

//2.Crea una función clasificar(valor) que diga tipo, si es truthy/falsy y cualquier rareza detectada.
function clasificar(valor) {
  const tipo = typeof valor;
  // Determinar si es truthy o falsy, usando el operador Boolean para conversión explícita
  const esTruthy = Boolean(valor) ? "truthy" : "falsy";
  let rareza = [];
  if (tipo === "number") {
    if (Number.isNaN(valor)) rareza.push("NaN");
    if (!Number.isFinite(valor)) rareza.push("Infinito");
  }
  if (valor === null) rareza.push("null");
  if (Array.isArray(valor)) rareza.push("Array");
  return {
    tipo: tipo,
    truthy_o_falsy: esTruthy,
    rarezas: rareza.length > 0 ? rareza : ["Ninguna"],
  };
}
console.log(clasificar(0));
console.log(clasificar("Hola"));
console.log(clasificar(NaN));
console.log(clasificar([]));
console.log(clasificar(null));
console.log(clasificar(Infinity));
