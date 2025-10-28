/*Ejercicio 1 — Validar nombre */
console.log(/^[a-zA-Z\s]+$/.test("Juan Pérez")); // true
console.log(/^[a-zA-Z\s]+$/.test("Juan123")); // false

/*Ejercicio 2 — Validar edad*/
console.log(/^(1[0-1][0-9]|[1-9][0-9]?|120)$/.test("35")); // true
console.log(/^(1[0-1][0-9]|[1-9][0-9]?|120)$/.test("150")); // false

/*Ejercicio 3 — Validar email*/
console.log(/^[\w.-]+@[\w.-]+\.\w{2,}$/.test("correo@mail.com")); // true
console.log(/^[\w.-]+@[\w.-]+\.\w{2,}$/.test("correo@mail")); // false

/*Ejercicio 4 — Validar URL*/
console.log(/^https?:\/\/[\w.-]+\.\w{2,}/.test("https://google.com")); // true
console.log(/^https?:\/\/[\w.-]+\.\w{2,}/.test("ftp://google.com")); // false
