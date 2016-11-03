/*
* This function check if a car registration is from Cape Town
* It does this using the built-in method, startsWith()
*/
function isFromCapeTown(carReg){
  return carReg.startsWith('CA');
}
console.log(isFromCapeTown('CY 523519'));
console.log(isFromCapeTown('CA 812328'));
