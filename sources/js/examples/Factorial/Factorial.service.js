'use strict';

const factorial = (n) => {
  var result = 1;
  for (var x = 1; x <= n; x += 1) {
    result = x * result;
    console.log('Intermediate result: ', result);
  }
  console.log('Final result: ', result);
  return result;
};

const factorialRecursive = (n, trace) => {
  if (n < 2) {
    trace && console.trace();
    return n;
  }
  trace && console.trace();
  return n * factorialRecursive(n - 1, trace);
};

const tailFactorialRecursive = (n) => {
  const recurse = (x, y) => {
    if (y === n) {
      return x * y;
    }
    return recurse(x * y, y + 1);
  };

  return recurse(1, 1);
};

export default {
  factorial,
  factorialRecursive,
  tailFactorialRecursive
};