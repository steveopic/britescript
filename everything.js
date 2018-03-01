describe('Do everything:', function (){
	browser.driver.get('https://qa.angusdev.com/#/SignIn');
	beforeEach(function() {
		browser.ignoreSynchronization = true;
		browser.waitForAngular();
		browser.sleep(500); 
	},30000);

//Vars
	//logins
	
	//impersonation
	
	//customer widgets
	
 	//Delivery Widgets

 	//Finance Widgets



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
		expect(browser.getCurrentUrl()).toEqual('https://qa.angusdev.com/#/');
	});

//impersonate function
	var acct = element(by.xpath('//td[contains(text(), "Clyde S. Walton")]'));
	var user = element(by.css('i[title="Users"]'));
	var impersonate = element(by.css('button[data-ng-click="impersonate(user)"]'));
	var current = element(by.css('button[data-ng-click="close(currentWindow)"]'));
	var impas = element(by.binding('$root.user.impersonatedBy'));

	it('impersonates a user on clydes account', function (){
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
		expect(browser.getCurrentUrl()).toEqual('https://qa.angusdev.com/#/');
				browser.sleep(5000);
		

	});
//Customer Widgets
	//gains and losses
	var gnl = element(by.css('div[title="Account Gains & Losses"]'));
	var gnlgains = element(by.binding('counts.numberOfNewAccounts'));
 	var gnllosses = element(by.css('div.col-lg-2.col-md-12.text-no-verflow.clickable'));
 	var albs = element(by.css('div[data-ng-controller="acctGainsLossesBySrcCtrl"]'));

	it('tests if gains and losses is present', function(){
		
		expect(gnl.isPresent()).toEqual(true);
		browser.sleep(5000);
		expect(gnlgains.getText()).toEqual('839');
		browser.sleep(5000);
		expect(gnllosses.getText()).toEqual('582');
		browser.sleep(5000);
	
	});
	//account gains by source
	it('checks if the agbs total is the same', function(){
		expect(albs.getText()).toEqual('582');
	});

//*[text()[contains(.,'839')]]

//Change dashboard

//by.binding('dashboard.name')







//Delivery Widgets
	//Delivery Performance
	var aid = element(by.binding('product.kpis.optimalDropPercentage'));
	var partial = element(by.binding('product.kpis.partialFillPercentage'));
	var runout = element(by.binding('product.kpis.runOutPercentage'));

	it ('checks if the delivery performance widget has correct values', function (){
		expect(aid.getText()).toEqual('197.1');
		expect(partial.getText()).toEqual('7.4');
		expect(runout.getText()).toEqual('1.3');
	});

	//Driver Performance
	by.binding('product.kpis.unitsPerHour | number:0')
	by.binding('product.kpis.grossMarginPerHour | number:0')




//Finance Widgets
	//Budget Variance
	//by.css('span[data-ng-class="{\\'text-success\\': budget.percentVariance.units > 0 , \\'text-danger\\' : budget.percentVariance.units < 0 }"]') OR by.binding('view.units | number:0')
	by.binding('view.grossMargin | number:0')

	//Liquid Fuels Volume
by.binding('analysis.total | number:0')
by.binding('analysis.cap | number:0')
by.binding('analysis.fixed | number:0')
by.binding('analysis.variable | number:0')




	//Margin Analysis
	by.css('h1[data-ng-if="!analysis.cap"]')
	by.css('h1[data-ng-if="!analysis.fixed"]')
	by.css('h1[data-ng-if="!analysis.variable"]')
















});






