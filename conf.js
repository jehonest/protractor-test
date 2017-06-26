// conf.js

// Configuration tells Protractor where your test files (specs) are,
// and where to talk to your Selenium Server (seleniumAddress)
// Specifies that we will be using Jasmine for the test framework; 
// Defaults for all other configuration (Chrome is default browser)

//run test with 'protractor conf.js'
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js']
}