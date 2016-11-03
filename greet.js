const assert = require('assert');

// after you declared the function
assert.equal(greet('Bob'), 'Hi, Bob!');
//this assert should fail
assert.equal(greet('Sibu'), 'Hi, Sibo');

function greet(name){
  console.log("Goodmorning "+name);
}
