const fibonacci = function (n) {
  let count;
  if (typeof n !== "number") {
    count = parseInt(n);
  } else {
    count = n;
  }
  if (count === 0) {
    return 0;
  }
  if (count < 0) {
    return "OOPS";
  }

  let firstPrev = 1;
  let secondPrev = 0;
  for (let i = 2; i <= n; i++) {
    let current = firstPrev + secondPrev;
    secondPrev = firstPrev;
    firstPrev = current;
  }
  return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
