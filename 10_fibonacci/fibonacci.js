const fibonacci = function (n) {
  if (n < 0) {
    return "OOPS";
  }

  let b = +n;

  if (b <= 1) return b;

  return fibonacci(b - 1) + fibonacci(b - 2);
};
// Do not edit below this line
module.exports = fibonacci;
