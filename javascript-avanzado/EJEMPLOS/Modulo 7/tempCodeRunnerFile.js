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