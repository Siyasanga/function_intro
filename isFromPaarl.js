/*
* This function check if a car registration is from Paarl
* It does this using the built-in method, startsWith()
*/
function isFromPaarl(carReg){
  return carReg.startsWith('CJ');
}
console.log(isFromPaarl('CJ 523519'));
console.log(isFromPaarl('CA 812328'));
