/* Successor function */

// const add = (a, b) => a + b;

const addCurried = (a) => (b) => a + b;

const successor = addCurried(1);

successor(1); // 2
successor(2); // 3
successor(3); // 4


/* Referential transparency */

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

add(multiply(add(1, 2), 4), add(1, 2)); // 15
add(multiply(3, 4), 3); // 15

