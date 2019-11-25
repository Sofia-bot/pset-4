let readlineSync = require("readline-sync");

MIN = 1;
MAX = Number.MAX_SAFE_INTEGER;

let positiveInteger = -1;
let factor;
let factorString = "1";
let num;
let num2;

console.log("");

while (positiveInteger <= MIN || positiveInteger >= MAX || Number.isNaN(positiveInteger) || positiveInteger % 1 != 0) {
  positiveInteger = Number(readlineSync.question("Positive integer: "));
}

for (let i = 1; i <= positiveInteger; i++) {
  factor = positiveInteger / i;
  num = positiveInteger / factor;
    if (num == factor && num2 != i) {
        i = positiveInteger + 1;
    } else if (num2 == i) {
        i = positiveInteger + 1;
    } else if (factorString == "1") {
        factorString += ", " + factor;
        num2 = factor;
    } else if (factor % 1 == 0 && num != factor && num2 != i && factorString != "1") {
        factorString += ", " + i + ", ";
        factorString += factor;
        num2 = factor;
    }
  }


console.log("\n" + factorString + ".\n");
