const assert = require('node:assert');

// Generate an AssertionError to compare the error message later:
const { message } = new assert.AssertionError({
  actual: 1,
  expected: 2,
  operator: '+',
});

// Verify error output:
try {
  assert.strictEqual(1, 2);
} catch (err) {
  assert(err instanceof assert.AssertionError);
  assert.strictEqual(err.message, message);
  assert.strictEqual(err.name, 'nirajanerror');//error name is written here to identify the type of error occurred
  assert.strictEqual(err.actual, 1);
  assert.strictEqual(err.expected, 2);//here i expected 0 which generates errir
  assert.strictEqual(err.code, 'ERR_ASSERTION');
  assert.strictEqual(err.operator, '+');
  assert.strictEqual(err.generatedMessage, false);
}