# Módulo 01 – Introducción a JavaScript

## 1. Historia breve de JavaScript

JavaScript fue creado en 1995 por **Brendan Eich** en solo 10 días mientras trabajaba en **Netscape**. Su objetivo inicial fue **hacer las páginas web interactivas**. Originalmente se llamó **Mocha**, luego **LiveScript** y finalmente **JavaScript** como estrategia de marketing debido a la popularidad de Java.

Durante mucho tiempo JavaScript fue considerado un lenguaje “menor” usado solo para animar páginas o validar formularios en el navegador. Todo cambió en 2009 con la aparición de **Node.js**, que permitió ejecutar JavaScript también en el **servidor**, convirtiéndolo en un lenguaje **multipropósito**.

---

## 2. ¿Qué es JavaScript hoy?

JavaScript es un lenguaje:

✅ Interpretado (ejecutado línea a línea).  
✅ Dinámico y de tipado débil.  
✅ Basado en prototipos.  
✅ Multiparadigma: permite estilo imperativo, funcional y orientado a objetos.  
✅ Asíncrono y no bloqueante.  
✅ Ejecutable en cliente (navegador) y servidor (Node.js).  


Es uno de los pilares del desarrollo web moderno junto con **HTML** y **CSS**, y el único lenguaje capaz de ejecutarse de forma nativa en los navegadores.

---

## 3. ¿Dónde se ejecuta JavaScript?

| Entorno   | Uso principal | Ejemplo                            |
| --------- | ------------- | ---------------------------------- |
| Navegador | Frontend      | Manipular DOM, eventos, fetch      |
| Node.js   | Backend       | APIs, servidores, CLI herramientas |

JavaScript no se ejecuta directamente — necesita un **motor JavaScript** dentro de un runtime como el navegador o Node.js.

---

## 4. Arquitectura de ejecución

### Motores JavaScript más importantes

| Motor          | Plataforma              | Lenguaje base |
| -------------- | ----------------------- | ------------- |
| V8 ⚡           | Google Chrome / Node.js | C++           |
| SpiderMonkey   | Firefox                 | C++           |
| JavaScriptCore | Safari                  | C++           |

---

### ¿Qué es el Call Stack?

Es la “pila” donde se apilan las funciones que se están ejecutando en orden.

```js
function a() { b(); }
function b() { c(); }
function c() { console.log("Hola"); }
a();
```

---

### ¿Qué es el Heap?

Zona de memoria donde se guardan valores y objetos.

---

### Web APIs y Event Loop

JavaScript **no es multihilo**, pero puede hacer tareas asíncronas gracias al **event loop** que coordina la ejecución junto con Web APIs.

---

## 5. ECMAScript (ECMA)

JavaScript está estandarizado bajo **ECMAScript (ES)**.

| Versión        | Año       | Cambios clave                                  |
| -------------- | --------- | ---------------------------------------------- |
| ES5            | 2009      | Strict mode, JSON                              |
| ES6 (ES2015) ✅ | 2015      | let, const, arrow functions, clases, módulos   |
| ES7–ES13       | 2016–2022 | async/await, includes, optional chaining, etc. |

Hoy se usa principalmente **ES6+**.

---

## 6. Herramientas de desarrollo (DevTools)

En cualquier navegador moderno:

🔧 Abrir DevTools

* Windows/Linux: `F12` o `Ctrl + Shift + I`
* Mac: `Cmd + Option + I`

Usos:

```js
console.log("Mensaje normal");
console.warn("Advertencia");
console.error("Error");
console.table([{id:1},{id:2}]);
```

---

## 7. Ejecutar JavaScript

### En navegador (console)

Desde DevTools → pestaña Console.

### Con archivo JS

HTML:

```html
<script src="app.js"></script>
```

### Scripts profesionales

```html
<script src="app.js" defer></script>
```

---

## 8. Frontend vs Backend con JS

| Característica | Frontend (Browser) | Backend (Node.js) |
| -------------- | ------------------ | ----------------- |
| DOM            | ✅ Sí               | ❌ No              |
| Fetch          | ✅ Sí               | ✅ Sí (node-fetch) |
| Acceso sistema | ❌ No               | ✅ Sí              |
| Server HTTP    | ❌ No               | ✅ Sí              |

---

## 9. Entorno en Codespaces

En Codespaces tenemos:

✔ Node.js preinstalado
✔ Navegador integrado (preview)
✔ Terminal para scripts
✔ Live Server o Docker para probar HTML/JS

---

## 10. Laboratorio básico

### Paso 1 – Probar JavaScript en consola

Abre DevTools → Console → escribe:

```js
console.log("Hola desde el navegador");
```

### Paso 2 – Ejecutar JavaScript en Node.js

En terminal de Codespaces:

```bash
node -v
node
> console.log("Hola desde Node");
```

### Paso 3 – Primer script HTML+JS

index.html:

```html
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><title>Intro JS</title></head>
<body>
  <h1>Hola JS</h1>
  <script src="app.js"></script>
</body>
</html>
```

app.js:

```js
console.log("Cargando script desde archivo...");
```

### Paso 4 – Ejecutar con Live Server

* Click derecho sobre index.html
* Seleccionar **Open with Live Server**

### Paso 5 – (Opcional) Servir con Docker en Codespaces

Dockerfile:

```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
```

```bash
docker build -t miapp .
docker run -p 8080:80 miapp
```

---

## 11. Cierre

En este módulo has aprendido:
✅ Qué es JavaScript y dónde se ejecuta
✅ Qué son motor JS, call stack y event loop
✅ Qué significa ECMAScript
✅ Cómo usar la consola y ejecutar JS
✅ Cómo trabajar desde Codespaces

Ahora estás listo para entrar en JS moderno con bases sólidas 💪
