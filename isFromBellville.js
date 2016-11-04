/*
* This function check if a car registration is from belville
* It does this using the built-in method, startsWith()
*/
function isFromBellville(carReg){
  return carReg.startsWith('CY');
}
console.log();
const assert = require('assert');
assert.equal(isFromBellville('CY 523519'),true);
assert.equal(isFromBellville('CJ 812328'),false);
