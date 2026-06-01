const sumAll = function(min, max) {
  let total = 0
  for (let i = min ; i <= max; i++){
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
