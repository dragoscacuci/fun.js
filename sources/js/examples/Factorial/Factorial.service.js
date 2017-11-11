'use strict';


const factorial = (n) => {
  let result = 1;
  for (let x = 1; x <= n; x += 1) {
    result = x * result;
    console.log('Intermediate result: ', result);
  }
  console.log('Final result: ', result);
  return result;
};


const factorialRecursive = (n) => {
  if (n < 2) {
    // console.trace();
    return n;
  }
  // console.trace();
  return n * factorialRecursive(n - 1);
};


const tailFactorialRecursive = (n) => {
  const recurse = (x, y) => {
    if (y === n) {
      console.trace();
      return x * y;
    }
    console.trace();
    return recurse(x * y, y + 1);
  };

  return recurse(1, 1);
};


export default {
  factorial,
  factorialRecursive,
  tailFactorialRecursive
};