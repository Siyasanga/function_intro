/*
* This function accepts a string parameter called text
* Perfoms a split function on it
* Then returns the number of car registrations in text.
*/

function countRegNumber(text){
  var carReg = text.split(","); // Splitting the String with ',' as a delimeter
  return carReg.length;
}
const assert = require('assert');
var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328');
console.log(regCount);
assert.equal(regCount, 3);
//console.log(countRegNumber('CA 42665, AA 12 RT GP'));
