const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;
let integer;
let num;
let reverse = "";

console.log("");
do {
  integer = readlineSync.question("Positive integer: ");
} while (integer < MIN || integer > MAX || Number.isNaN(integer) || integer % 1 != 0);

do {
  num = integer % 10;
  reverse += num + ", ";
  integer -= num;
  integer = integer / 10;
} while (integer > 10);

reverse += integer + ".";

console.log("\n" + reverse + "\n");
