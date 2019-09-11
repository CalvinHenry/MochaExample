# Mocha Example
Mocha is a testing Framework designed for NPM projects. It would be most useful to teams that are making a web based application using node.js

Mocha does not interact with the front end of ones application, so you would not be able to automate all tests with Mocha. To test the frontend, you should use other frameworks such as Selenium. 

Using Mocha, you can import that parts of your code you want to test into the testing file, and then use the assert functions that mocha provides to test them. Below are examples showing how to install Mocha,  a basic example of Mocha testing and an example which imports and test code from another file. You can clone this repository to experiment with the given tests. 

##Instalation
First, make sure that you have NPM installed on your computer. Then, run 
```
npm install --global mocha
```
In your project directory


To run mocha tests, just run
```
mocha
```
in the command line. Alternatively, you can add it to the test script in package.json, and run npm test. 


##Basic Test
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

##Test with imported functions
Mocha can also be used to test existing modules, as shown in the fibonachi.js file in this repo. Simply import the function that you want to test, and use them in a mocha test. 

