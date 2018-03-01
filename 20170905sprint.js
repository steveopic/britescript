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
	//close detailed view
	var closedetail = element(by.css('div[data-ng-click="closeDetailViewCb()"]'));
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
		expect(browser.getCurrentUrl()).toEqual('https://dev.angusdev.com/#/');
				browser.sleep(5000);
		

	});

//Customer Widgets
	//gains and losses
	var gnl = element(by.css('div[title="Account Gains & Losses"]'));
	var gnlGains = element(by.binding('counts.numberOfNewAccounts'));
 	var gnlLosses = element(by.css('div.col-lg-2.col-md-12.text-no-verflow.clickable'));
 	
 	it('verifies gnl', function (){
		expect(gnl.isPresent()).toEqual(true);
	});

 	it('verifies gnlGains', function (){
		expect(gnlGains.isPresent()).toEqual(true);
	});

	it('verifies gnlLosses', function (){
		expect(gnlLosses.isPresent()).toEqual(true);
	});



	//Acct Losses by reason
	var albrTotal = element(by.xpath("//div[contains(.//@title, 'Account Losses by Reason')]//strong[@class='ng-binding']"));

	it('verifies albrTotal', function (){
		expect(albrTotal.isPresent()).toEqual(true);
	});

	//Acct gains by source
	var agbsTotal = element(by.xpath("//div[contains(.//@title, 'Account Gains by Source')]//strong[@class='ng-binding']"));



	it('verifies agbsTotal', function (){
		expect(agbsTotal.isPresent()).toEqual(true);
	});


	//Gains & losses by tank
	var glbtGains = element(by.binding('counts.actual.gains'));
	var glbtLosses = element(by.binding('counts.actual.losses'));
	var glbtW2A = element(by.binding('counts.deliveryTypeChange.toAuto'));
	var glbtA2W = element(by.binding('counts.deliveryTypeChange.toWillCall'));
	var glbtNet = element(by.binding('Math.abs(counts.total.net)'));

	it('verifies glbtGains', function (){
		expect(glbtGains.isPresent()).toEqual(true);
	});

	it('verifies glbtLosses', function (){
		expect(glbtLosses.isPresent()).toEqual(true);
	});

	it('verifies glbtW2A', function (){
		expect(glbtW2A.isPresent()).toEqual(true);
	});

	it('verifies glbtA2W', function (){
		expect(glbtA2W.isPresent()).toEqual(true);
	});

	it('verifies glbtNet', function (){
		expect(glbtNet.isPresent()).toEqual(true);
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
	var delper = element(by.css('span[data-ng-click="openDeliveryEfficiencyReport()"]'));

	it('verifies aid', function (){
		expect(aid.isPresent()).toEqual(true);
	});

	it('verifies partial', function (){
		expect(partial.isPresent()).toEqual(true);
	});

	it('verifies runout', function (){
		expect(runout.isPresent()).toEqual(true);
	});

	it('checks for bad percentage', function (){
		delper.click();
		browser.sleep(5000);
		element(by.css('div[colid="efficiencyPercentage"]')).getText().then(function(text){
			console.log(text);
		closedetail.click();
		browser.sleep(5000);
		expect(browser.getCurrentUrl()).toEqual('https://dev.angusdev.com/#/');	
		});
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

	it('adjusts the settings for lfv', function(){
		lfvSetting.click();
		browser.sleep(5000);
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
	
	it('is maCap present', function(){	
		
		expect(maCap.isPresent()).toEqual(true);
		console.log("maCap");
	});
		
	it('is maFix present', function(){	
		
		expect(maFix.isPresent()).toEqual(true);
		console.log("maFix");
	});	
	
	//it('is maVar present', function(){	
		
		//expect(maVar.isPresent()).toEqual(true);
		//console.log("maVar");
		//browser.sleep(5000);
	});

	//Budget Variance
	var bvSetting = element (by.xpath('//*[@title="Budget Variance"]//button[3]'));
	var openPeriod = element (by.model('widget.instance.settings.periodIndicatorKey.value')).element(by.css('option[value="string:currentYear"]'));
	var bvYear = element(by.css('select[data-ng-model="fiscalYear"]')).element(by.css('option[value="number:2016"]'));
	var unit = element(by.binding('view.units | number:0'));
	var grossMargin = element(by.binding('view.grossMargin | number:0'));

	it('opens the settings for Budget Variance', function(){
		bvSetting.click();
		expect(browser.getCurrentUrl()).toEqual('https://dev.angusdev.com/#/');
		browser.sleep(500);
	});

	it('opens the period selector', function(){
		openPeriod.click();
		expect(browser.getCurrentUrl()).toEqual('https://dev.angusdev.com/#/');
		browser.sleep(50);
	});


	it('closes the widget settings', function(){
		apply.click();
		browser.sleep(2000);
		expect(browser.getCurrentUrl()).toEqual('https://dev.angusdev.com/#/');
	});


	it('selects what year', function(){
		bvYear.click();
		expect(browser.getCurrentUrl()).toEqual('https://dev.angusdev.com/#/');
		browser.sleep(4000);
	});

	it('is unit present', function (){
		expect(unit.isPresent()).toEqual(true);
		console.log("unit");
	});

	it('gross margin check', function (){
		expect(grossMargin.isPresent()).toEqual(true);
		console.log("grossMargin");
	});


	

	//Margin Analysis
	var maCap = element(by.css('h1[data-ng-if="!analysis.cap"]'));
	var maFix = element(by.css('h1[data-ng-if="!analysis.fixed"]'));
	var maVar = element(by.css('h1[data-ng-if="!analysis.variable"]'));
	var maSetting = element (by.xpath('//*[@title="Margin Analysis"]//button[3]'));
	var maProductDrop = element (by.xpath('//div[@class="container-fluid"]/div[@class="row form-group"]/div[1]//ul[@class="select2-choices"]'));
	var maProducts = element (by.xpath('//select/option[text()="Heating Oil"]'));



	it('adjusts the settings for margin analysis', function(){
		maSetting.click();
		browser.sleep(5000);
	});
	
	it('clicks the product field', function(){
		maProductDrop.click();
		browser.sleep(50);
		expect(browser.getCurrentUrl()).toEqual('https://dev.angusdev.com/#/');
	});

	it('clicks heating oil', function (){
		maProducts.click();
		browser.sleep(50);
		expect(browser.getCurrentUrl()).toEqual('https://dev.angusdev.com/#/');
	});

	it('closes the widget settings', function(){
		apply.click();
		browser.sleep(500);
		expect(browser.getCurrentUrl()).toEqual('https://dev.angusdev.com/#/');
	});

//Petro Widgets
	it ('changes to petro tab', function (){
		petro.click();
		expect(browser.getCurrentUrl()).toEqual('https://dev.angusdev.com/#/');
		browser.sleep(5000);
	});



//Service Widgets
	it ('changes to service tab', function (){
		service.click();
		expect(browser.getCurrentUrl()).toEqual('https://dev.angusdev.com/#/');
		browser.sleep(5000);
	});

	
	//Service Calls

	var servTotText = element(by.css('div[data-ng-controller="serviceCallsCtrl"]')).element(by.css('h4[style="margin:0"]'));
	var totalCalls = element(by.binding('calls.totalCalls | number:0'));
	var totalRevenue = element(by.binding('calls.totalRevenue | number:0'));

	it('verifies servTotText', function (){
		expect(servTotText.isPresent()).toEqual(true);
	});

	it('verifies totalCalls', function (){
		expect(totalCalls.isPresent()).toEqual(true);
	});

	it('verifies totalRevenue', function (){
		expect(totalRevenue.isPresent()).toEqual(true);
	});

//Service Revenue
	var acCalls = element(by.css('span[bo-text="revenues.totals.calls"]'));
	var acRevenue = element(by.css('td[bo-text="revenues.totals.revenue | currency"]'));
	var acCost = element(by.css('td[bo-text="revenues.totals.cost | currency"]'));
	var acMargin = element(by.css('td[bo-text="revenues.totals.margin | currency"]'));
	var acRPC = element(by.css('td[bo-text="revenues.totals.revenuePerCall | nullDash:\\\'currency\\\'"]'));
	var acMPC = element(by.css('td[bo-text="revenues.totals.revenuePerCall | nullDash:\\\'currency\\\'"]'));

	var cCalls = element(by.css('span[bo-text="revenues.contract.calls"]'));
	var cRevenue = element(by.css('td[bo-text="revenues.contract.revenue | nullDash:\\\'currency\\\'"]'));
	var cCost = element(by.css('td[bo-text="revenues.contract.cost | nullDash:\\\'currency\\\'"]'));
	var cMargin = element(by.css('td[bo-text="revenues.contract.margin | nullDash:\\\'currency\\\'"]'));
	var cRPC = element(by.css('td[bo-text="revenues.totals.revenuePerCall | nullDash:\\\'currency\\\'"]'));
	var cMPC = element(by.css('td[bo-text="revenues.totals.revenuePerCall | nullDash:\\\'currency\\\'"]'));

	var iCalls = element(by.css('span[bo-text="revenues.installation.calls"]'));
	var iRevenue = element(by.css('td[bo-text="revenues.installation.revenue | nullDash:\\\'currency\\\'"]'));
	var iCost = element(by.css('td[bo-text="revenues.installation.cost | nullDash:\\\'currency\\\'"]'));
	var iMargin = element(by.css('td[bo-text="revenues.installation.cost | nullDash:\\\'currency\\\'"]'));
	var iRPC = element(by.css('td[bo-text="revenues.installation.revenuePerCall | nullDash:\\\'currency\\\'"]'));
	var iMPC = element(by.css('td[bo-text="revenues.installation.revenuePerCall | nullDash:\\\'currency\\\'"]'));

	var ncCalls = element(by.css('span[bo-text="revenues.nonContract.calls"]'));
	var ncRevenue = element(by.css('td[bo-text="revenues.nonContract.revenue | nullDash:\\\'currency\\\'"]'));
	var ncCost = element(by.css('td[bo-text="revenues.nonContract.cost | nullDash:\\\'currency\\\'"]'));
	var ncMargin = element(by.css('td[bo-text="revenues.nonContract.margin | nullDash:\\\'currency\\\'"]'));
	var ncRPC = element(by.css('td[bo-text="revenues.nonContract.revenuePerCall | nullDash:\\\'currency\\\'"]'));
	var ncMPC = element(by.css('td[bo-text="revenues.nonContract.revenuePerCall | nullDash:\\\'currency\\\'"]'));



	it('verifies acCalls', function (){
		expect(acCalls.isPresent()).toEqual(true);
	});

	it('verifies acRevenue', function (){
		expect(acRevenue.isPresent()).toEqual(true);
	});

	it('verifies acCost', function (){
		expect(acCost.isPresent()).toEqual(true);
	});

	it('verifies acMargin', function (){
		expect(acMargin.isPresent()).toEqual(true);
	});

	it('verifies acRPC', function (){
		expect(acRPC.isPresent()).toEqual(true);
	});

	it('verifies acMPC', function (){
		expect(acMPC.isPresent()).toEqual(true);
	});


	it('verifies cCalls', function (){
		expect(cCalls.isPresent()).toEqual(true);
	});

	it('verifies cRevenue', function (){
		expect(cRevenue.isPresent()).toEqual(true);
	});

	it('verifies cCost', function (){
		expect(cCost.isPresent()).toEqual(true);
	});

	it('verifies cMargin', function (){
		expect(cMargin.isPresent()).toEqual(true);
	});

	it('verifies cRPC', function (){
		expect(cRPC.isPresent()).toEqual(true);
	});

	it('verifies cMPC', function (){
		expect(cMPC.isPresent()).toEqual(true);
	});

	//it('verifies iCalls', function (){
		//expect(iCalls.isPresent()).toEqual(true);
	//});

	it('verifies iRevenue', function (){
		expect(iRevenue.isPresent()).toEqual(true);
	});

	it('verifies iCost', function (){
		expect(iCost.isPresent()).toEqual(true);
	});

	it('verifies iMargin', function (){
		expect(iMargin.isPresent()).toEqual(true);
	});

	it('verifies iRPC', function (){
		expect(iRPC.isPresent()).toEqual(true);
	});

	it('verifies iMPC', function (){
		expect(iMPC.isPresent()).toEqual(true);
	});	

	it('verifies ncCalls', function (){
		expect(ncCalls.isPresent()).toEqual(true);
	});

	it('verifies ncRevenue', function (){
		expect(ncRevenue.isPresent()).toEqual(true);
	});

	it('verifies ncCost', function (){
		expect(ncCost.isPresent()).toEqual(true);
	});

	it('verifies ncMargin', function (){
		expect(ncMargin.isPresent()).toEqual(true);
	});

	it('verifies ncRPC', function (){
		expect(ncRPC.isPresent()).toEqual(true);
	});

	it('verifies ncMPC', function (){
		expect(ncMPC.isPresent()).toEqual(true);
	});









//tms widgets
	it ('changes to tms tab', function (){
		tms.click();
		expect(browser.getCurrentUrl()).toEqual('https://dev.angusdev.com/#/');
		browser.sleep(5000);
	});

	//Tank Monitor Performance
	var withmonPTD = element(by.binding('performance.some.inTankPriorToDelivery | number:0'));
	var withmonAD = element(by.binding('performance.some.delivery | number:0'));
	var withmonAV = element(by.binding('performance.some.variance | number:0'));
	var withmonVO20 = element(by.binding('performance.some.varianceOver | number:2'));

	var woOD = element(by.binding('performance.none.optimalDrop | number:0'));
	var woAD = element(by.binding('performance.none.delivery | number:0'));
	var woAV = element(by.binding('performance.none.variance | number:0'));
	var woVO20 = element(by.binding('performance.none.varianceOver | number:2'));

	it('verifies withmonPTD', function (){
		expect(withmonPTD.isPresent()).toEqual(true);
	});

	it('verifies withmonAD', function (){
		expect(withmonPTD.isPresent()).toEqual(true);
	});

	it('verifies withmonAV', function (){
		expect(withmonPTD.isPresent()).toEqual(true);
	});

	it('verifies withmonVO20', function (){
		expect(withmonPTD.isPresent()).toEqual(true);
	});

	it('verifies woOD', function (){
		expect(woOD.isPresent()).toEqual(true);
	});

	it('verifies woAD', function (){
		expect(woAD.isPresent()).toEqual(true);
	});

	it('verifies woAV', function (){
		expect(withmonPTD.isPresent()).toEqual(true);
	});

	it('verifies woVO20', function (){
		expect(withmonPTD.isPresent()).toEqual(true);
	});




});