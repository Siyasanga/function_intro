
function getDay(date){
  var weekDays = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  Adate = date.split("/"); //extracting data from the date parameter
  day = new Date();
  day.setFullYear(Adate[2],Adate[1]-1,Adate[0]); //setting new date values with Adate list items
  return weekDays[day.getDay()];
}

function sameWeekday(date1,date2){
  return getDay(date1) == getDay(date2);
}
const assert = require('assert');
assert.equal(sameWeekday('4/11/2016','18/11/2016'),true);
assert.equal(sameWeekday('4/11/2016','17/11/2016'),false);
