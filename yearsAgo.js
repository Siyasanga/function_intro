/*
* This function takes in a date parameter then calculates
* how many years ago the year is.
*/
function yearsAgo(year){
  return (new Date().getFullYear() -year.getFullYear());
}
year = new Date();
year.setFullYear(2000)  // Setting the year to 2000
const assert = require('assert');
// Making sure the yearsAgo function works as expected
assert.equal(yearsAgo(year),16);
