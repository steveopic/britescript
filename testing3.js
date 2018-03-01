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
	var santasearch = element(by.xpath('//div[contains(string(), "Subscriber Accounts")]//input'));
	var acct = element(by.xpath('//td[contains(text(), "Santa Claus")]'));
	var user = element(by.css('i[title="Users"]'));
	var impersonate = element(by.css('button[data-ng-click="impersonate(user)"]'));
	var current = element(by.css('button[data-ng-click="close(currentWindow)"]'));
	var impas = element(by.binding('$root.user.impersonatedBy'));

	it('impersonates a user on clydes account', function (){
			console.log("lfvCap");
			browser.sleep(5000);
		santasearch.click();
			browser.sleep(5000);
		santasearch.sendKeys('santa');
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
				browser.sleep(5000);
		

	});
	//Finance Widgets
	it ('changes to finance tab', function (){
		finance.click();
		expect(browser.getCurrentUrl()).toEqual('https://dev.angusdev.com/#/');
		browser.sleep(5000);
	});


	//Liquid Fuels Volume
	var lfvTotal = element(by.binding('analysis.total | number:0'));
	var lfvCap = element (by.binding('analysis.cap | number:0'));
	var lfvFix = element (by.binding('analysis.fixed | number:0'));
	var lfvVar = element (by.binding('analysis.variable | number:0'));
	var lfvSetting = element (by.xpath('//*[@title="Liquid Fuels Volume"]//button[3]'));
	var lfvProductDrop = element (by.xpath('//div[@class="container-fluid"]/div[@class="row form-group"]/div[1]//ul[@class="select2-choices"]'));
	var lfvProducts = element (by.xpath('//select/option[text()="Heating Oil"]'));
	var lfvTradeDrop = element (by.xpath('//div[@class="container-fluid"]/div[@class="row form-group"]/div[2]//ul[@class="select2-choices"]'));
	var lfvTrades = element (by.xpath('//select/option[text()="residential"]'));
/*
	it('adjusts the settings for lfv', function(){
		browser.sleep(10000);
		lfvSetting.click();
		browser.sleep(10000);
	});


	it('clicks on selected products', function (){
		lfvProducts.click();
		browser.sleep(5000);
		expect(browser.getCurrentUrl()).toEqual('https://dev.angusdev.com/#/');
	});

	it('clicks the trade classes field', function(){
		lfvTradeDrop.click();
		browser.sleep(5000);
		expect(browser.getCurrentUrl()).toEqual('https://dev.angusdev.com/#/');
	});

	it('clicks on selected trade classes', function(){
		lfvTrades.click();
		browser.sleep(5000);
		expect(browser.getCurrentUrl()).toEqual('https://dev.angusdev.com/#/');
	});

	it('closes the widget settings', function(){
		apply.click();
		browser.sleep(5000);
		expect(browser.getCurrentUrl()).toEqual('https://dev.angusdev.com/#/');
	});
*/
	it('is lfvtotal present', function(){	
	
		expect(lfvTotal.isPresent()).toEqual(true);
		console.log("lfvTotal");
	});
	
	it('is lfvcap present', function(){	
		
		expect(lfvCap.isPresent()).toEqual(true);
		console.log("lfvCap");
	});

	it('is lfvFix present', function(){	
		
		expect(lfvFix.isPresent()).toEqual(true);
		console.log("lfvFix");
	});
		
	it('is lfvVar present', function(){	
		
		expect(lfvVar.isPresent()).toEqual(true);
		console.log("lfvVar");
	});


});