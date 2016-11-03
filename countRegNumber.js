function countRegNumber(text){
  var carReg = text.split(",");
  return carReg.length;
}
console.log(countRegNumber('CA 182736,CY 523519,CJ 812328'));
console.log(countRegNumber('CA 42665, AA 12 RT GP'));
