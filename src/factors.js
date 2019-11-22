let readlineSync = require("readline-sync");

MIN = 1;
MAX = Number.MAX_SAFE_INTEGER;

let positiveInteger = -1;
let factor;
let factorString = "";
let num;

while (positiveInteger <= MIN || positiveInteger >= MAX || Number.isNaN(positiveInteger) || positiveInteger % 1 != 0) {
  positiveInteger = Number(readlineSync.question("Positive integer: "));
}

for (let i = 1; i <= positiveInteger; i++) {
  factor = positiveInteger / i;
  num = positiveInteger / factor;
    if (factor % 1 == 0 && num != factor) {
      factorString += i + ", ";
      factorString += factor + ", ";
    } else if (num == factor) {
      factorString += i + ".";
      i = positiveInteger + 1;
    }
  }


console.log(factorString);
