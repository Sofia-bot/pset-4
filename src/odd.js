const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;
let integer;
let num;
let sum = 0;

console.log("");
do {
  integer = readlineSync.question("Positive integer: ");
} while (integer <= MIN || integer > MAX);

do {
  num = integer % 10;
    if (num % 2 != 0) {
      sum += num;
    }
  integer -= num;
  integer = integer / 10;
} while (integer > 0);

console.log("\n" + sum + ".");
