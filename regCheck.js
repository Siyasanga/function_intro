const assert = require('assert');
var isGP = regCheck('DV 23 NB GP', 'GP');
assert.equal(regCheck('DV 23 NB GP', 'GP'), true);
//should print true
console.log(isGP);

var isMP = regCheck('DV 23 LP GP', 'MP');
assert.equal(regCheck('DV 23 LP GP', 'MP'), false);
//should print false
console.log(isMP);

// should return true
var isBellville = regCheck('CY189-012', 'CY');
assert.equal(regCheck('CY189-012', 'CY'), false);

//should return false
var isDurban = regCheck('CY189-012', 'ND');
assert.equal(regCheck('CY189-012', 'ND'), false);

function regCheck(carReg, location){
  return carReg.endsWith(location);
}
