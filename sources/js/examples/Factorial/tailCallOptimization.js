'use strict';

const tailFactorialRecursive = (n) => {
  const recurse = (x, y) => {
    if (y === n) {
      return x * y;
    }
    return recurse(x * y, y + 1);
  };

  return recurse(1, 1);
};

console.log(tailFactorialRecursive(10000000));
