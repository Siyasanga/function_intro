/*
* This function check if a car registration is from Gauteng
* It does this using the built-in methods, startsWith() and endsWith()
*/
function isFromGauteng(carReg){
  return (carReg.startsWith('DR') && carReg.endsWith('GP'));
}
console.log(isFromGauteng('CJ 523519'));
console.log(isFromGauteng('DR 812328 GP'));
