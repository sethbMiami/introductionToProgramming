let rlSync = require('readline-sync');

let multiply = (firstNum, secondNum) => {
  return firstNum * secondNum;
}
let firstNumber = Number(rlSync.question("Enter a number\n"));
let secondNumber = Number(rlSync.question("Enter another number?\n"));

let answer = multiply(firstNumber, secondNumber);

console.log(`${firstNumber} x ${secondNumber} = ${answer}`);