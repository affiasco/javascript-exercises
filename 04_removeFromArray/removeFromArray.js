const removeFromArray = function (arr, ...n) {
  // let newArr;
  for (let i = 0; i < n.length; i++) {
    if (arr.includes(n[i])) {
      arr.splice(arr.indexOf(n[i]), 1);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
