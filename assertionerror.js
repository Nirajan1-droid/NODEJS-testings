const assert = require('assert');

function assertIsEven(value) {
  assert.ok(value % 2 === 0, `${value} is not even`);
}

assertIsEven(2); // Passes
assertIsEven(3); // Throws an AssertionError: "3 is not even"
