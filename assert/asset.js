// const assert = require('node:assert/strict');

// assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);
// AssertionError: Expected inputs to be strictly deep-equal:
// + actual - expected ... Lines skipped
//
//   [
//     [
// ...
//       2,
// +     3
// -     '3'
//     ],
// ...
//     5
//   ]


//assert module is aprticulary useful for writing tests and ensuring that the code behaves as expected 
//when the test fails the asset module will throw an error allowing developer to identify and fix the problem

const assert = require('assert');

function add(a, b) {
  return a + b;
}

// Test the add function
assert.strictEqual(add(2, 3), 0);//here if the output expected if set to 0 then the error is error is going to be thrown
assert.strictEqual(add(2, -3), -1);
assert.strictEqual(add(-2, -3), -5);
