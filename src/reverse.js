const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;
let integer;
let num;
let reverse = "";

do {
  integer = readlineSync.question("\nPositive integer: ");
} while (integer < MIN || integer > MAX);

do {
  num = integer % 10;
  reverse += num + ", ";
  integer -= num;
  integer = integer / 10;
} while (integer > 10);

reverse += integer + ".";

console.log("\n" + reverse);
