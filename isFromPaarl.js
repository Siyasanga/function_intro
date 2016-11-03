/*
* This function check if a car registration is from Paarl
* It does this using the built-in method, startsWith()
*/
function isFromPaarl(carReg){
  return carReg.startsWith('CJ');
}
const assert = require ('assert');
assert.equal(isFromPaarl('CJ 523519'), true);
console.log(isFromPaarl('CJ 523519'));
console.log(isFromPaarl('CA 812328'));
