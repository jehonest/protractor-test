// spec.js
//describe: syntax from Jasmine framework
//it: syntax from Jasmine framework
//browser: global created by Protractor,
//	used for browser-level commands such as navigation	
describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');

    expect(browser.getTitle()).toEqual('Super Calculator');
  });
});