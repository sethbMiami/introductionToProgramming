const person = {
  name: 'Seth',
  age: 33,
  school: 'LaunchSchool',
  hobbies: ['swimming', 'friends', 'videogames', 'movies']

};

const person2 = {
  height: "6'4",
  weigth: 180
};

let littlePerson = Object.create(person);
littlePerson.name = 'Emily';
littlePerson.age = 26;

console.log(person.name + ' loves ' + littlePerson.name);

let bob = { name: 'Bob', age: 22 };
let studentBob = Object.create(bob);
studentBob.year = 'Senior';

console.log(studentBob); // => 'Bob'

for (let key in littlePerson) {
  if (littlePerson.hasOwnProperty(key)) {
    console.log(littlePerson[key]);
  }
}

for (let item in person.hobbies) {
  console.log(person.hobbies[item]);
}

console.log(person.hobbies.indexOf('friends'));

console.log(Object.keys(person));

console.log(Object.values(person));

const combineObjects = Object.assign({}, person, person2);

console.log(combineObjects);

console.log('Excercise 1');
let person3 = {
  name:       'Bob',
  occupation: 'web developer',
  hobbies:    'painting',
};

console.log(person3.name);

console.log('Excercise 3');

let myArray = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

console.log('Exercise 4');

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objArray = Object.keys(obj);
let upperKeys = objArray.map((key) => key.toUpperCase());

console.log(upperKeys);

console.log('Exercise 5');


let myProtoObj = {
  foo: 1,
  bar: 2,
};

let newObject = Object.create(myProtoObj);

console.log(newObject.foo);

console.log('Exercise 8');


let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let copyObj = (obj, keyArray = ['foo', 'bar', 'qux']) => {
  obj = Object.create(objToCopy);

  obj = keyArray.map((key) => obj[key]);

  return obj;
}

let newObj = copyObj(objToCopy, ['foo', 'bar']);

console.log(newObj);

console.log('Exercise 11');

let obj11 = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

obj11.bar[3].xyz = 606;

console.log(obj11);

console.log('Exercise 12');

// function foo(bar) {
//   console.log(bar, bar, bar);
// }
//let bar = foo;
//foo("hello"); // should print "hello hello hello"
//bar("hi");    // should print "hi hi hi"

console.log('Exercise 13');


function foo(bar) {
  console.log(bar());
}

foo(function() {return 'Welcome'});    // Should print 'Welcome'
foo(function() {return 3.1415});    // Should print 3.1415
foo(function() {return [1, 2, 3]});    // Should print [1, 2, 3]

//regex tests

let test1 = /t/.test('run');

let test2 = /se/.test('seth');

console.log(test1, test2);

if (/123/.test('123456')){
  console.log('This string contains the consecutive numbers 123');
}