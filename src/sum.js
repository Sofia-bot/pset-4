const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;
let upperBound;
let lowerBound;

console.log("");

do {
  lowerBound = readlineSync.question("Lower bound: ");
  upperBound = readlineSync.question("Upper bound: ");
} while (lowerBound >= upperBound || lowerBound < MIN || upperBound < MIN || lowerBound > MAX || upperBound > MAX || Number.isNaN(upperBound) || Number.isNaN(lowerBound));

lowerBound = 2 * Math.ceil(lowerBound / 2);
upperBound = 2 * Math.floor(upperBound / 2);
const n = (upperBound - lowerBound) / 2 + 1;
let sum = (lowerBound + upperBound) / 2;
sum *= n;
sum = sum.toLocaleString("en");

console.log("\n" + sum + ".\n");
