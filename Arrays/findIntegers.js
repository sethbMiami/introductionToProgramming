//Write a findIntegers function that takes an array argument and returns an array that contains only the integers from the input array. Use the filter method in your function.

let findIntegers = (arr) => {
  return arr.filter((num) => {
    return Number.isInteger(num);
  })
}

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]
 

let oddLengths = (array) => {
  return array.map(word => word.length).filter(count => count % 2 !== 0);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

let names = ['bob', 'tooby', 'flippymon', 'sa', 'douendiejke', 'whatup'];
console.log(oddLengths(names));

// find the sum of all the elements squared in an array

let sumOfSquares = (array) => {
  return array.reduce((acc, num) => acc + num * num, 0);
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

//Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter. Instead, try to use the reduce method.
let oddLengths2 = (strings) => {
  return strings.reduce((filteredNumbersArray, letters) => {
    let length = letters.length;
    if (length % 2 === 1) {
      filteredNumbersArray.push(length);
    }

    return filteredNumbersArray;
  }, []);
}

let arrayWords = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths2(arr)); // => [1, 5, 3]

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

console.log(numbers1.includes(3));
console.log(numbers2.includes(3));
console.log(numbers3.includes(3));

let arrTest = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

arrTest[1][3] = 606;

console.log(arrTest);