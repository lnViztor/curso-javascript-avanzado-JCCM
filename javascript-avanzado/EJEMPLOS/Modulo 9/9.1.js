//Ejercicio 1 — Sumar números con Rest
function sumar(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}
sumar(2, 3); // 5
sumar(5, 10, 15); // 30
