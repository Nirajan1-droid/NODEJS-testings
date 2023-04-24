const assert = require('assert');
const { CallTracker} = require('assert');

// Define some tests:
function testAddition() {
  assert.strictEqual(2 + 2, 4);
}

function testSubtraction() {
  assert.strictEqual(5 - 3, 2);
}

function testMultiplication() {
  assert.strictEqual(6 * 7, 42);
}

// Run the tests:
const tests = [testAddition, testSubtraction, testMultiplication];

const tracker = new CallTracker();
//tracks the call of the different assert in anywhere in the code to ensure all assertions are amde during the test are tacker the callTracker object
// tracker.install();

tests.forEach((test) => {
  test();
});

tracker.verify();
