const date = new Date('2010-04-01');

//return index between 0 and 6
//console.log(date.getDay());

//look up the week day text string from the Array
//console.log(weekDays[date.getDay()]);

function isWeekDay(day){
  var weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  return (weekDays.indexOf(day) <= 4);
}
/*
This function accepts day as a parameter
uses the first character to determine if its a weekday
return true otherwise false.
*/
/*var isWeekDay = function(day){
  return !day.startsWith('S');
};*/

const assert = require ('assert');
assert.equal(isWeekDay("Sunday"), false);
assert.equal(isWeekDay("Wednesday"),true);
assert.equal(isWeekDay("Thursday"),true);
