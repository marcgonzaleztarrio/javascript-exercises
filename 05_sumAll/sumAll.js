const sumAll = function (a, b) {
  if (a < 0 || b < 0) return "ERROR";
  if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
  let suma = 0;
  if (b < a) {
    temp = a;
    a = b;
    b = temp;
  }
  for (a; a < b; a++) {
    suma += a;
  }
  return suma + b;
};

// Do not edit below this line
module.exports = sumAll;
