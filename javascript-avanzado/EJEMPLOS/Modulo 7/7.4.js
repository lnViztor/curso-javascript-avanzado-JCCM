//Ejercicio 1 — GET simple
async function getUsuarios() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}
getUsuarios();

//Ejercicio 2 — Manejo de error HTTP
async function getUsuario(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}
getUsuario(1);
getUsuario(999); // Usuario inexistente para probar el manejo de errores

//Ejercicio 3 — Enviar datos con POST
async function crearUsuario(usuario) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  });
  const data = await res.json();
  console.log(data);
}
crearUsuario({ name: "Nuevo Usuario", email: "prueba@prueba.es" });
