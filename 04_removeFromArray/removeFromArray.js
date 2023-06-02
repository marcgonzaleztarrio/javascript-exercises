const removeFromArray = function (arr, numero) {
  return (arr = arr.filter((item) => item !== numero));

  const removeFromArray = function (array, ...args) {
    const x = [];
    array.forEach((item) => {
      if (!args.includes(item)) {
        x.push(item);
      }
    });
    return x;
  };
};

// Do not edit below this line
module.exports = removeFromArray;
