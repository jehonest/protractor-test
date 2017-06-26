// spec.js - interacting w/ elements

/* Uses global element and by (created by Protractor)
 		- element function: used for finding HTML elements on your webpage;
			returns an ElementFinder object, which can be used to interact w/ the element
			or get info from it; 
			- sendKeys: type into <input>s
			- click: click a button
			- getText: return content of an element

		- element(Locator) : Locator parameter describes how to find an element
		- by object creates Locators
			- by.model ...
			- by.id ...
			- by.binding ...
			
Run tests w/ 'protractor conf.js'
*/

describe('Protractor Demo App', function() {
  it('should add one and two', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model('first')).sendKeys(1);
    element(by.model('second')).sendKeys(2);

    element(by.id('gobutton')).click();

//     expect(element(by.binding('latest')).getText()).
//         toEqual('5'); // This is wrong!
    expect(element(by.binding('latest')).getText()).
        toEqual('3'); // This is right!
  });
});