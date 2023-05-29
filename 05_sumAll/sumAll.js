const sumAll = function (n1, n2) {
  if (n1 < 0 || n2 < 0) return "ERROR";
  if (typeof n1 !== "number" || typeof n2 !== "number") return "ERROR";
  let count = 0;
  let small;
  let large;

  if (n1 < n2) {
    small = n1;
    large = n2;
  } else {
    small = n2;
    large = n1;
  }

  for (let i = small; i <= large; i++) {
    count += i;
  }
  return count;
};

// Do not edit below this line
module.exports = sumAll;
