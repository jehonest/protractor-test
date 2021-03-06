// spec.js - lists of elements

/*

- element.all: returns an ElementArrayFinder
- Helper function, add
- Added the variable history
- Assert history has the expected length using the count method
- ElementArrayFinder has many methods: count, last, each, map, filter, reduce, ...
	- last: get an ElementFinder that matches the last element found by the Locator

*/

describe('Protractor Demo App', function() {
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));
  var history = element.all(by.repeater('result in memory'));

  function add(a, b) {
    firstNumber.sendKeys(a);
    secondNumber.sendKeys(b);
    goButton.click();
  }

  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  it('should have a history', function() {
    add(1, 2);
    add(3, 4);

    expect(history.last().getText()).toContain('1 + 2');
    //expect(history.first().getText()).toContain('foo'); // This is wrong!
    expect(history.first().getText()).toContain('3 + 4'); // This is right!
  });
});