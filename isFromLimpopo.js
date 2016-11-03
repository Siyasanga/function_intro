/*
* This function check if a car registration is from Limpopo
* It does this using the built-in methods, startsWith() and endsWith()
*/
function isFromLimpopo(carReg){
  return (carReg.startsWith('DRT') && carReg.endsWith('L'));
}
const assert = require ('assert');
assert.equal(isFromPaarl('DRT 122 L'), true);
console.log(isFromLimpopo('CJ 523519'));
console.log(isFromLimpopo('DRT 122 L'));
