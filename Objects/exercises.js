const person = {
  name: 'Seth',
  age: 33,
  school: 'LaunchSchool',
  hobbies: ['swimming', 'friends', 'videogames', 'movies']

};

let littlePerson = Object.create(person);
littlePerson.name = 'Emily';
littlePerson.age = 26;

console.log(person.name + ' loves ' + littlePerson.name);

let bob = { name: 'Bob', age: 22 };
let studentBob = Object.create(bob);
studentBob.year = 'Senior';

console.log(studentBob); // => 'Bob'