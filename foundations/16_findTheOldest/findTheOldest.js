const findTheOldest = function (people) {
  const oldest = people.reduce((a, b) => {
    const now = new Date().getFullYear();
    if (a.yearOfDeath === undefined) {
      a.yearOfDeath = now;
    };
    if (b.yearOfDeath === undefined) {
      b.yearOfDeath = now;
    }
    const lastGuy = a.yearOfDeath - a.yearOfBirth;
    const nextGuy = b.yearOfDeath - b.yearOfBirth;
    return lastGuy > nextGuy ? a : b;
  });
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
