describe('Do everything:', function (){
	browser.driver.get('https://dev.angusdev.com/#/SignIn');
	beforeEach(function() {
		browser.ignoreSynchronization = true;
		browser.waitForAngular();
		browser.sleep(500); 
	},30000);

//global vars
	//close settings
	var apply = element (by.xpath('//div[@class="modal-footer"]/div/button[2]'));


//Dashboard Vars
	var account = element(by.xpath('//md-tab-item[1]'));
	var delivery = element(by.xpath('//md-tab-item[2]'));
	var finance = element(by.xpath('//md-tab-item[3]'));
	var petro = element(by.xpath('//md-tab-item[4]'));
	var service = element(by.xpath('//md-tab-item[5]'));
	var tms = element(by.xpath('//md-tab-item[6]'));

//login function
	
	var name = element(by.model('model.username'));
	var pass = element(by.model('model.password'));
	var signIn = element(by.css('[ng-click="signIn()"]'));

	it('Checks if youre logged in', function(){
		name.sendKeys('spickard');
		pass.sendKeys('password');
		signIn.click();
		browser.sleep(1000);
	//What to expect
		expect(browser.getCurrentUrl()).toEqual('https://dev.angusdev.com/#/');
	});

//impersonate function
	var acct = element(by.xpath('//td[contains(text(), "Clyde S. Walton")]'));
	var user = element(by.css('i[title="Users"]'));
	var impersonate = element(by.css('button[data-ng-click="impersonate(user)"]'));
	var current = element(by.css('button[data-ng-click="close(currentWindow)"]'));
	var impas = element(by.binding('$root.user.impersonatedBy'));

	it('TESTimpersonates a user on clydes account', function (){
		browser.sleep(5000);
		acct.click();
		browser.sleep(5000);
		user.click();
		browser.sleep(5000);
		impersonate.click();
		browser.sleep(5000);
		current.click();
		browser.sleep(5000);
	//what to expect	
		expect(browser.getCurrentUrl()).toEqual('https://dev.angusdev.com/#/');
				browser.sleep(500);
		

	});

//Delivery Widgets	
	it ('changes to delivery tab', function (){
		delivery.click();
		expect(browser.getCurrentUrl()).toEqual('https://dev.angusdev.com/#/');
		browser.sleep(5000);
	});

	//Delivery Performance
	var aid = element(by.binding('product.kpis.optimalDropPercentage'));
	var partial = element(by.binding('product.kpis.partialFillPercentage'));
	var runout = element(by.binding('product.kpis.runOutPercentage'));


	it('verifies aid', function (){
		expect(aid.isPresent()).toEqual(true);
	});

	it('verifies partial', function (){
		expect(partial.isPresent()).toEqual(true);
	});

	it('verifies runout', function (){
		expect(runout.isPresent()).toEqual(true);
	});


	//Driver Performance
	var gph = element(by.binding('product.kpis.unitsPerHour | number:0'));
	var gmph = element(by.binding('product.kpis.grossMarginPerHour | number:0'));

	it('verifies gph', function (){
		expect(gph.isPresent()).toEqual(true);
	});

	it('verifies gmph', function (){
		expect(gmph.isPresent()).toEqual(true);
	});


});



