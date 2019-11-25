let readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;
let posNum = 0;
let avg = 0;
let numbers = 0;

console.log("");
while (posNum >= MIN || posNum % 1 != 0 || Number.isNaN(posNum)) {
  posNum = Number(readlineSync.question("Non-negative integer: "));
  while (posNum >= MIN && posNum <= MAX && posNum % 1 == 0) {
    avg += posNum;
    numbers++;
    posNum = MAX + 1;
  }
}

avg /= numbers;
avg = avg.toLocaleString ("en", {minimumFractionDigits: 3, maximumFractionDigits: 3});

console.log("\n" + avg + ".\n");
