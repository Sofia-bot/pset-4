/* Multiply every other digit of the card number by two, starting with the second-to-last digit.
Add the products of those digits.
Add the digits that were not initially multiplied by two.
Add the sums from Steps 2 and 3.
If the last digit of the sum from Step 4 is a zero, then the card number is valid.
American Express uses 15-digit numbers, starting with 34 or 37.
Mastercard uses 16-digit numbers, starting with 51, 52, 53, 54, or 55.
Visa uses 13- or 16-digit numbers, starting with 4. */

let readlineSync = require("readline-sync");

const MIN = 0;
let number = -1;
let sum = "";
let sum1 = 0;
let sum2 = 0;
let num;
let card;

console.log("");
while (number < MIN || number % 1 != 0 || Number.isNaN(number)) {
  number = Number(readlineSync.question("Number: "));
}

let number1 = number;
let number2 = number;
let number3 = number;

do {
  let num = number % 10;
  number -= num;
  number = number / 10;
  num = number % 10;
  number -= num;
  number = number / 10;
  sum += num * 2;
} while (number > 0);

sum = Number(sum);

while (sum > 0) {
  let num = sum % 10;
  sum -= num;
  sum = sum / 10;
  sum1 += num;
}

do {
  let num = number1 % 10;
  number1 -= num;
  number1 = number1 / 10;
  sum2 += num;
  num = number1 % 10;
  number1 -= num;
  number1 = number1 / 10;
} while (number1 > 0);

sum1 += sum2;

if (sum1 % 10 != 0) {
  console.log("Invalid.");
  return;
}

for (let i = 1; i <= 15; i++) {
  let num = number3 % 10;
  number3 -= num;
  number3 = number3 / 10;
  if (i == 13) {
    if (number3 == 34 || number3 == 37) {
      card = "Amex.";
      i = 16;
    }
  } else if (i == 14) {
    if (number3 >= 51 && number3 <= 55) {
      card = "Mastercard.";
    } else {
      card = "Invalid."
    }
  } else if (i == 15 || i == 12) {
    if (number3 == 4) {
      card = "Visa.";
    } else {
      card = "Invalid.";
    }
  }
}

console.log("\n" + card + "\n");
