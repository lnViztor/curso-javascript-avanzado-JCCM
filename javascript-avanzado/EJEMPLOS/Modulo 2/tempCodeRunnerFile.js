function clasificar(valor) {
  const tipo = typeof valor;
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
    rarezas: rareza.length > 0 ? rareza : ["Ninguna"]
  };
}
console.log(clasificar(0));
console.log(clasificar("Hola"));
console.log(clasificar(NaN));
console.log(clasificar([]));
console.log(clasificar(null));
console.log(clasificar(Infinity));  