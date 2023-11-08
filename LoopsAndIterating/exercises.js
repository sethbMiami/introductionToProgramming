// let rlSync = require('readline-sync');
// let age = Number(rlSync.question("How old are you?\n"));


// console.log(`You are ${age} years old`);

// for (let i = 1; i < 5; i++) {
//   console.log(`In ${i * 10} years, you will be ${age + (i * 10)} years old.`);
// }


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

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320
