let array = [ 1, 4, 3, 10, 'a', null, 'xyz' ];
console.log(array);


console.log(array.concat(42, 'abc'));
//= [ 1, 4, 3, 10, 'a', null, 'xyz', 42, 'abc' ]

console.log(array);

let array2 = [1, 4, 3, 2];
console.log(array2);

array2.push(7, 8);

console.log(array2);

arraySplice = [1, 2, 3, 4, 5, 6];
console.log(arraySplice);

arraySplice.splice(1, 3);
console.log(arraySplice);

array.forEach(function(item) {
  console.log(item);
})

let newArray = arraySplice.map(num => num * num);

console.log(newArray);

let arrayFilter = [1, 2, 3, 4, 5, 6, 7];

console.log(arrayFilter);

let newArrayFilter = arrayFilter.filter(num => num > 4);

console.log(newArrayFilter);

let arrayLength = [1, 2, 3];
console.log(arrayLength.length);

console.log(typeof arrayLength);
console.log(Array.isArray(arrayLength));

//returns false
console.log([1,2,3] === [1,2,3]);

let a = ["e", "c", "h", "b", "d", "a"]
a.sort()
//= [ 'a', 'b', 'c', 'd', 'e', 'h' ]
console.log(a);

let arrayOne = [1, 2, undefined, 4];

let arrayTwo = [1];
arrayTwo.length = 5;

let array3 = [];
array3[-1] = [1];

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;

let array5 = [];
array5[100] = 3;

console.log(arrayOne.length);
console.log(arrayTwo.length);
console.log(array3.length);
console.log(array4.length);
console.log(array5.length);


let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

let newMyArray = myArray.filter(num => num % 2 === 0);
//console.log(newMyArray);
console.log('break');

let myArrayTwo = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0]
];

for(var i = 0; i < myArrayTwo.length; i++){
  for(var j = 0; j < myArrayTwo[i].length; j++){
      if (myArrayTwo[i][j] % 2 === 0) {
        console.log(myArrayTwo[i][j]);
      }
  }
}

let stringArray = myArray.map((num) => {
  if (num % 2 === 0) {
    return 'even';
  }
  return 'odd';
})

console.log(stringArray);
