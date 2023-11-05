let rlSync = require('readline-sync');

let getName = (prompt) => {
  let response = rlSync.question(prompt);
  return response;
}
let firstName = getName("What's your first name?\n");
let lastName = getName("What's your last name?\n");


console.log(`Hello ${firstName} ${lastName}!`);