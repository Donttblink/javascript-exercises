const leapYears = function(year) {
  const isLeap = true;
  const notLeap = false;
  if (Math.floor(year) !== year) return 'ERROR';
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    return isLeap;
    }else {
    return notLeap;
  }

  };
 
  //input year
  //check if year is leap year (divisible by 4 and not divisible by 100 unless divisible by 400)
  //if is a leap year return true
  //not a leap year return false


// Do not edit below this line
module.exports = leapYears;
