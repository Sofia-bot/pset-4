let readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;
let number;
let prime;

console.log("");
do {
  number = readlineSync.question("Non-negative integer: ");
} while (number < MIN || number > MAX || Number.isNaN(number) || number % 1 != 0);

if (number == 0 || number == 1) {
  console.log("\nNot prime.");
  return;
} else if (number == 2) {
  console.log("\nPrime.") {
    return;
  }
}

for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      prime = "Not prime.";
      i = number;
    } else {
      prime = "Prime."
    }
}

console.log("\n" + prime + "\n");
