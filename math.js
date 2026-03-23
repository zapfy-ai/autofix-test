// Simple math utilities

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error("Division by zero");
  return a / b;
}

module.exports = { add, subtract, multiply, divide };
// re-trigger CI 1774300483
// trigger 1774301659
// retrigger 1774301883
// final test 1774302107
// trigger
// E2E Fly Machine Test 1774305772
// E2E Fly Machine Test 2 1774305844
