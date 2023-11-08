// let rlSync = require('readline-sync');
// let age = Number(rlSync.question("How old are you?\n"));


// console.log(`You are ${age} years old`);

// for (let i = 1; i < 5; i++) {
//   console.log(`In ${i * 10} years, you will be ${age + (i * 10)} years old.`);
// }

const multiply = (num) => {
  let total = 1;
  for (let i = num; i > 0; i--) {
    //console.log(i + ' ' + num + ' ' + total);
    total *= i;
  }
  return total;
}


const factorial2 = (num) => {
  let factArray = Array.from({length: num}, (_, i) => i + 1)

  //console.log(factArray);
  let counter = 1;


  for (let i = 1; i < factArray.length + 1; i++) {
    //console.log(`${counter} * ${i} = ${counter * i}`);

    counter = i * counter;
  }

  return counter;
  
}

// refactor for recursion

function factorial(number) {
  if (number === 1) {
    return 1;
  }

  return number * factorial(number - 1);
}

const acculamatorFunction = (num) => {
  let factArray = Array.from({length: num}, (_, i) => i + 1)

  return factArray.reduce((acc, ele) => acc * ele, 1);

}

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320


console.log(multiply(1));     // => 1
console.log(multiply(2));     // => 2
console.log(multiply(3));     // => 6
console.log(multiply(4));     // => 24
console.log(multiply(5));     // => 120
console.log(multiply(6));     // => 720
console.log(multiply(7));     // => 5040
console.log(multiply(8));     // => 40320

console.log(acculamatorFunction(1));     // => 1
console.log(acculamatorFunction(2));     // => 2
console.log(acculamatorFunction(3));     // => 6
console.log(acculamatorFunction(4));     // => 24
console.log(acculamatorFunction(5));     // => 120
console.log(acculamatorFunction(6));     // => 720
console.log(acculamatorFunction(7));     // => 5040
console.log(acculamatorFunction(8));     // => 40320

console.log('new');