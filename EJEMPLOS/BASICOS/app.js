




function saludar() {
  console.log("Hola");
}


const saludar = () => 'hola'   // 1 line functions son bastante NINJA
     


const d=x=>x*2 



const funcionimpura = () => new Date()


function dividir(a, b) {
  let resultado
  if (b === 0) resultado = "No se puede dividir entre 0";
  else resultado = a / b;
  return resultado
}

const dividir = (a,b) =>  b===0 ? "No se puede dividir entre 0" : a/b 



const ponerNombresEnMayuscula1 = (nombres) => {
    let resultado = [];
    for(const nombre in nombres) {
        resultado.push(nombre.toUpperCase())
    }
    return resultado
}


const ponerNombresEnMayuscula2 = (n) => n.map((n) => n.toUpperCase())