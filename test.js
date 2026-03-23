// Simple test runner
const { add, subtract, multiply, divide } = require("./math");

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    passed++;
    console.log(`  ✅ ${message}`);
  } else {
    failed++;
    console.error(`  ❌ ${message}`);
  }
}

console.log("Running tests...\n");

// These should pass
assert(add(2, 3) === 5, "add(2, 3) === 5");
assert(subtract(10, 4) === 6, "subtract(10, 4) === 6");
assert(multiply(3, 4) === 12, "multiply(3, 4) === 12");
assert(divide(10, 2) === 5, "divide(10, 2) === 5");

// 🐛 BUG: This test references a function that doesn't exist yet
assert(typeof require("./math").power === "function", "power function exists");
assert(require("./math").power(2, 3) === 8, "power(2, 3) === 8");

console.log(`\nResults: ${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
