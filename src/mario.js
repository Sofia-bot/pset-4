let readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 24;

let height = 0;
let row = "";

console.log("");
while (height < MIN || height > MAX || Number.isNaN(height) || height % 1 != 0) {
  height = Number(readlineSync.question("Height: "));
}
height += 1;
let height2 = height - 2;

console.log("");

while (height2 >= 0) {
  for (let i = 1; i <= height2; i++) {
    row += " ";
  }
  for (let i = height2; i < height; i++) {
    row += "#";
  }
  console.log(row);
  height2--;
  row = "";
}

console.log("");
