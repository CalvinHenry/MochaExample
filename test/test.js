var assert = require('assert');
var fib = require('../src/fibonachi')


describe('Basic Mocha Test', function () {
	it('Should return the correct result for 2 + 2', function() {
		assert.equal(2 + 2, 4)
	})

	it('Should return the correct result for 2 + 2', function() {
		assert.equal(3 + 2, 5)
	})
});

describe('Failing Test example', function() {
	it('Should return the correct result for 1 + 1', function() {
		assert.equal(1 + 1, 3)
	})
})

describe('Fibonachi Test', function () {
	it('should return the correct result of the fibonachi function', function() {
		assert.equal(fib.fibonachi(10), 89)
	})	
});
