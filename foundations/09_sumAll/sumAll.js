const sumAll = function(min, max) {
  if (min < 0 || max < 0) return 'ERROR';
  if (Math.floor(min) !== min || Math.floor(max) !== max) return 'ERROR';
  let total = 0
  const start = Math.min(min, max);
  const end = Math.max(min, max);
  for (let i = start ; i <= end; i++){
    total += i;  
  }
  return total;


  //1. declare a variable to hol the running total, start it at 0
  //2. loop with i from min to max (inclusive)
  //3. inside the loop, add i to the total
  //4. after the loop, return the total


};

// Do not edit below this line
module.exports = sumAll;
