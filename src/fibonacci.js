const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 78;
let n = 0;
let c;
let a = 0;
let b = 1;

while (n < MIN || n > MAX || Number.isNaN(n) || n % 1 != 0) {
  n = Number(readlineSync.question("\nPositive integer: "));
}

for (let i = 2; i <= n; i++) {
  c = a + b;
  a = b;
  b = c;
}
c = c.toLocaleString("en");
console.log("\n" + c + ".");
