describe('APP LOGIN::', function (){
	browser.driver.get('https://qa.angusdev.com/#/SignIn');
	beforeEach(function() {
		
		browser.ignoreSynchronization = true;
		browser.waitForAngular();
		browser.sleep(500); 
	},30000);

	//Vars
	var name = element(by.model('model.username'));
	var pass = element(by.model('model.password'));
	var signIn = element(by.css('[ng-click="signIn()"]'));
	
	//What will it do?
	it('Checks if youre logged in', function(){
		name.sendKeys('spickard');
		pass.sendKeys('password');
		signIn.click();
		browser.sleep(1000);
		
		//What to expect
		expect(browser.getCurrentUrl()).toEqual('https://qa.angusdev.com/#/');

	});
});