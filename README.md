# MochaExample
Mocha is a good framework that one can use for Unit tests with an NPM application. To set up mocha in an NPM repository run:
```
npm install --global mocha
```
To run mocha tests, just run
```
mocha
```
in the command line. Alternatively, you can add it to the test script in package.json, and run npm test. 

Mocha tests are written in a test directory, which should be in the top directory of the project. A mocha test file should require assert at the top: 
```
var assert = require('assert')
```

A basic Mocha test has the following structure:
```
describe('Basic Mocha Test', function () {
	it('Should return the correct result for 2 + 2', function() {
		assert.equal(2 + 2, 4)
	})
});
```
There can be multiple test cases in each of the describe blocks. The describe message should describe the module that is being tested, and the string passed to the it function should describe the specific test case. 

Mocha can also be used to test existing modules, as shown in the fibonachi.js file in this repo. Simply import the function that you want to test, and use them in a mocha test. 
