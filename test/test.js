const movement = require('../assets/js/app.js');
const jquery = require('jquery');
const assert = require('chai').assert;

describe('movement', function() {
it('should add two numbers', function () {
assert.equal(5, movement.addNumber(2, 3));
assert.equal(9, movement.addNumber(3, 6));
});

it('should substract two numbers', function () {
assert.equal(5, movement.substractNumber(8, 3));
assert.equal(3, movement.substractNumber(9, 6));
});

it('should multiply two numbers', function () {
assert.equal(9, movement.multiplyNumber(3, 3));
assert.equal(10, movement.multiplyNumber(2, 5));
});

it('should divide two numbers', function () {
assert.equal(2, movement.divideNumber(6, 3));
assert.equal(1, movement.divideNumber(9, 9));
});
});