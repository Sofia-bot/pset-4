let readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;
let number;
let prime;

do {
  number = readlineSync.question("Non-negative integer: ");
} while (number < MIN || number > MAX || Number.isNaN(number) || number % 1 != 0);

for (let i = 1; i < number; i++) {
    if (number % i == 0) {
      prime = "Not prime.";
      i = number;
    } else {
      prime = "Prime."
    }
}

console.log(prime);
