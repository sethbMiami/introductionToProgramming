console.log(false || (true && false));
console.log(true || (1 + 2));
console.log((1 + 2) || true);
console.log(true && (1 + 2));
console.log(false && (1 + 2));
console.log((1 + 2) && true);
console.log((32 * 4) >= 129);
console.log(false !== !true);
console.log(true === 4);
console.log(false === (847 === '847'));
console.log(false === (847 == '847'));
console.log((!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false);

let evenOrOdd = (num) => {
  if (typeof num === 'number') {
    if (num % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('Enter a number');
  }
}

evenOrOdd(10);
evenOrOdd('e')
evenOrOdd(5);
evenOrOdd(14398);
evenOrOdd(true);

let allCaps = (str) => {
  str = String(str);
  if (str.length >= 10) {
    return str.toUpperCase();
  } else {
    return str;
  }
}

console.log(allCaps('this is longer than 10'));
console.log(allCaps('this isnt'));
console.log(allCaps('no'));
console.log(allCaps(55 + 'no'));
console.log(allCaps(1234567890 + 'test'));

let numberRange = (num) => {
  if (num <= 50 && num >= 0) {
    console.log('0 to 50 range');
  } else if (num <= 100 && num >= 51){
    console.log('51 to 100 range');
  } else if (num > 100) {
    console.log('greater than 100 range');
  } else {
    console.log('less than 0 range');
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);