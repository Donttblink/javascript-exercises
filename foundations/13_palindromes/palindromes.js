const palindromes = function (str) {
  let cleanString = "";
  for (let i = 0; i < str.length; i++) {
    const c = str[i].toLowerCase();
    if ((c >= "a" && c <= "z") || (c >= "0" && c <= "9")) {
      cleanString += c;
    }
  };
  let reversed = cleanString.split('').reverse().join('');
  return cleanString === reversed;
};

// Do not edit below this line
module.exports = palindromes;
