const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;
let integer;

do {
  integer = readlineSync.question("Positive integer: ");
} while (integer < MIN || integer > MAX);

integer = integer.split("");
console.log(integer);
