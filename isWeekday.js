const date = new Date('2010-04-01');

//return index between 0 and 6
//console.log(date.getDay());

//look up the week day text string from the Array
//console.log(weekDays[date.getDay()]);

function isWeekDay(day){
  var weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  return (weekDays.indexOf(day) <= 4);
}
const assert = require ('assert');
assert.equal(isWeekDay("Sunday"), false);
assert.equal(isWeekDay("Tuesday"),true);
