var GoogleSpreadsheet = require('google-spreadsheet');
var async = require('async');
 
// spreadsheet key is the long id in the sheets URL 
var doc = new GoogleSpreadsheet('1F7wTJ2HRFzWfs5ciRmD-p7DEC5nAa_9rnTyxYywiOJU');
var sheet;
describe('Do everything:', function (){
	browser.driver.get('http://8.39.160.52:88');
	beforeEach(function() {
		browser.ignoreSynchronization = true;
		browser.waitForAngular();
		browser.sleep(500); 
	},30000);
	async.series([
  function setAuth(step) {
    // see notes below for authentication instructions! 
    var creds = require('./Angus-brite-20e7f4515c96.json');
    // OR, if you cannot save the file locally (like on heroku) 
 /*   var creds_json = {
      client_email: 'yourserviceaccountemailhere@google.com',
      private_key: 'your long private key stuff here'
    };
 */
    doc.useServiceAccountAuth(creds, step);
  },
  function myWorksheets(step) {
    doc.getInfo(function(err, info) {
      console.log('Loaded doc: '+info.title+' by '+info.author.email);
      sheet = info.worksheets[0];
      console.log('sheet 1: '+sheet.title+' '+sheet.rowCount+'x'+sheet.colCount);
      step();
    });
  },
  function myRows(step) {
    // google provides some query options 
    sheet.getRows({
      offset: 1,
      limit: 20,
      orderby: 'col2'
    }, function( err, rows ){
      console.log('Read '+rows.length+' rows');
 
      // the row is an object with keys set by the column headers 
    //  rows[0].colname = 'new val';
      //rows[0].save(); // this is async 
 
      // deleting a row 
      //rows[0].del();  // this is async 
 
      step();
    });
  },
    function addRows(step) {
    // google provides some query options 
   console.log('hmm');
   sheet.addRow({'Col1': 'Val1', Col2: 'Val2', Col3:'Val3'
  
    }, function( err,rows){
     // console.log('Read '+rows.length+' rows');
 
      // the row is an object with keys set by the column headers 
    //  rows[0].colname = 'new val';
      //rows[0].save(); // this is async 
 
      // deleting a row 
      //rows[0].del();  // this is async 
 
      step();
    });
  },
  function myCells(step) {
    sheet.getCells({
      'min-row': 1,
      'max-row': 9,
      'return-empty': true
    }, function(err, cells) {
      var cell = cells[2];
      console.log('Cell R'+cell.row+'C'+cell.col+' = '+cell.value);
      cell.col = cell.col + 1;
      console.log(cell.col);
      // cells have a value, numericValue, and formula 
   /*   cell.value == '1';
      cell.numericValue == 1;
      cell.formula == '=ROW()';
 */
      // updating `value` is "smart" and generally handles things for you 
      cell.value = 123;
      cell.value = '=A1+B2';
      cell.save(); //async 
 
      // bulk updates make it easy to update many cells at once 
    /*  cells[0].value = 1;
      cells[1].value = 200;
      cells[2].formula = '=A1+B1';
      cells[5].value = "hi";
      sheet.bulkUpdateCells(cells);
    */  console.log("hi");
      console.log(cell.value);
       //async 
 
      step();
    });
  },
/*  function managingSheets(step) {
    doc.addWorksheet({
      title: 'my new sheet'
    }, function(err, sheet) {
 
      // change a sheet's title 
      sheet.setTitle('new title'); //async 
 
      //resize a sheet 
      sheet.resize({rowCount: 50, colCount: 20}); //async 
 
      sheet.setHeaderRow(['name', 'age', 'phone']); //async 
 
      // removing a worksheet 
      sheet.del(); //async 
 
      step();
    });
  }*/
], function(err){
    if( err ) {
      console.log('Error: '+err);
    }
});
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

	it('impersonates a user on Santas account', function (){
			browser.sleep(50000)
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
		console.log("Customer Widgets");
		

	});

//div[contains(.//@title, "Subscriber Accounts")]//input

//Customer Widgets

	//Account gains and losses
	var agnl = element(by.css('div[title="Account Gains & Losses"]'));
	var agnlGains = element(by.binding('counts.numberOfNewAccounts'));
	var agnlGainsT = element(by.xpath("//h1[@class='performance-value ng-binding text-success'][contains(., '122')]"));
 	var agnlLosses = element(by.css('div.col-lg-2.col-md-12.text-no-verflow.clickable'));
 	var agnlLossesT = element(by.xpath("//div[@class='col-lg-2 col-md-12 text-no-verflow clickable'][contains(., '67')]"));
 	var agnlNet = element(by.binding('counts.accountNumberNetChange'));
 	var agnlNetT = element(by.xpath("//h1[@class='performance-value ng-binding text-success'][contains(., '55')]"));

 	

 	it('verifies agnl', function (){
 		
		expect(agnl.isPresent()).toEqual(true);
	});

 	it('verifies agnlGains', function (){
		expect(agnlGains.isPresent()).toEqual(true);
	});
 	it('verifies agnlGainsT', function (){
		expect(agnlGains.isPresent()).toEqual(true);
	});

	it('verifies agnlLosses', function (){
		expect(agnlLosses.isPresent()).toEqual(true);
	});
	it('verifies agnlLossesT', function (){
		expect(agnlLosses.isPresent()).toEqual(true);
	});

	it('verifies agnlNet', function (){
		expect(agnlNet.isPresent()).toEqual(true);
	});
	it('verifies agnlNetT', function (){
		expect(agnlNetT.isPresent()).toEqual(true);
		console.log("Account Gains and Losses");
	});

//div[contains(.//@title, "Subscriber Accounts")]

	//Acct Losses by reason
	var albr = element(by.xpath("//div[contains(.//@title, 'Account Losses by Reason')]//strong[@class='ng-binding']"));
	var albrT = element(by.xpath("//div[contains(.//@title, 'Account Losses by Reason')]//strong[@class='ng-binding'][contains(., 'TOTAL: 1737')]"));

	

	it('verifies albr', function (){
		
		expect(albr.isPresent()).toEqual(true);
	});

	it('verifies albrT', function (){
		expect(albrT.isPresent()).toEqual(true);
		console.log("Account losses by reason");
	});

	//Acct gains by source
	var agbs = element(by.xpath("//div[contains(.//@title, 'Account Gains by Source')]//strong[@class='ng-binding']"));
	var agbsT = element(by.xpath("//div[contains(.//@title, 'Account Gains by Source')]//strong[@class='ng-binding'][contains(., 'TOTAL: 1878')]"));

	

	it('verifies agbs', function (){
		
		expect(agbs.isPresent()).toEqual(true);
	});

	it('verifies agbsT', function (){
		expect(agbsT.isPresent()).toEqual(true);
		console.log("Account gains by source");
	});

	//Gains & losses by tank
	var glbtGains = element(by.binding('counts.actual.gains'));
	var glbtGainsT = element(by.xpath("//div[@class='md-headline text-success ng-binding'][contains(., '1599')]"));
	var glbtLosses = element(by.binding('counts.actual.losses'));
	var glbtLossesT = element(by.xpath("//md-list-item[@class='md-no-proxy ng-scope _md'][4]//div[@class='md-headline text-danger ng-binding'][contains(., '1818')]"));
	var glbtW2A = element(by.binding('counts.deliveryTypeChange.toAuto'));
	var glbtW2AT = element(by.xpath("//md-list/md-list-item[@class='md-no-proxy ng-scope _md'][3]//div[@class='md-headline text-success ng-binding']"));
	var glbtA2W = element(by.binding('counts.deliveryTypeChange.toWillCall'));
	var glbtA2WT = element(by.xpath("//md-list-item[@class='md-no-proxy ng-scope _md'][4]//div[@class='md-headline text-danger ng-binding'][contains(., '1574')]"));
	var glbtNet = element(by.binding('Math.abs(counts.total.net)'));
	var glbtNetT = element(by.xpath("//div[@class='md-headline ng-binding text-danger'][contains(., '1005')"));

	

	it('verifies glbtGains', function (){
		
		expect(glbtGains.isPresent()).toEqual(true);
	});
	it('verifies glbtGainsT', function (){
		expect(glbtGains.isPresent()).toEqual(true);
	});

	it('verifies glbtLosses', function (){
		expect(glbtLosses.isPresent()).toEqual(true);
	});
	it('verifies glbtLossesT', function (){
		expect(glbtLosses.isPresent()).toEqual(true);
	});

	it('verifies glbtW2A', function (){
		expect(glbtW2A.isPresent()).toEqual(true);
	});
	it('verifies glbtW2AT', function (){
		expect(glbtW2A.isPresent()).toEqual(true);
	});

	it('verifies glbtA2W', function (){
		expect(glbtA2W.isPresent()).toEqual(true);
	});
	it('verifies glbtA2WT', function (){
		expect(glbtA2W.isPresent()).toEqual(true);
	});

	it('verifies glbtNet', function (){
		expect(glbtNet.isPresent()).toEqual(true);
	});
	it('verifies glbtNetT', function (){
		expect(glbtNet.isPresent()).toEqual(true);
		console.log("Gains & Losses by tank");
	});

	//Company Profile Tanks
	var profTanksActive = element(by.binding('active'));
	var profTanksBudget = element(by.binding('active.budget'));
	var profTanksNo = element(by.binding('deliveryType.total'));
	var profTanksActiveT = element(by.xpath("//div[contains(.//@title, 'Company Profile - Tanks')]//span[@class='pull-right text-primary ng-binding'][contains(., '13,538')]"));
	var profTanksBudgetT = element(by.xpath("//div[contains(.//@title, 'Company Profile - Tanks')]//span[@class='pull-right ng-binding'][contains(., '9,762')]"));
	var profTanksNoT = element(by.xpath("//div[contains(.//@title, 'Company Profile - Tanks')]//span[@class='pull-right ng-binding'][contains(., '3,776')]"));
	
	

	it('verifies profTanksActive', function (){
		
		expect(glbtNet.isPresent()).toEqual(true);
	});
	it('verifies profTanksBudget', function (){
		expect(glbtNet.isPresent()).toEqual(true);
	});
	it('verifies profTanksNo', function (){
		expect(glbtNet.isPresent()).toEqual(true);
	});
	it('verifies profTanksActiveT', function (){
		expect(glbtNet.isPresent()).toEqual(true);
	});
	it('verifies profTanksBudgetT', function (){
		expect(glbtNet.isPresent()).toEqual(true);
	});
	it('verifies profTanksNoT', function (){
		expect(glbtNet.isPresent()).toEqual(true);
		console.log("Company Profile - Tanks");
	});




	//Company Profile Accounts

	var profAccActive = element(by.binding('active.total'));
	var profAccBudget = element(by.binding('active.budget'));
	var profAccNo = element(by.binding('active.noBudget'));
	var profAccActiveT = element(by.xpath("//div[contains(.//@title, 'Company Profile - Accounts')]//span[@class='pull-right text-primary ng-binding'][contains(., '19,471')]"));
	var profAccBudgetT = element(by.xpath("//div[contains(.//@title, 'Company Profile - Accounts')]//li[1]/span[@class='pull-right ng-binding'][contains(., '3,254')]"));
	var profAccNoT = element(by.xpath("//div[contains(.//@title, 'Company Profile - Accounts')]//li[2]/span[@class='pull-right ng-binding'][contains(., '16,217')]"));

	

	it('verifies profAccActive', function (){
		
		expect(glbtNet.isPresent()).toEqual(true);
	});
	it('verifies profAccBudget', function (){
		expect(glbtNet.isPresent()).toEqual(true);
	});
	it('verifies profAccNo', function (){
		expect(glbtNet.isPresent()).toEqual(true);
	});
	it('verifies profAccActiveT', function (){
		expect(glbtNet.isPresent()).toEqual(true);
	});
	it('verifies profAccBudgetT', function (){
		expect(glbtNet.isPresent()).toEqual(true);
	});
	it('verifies profAccNoT', function (){
		expect(glbtNet.isPresent()).toEqual(true);
		console.log("Company Profile - Accounts");
	});







	//Company Profile Price Plans

//Delivery Widgets	
	it ('changes to delivery tab', function (){
		delivery.click();
		expect(browser.getCurrentUrl()).toEqual('https://dev.angusdev.com/#/');
		browser.sleep(5000);
		console.log("Delivery Widgets");
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
		console.log("Delivery Performance");
	});


	//Driver Performance
	var gph = element(by.binding('product.kpis.unitsPerHour | number:0'));
	var gmph = element(by.binding('product.kpis.grossMarginPerHour | number:0'));

	

	it('verifies gph', function (){
		
		expect(gph.isPresent()).toEqual(true);
	});

	it('verifies gmph', function (){
		expect(gmph.isPresent()).toEqual(true);
		console.log("Driver Performance");
	});		
	//need avg delivery by tank size
	//need propane tank utitlization
//Finance Widgets
	it ('changes to finance tab', function (){
		finance.click();
		expect(browser.getCurrentUrl()).toEqual('https://dev.angusdev.com/#/');
		browser.sleep(5000);
		console.log("Finance Widgets");
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

	

/*	RECOMMENT IF WIDGET IT BLANK BY DEFAULT
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
*/
	it('is lfvtotal present', function(){	
		
		expect(lfvTotal.isPresent()).toEqual(true);
	});
	
	it('is lfvcap present', function(){	
		
		expect(lfvCap.isPresent()).toEqual(true);
	});

	it('is lfvFix present', function(){	
		
		expect(lfvFix.isPresent()).toEqual(true);
	});
		
	it('is lfvVar present', function(){	
		
		expect(lfvVar.isPresent()).toEqual(true);
		console.log("Liquid fuels volume");
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

	});

	it('gross margin check', function (){
		expect(grossMargin.isPresent()).toEqual(true);
		console.log("BudgetVariance");
	});



	

	//Margin Analysis
/*
	var maCap = element(by.css('h1[data-ng-if="!analysis.cap"]'));
	var maFix = element(by.css('h1[data-ng-if="!analysis.fixed"]'));
	var maVar = element(by.css('h1[data-ng-if="!analysis.variable"]'));
	var maSetting = element (by.xpath('//*[@title="Margin Analysis"]//button[3]'));
	var maProductDrop = element (by.xpath('//div[@class="container-fluid"]/div[@class="row form-group"]/div[1]//ul[@class="select2-choices"]'));
	var maProducts = element (by.xpath('//select/option[text()="Heating Oil"]'));
*/
	var maCap = element(by.binding('analysis.cap | number:2'));
	var maFix = element(by.binding('analysis.fixed | number:2'));
	var maVar = element(by.binding('analysis.variable | number:2'));
	var maSetting = element (by.xpath('//*[@title="Margin Analysis"]//button[3]'));
	var maProductDrop = element (by.xpath('//div[@class="container-fluid"]/div[@class="row form-group"]/div[1]//ul[@class="select2-choices"]'));
	var maProducts = element (by.xpath('//select/option[text()="Heating Oil"]'));

	


/*UNCOMMENT IF NEEDED FOR DATA
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
*/
	it('is maCap present', function(){	
		
		expect(maCap.isPresent()).toEqual(true);

	});
		
	it('is maFix present', function(){	
		
		expect(maFix.isPresent()).toEqual(true);

	});	
	
	it('is maVar present', function(){	
		
		expect(maVar.isPresent()).toEqual(true);
		browser.sleep(5000);
		console.log("Margin Analysis");
	});

	//----------------------------Need Closing Quotes
	//--------------------------Need Delayed Quotes
	//----------------------------Need Margin Components

//Petro Widgets
	it ('changes to petro tab', function (){
		petro.click();
		expect(browser.getCurrentUrl()).toEqual('https://dev.angusdev.com/#/');
		browser.sleep(5000);
		console.log("Petro");
	});




//Service Widgets
	it ('changes to service tab', function (){
		service.click();
		expect(browser.getCurrentUrl()).toEqual('https://dev.angusdev.com/#/');
		browser.sleep(5000);
		console.log("Service");	
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
		console.log("Service calls");
	});

//--------------------ADD SANTA CUSTOM

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

	it('verifies iCalls', function (){
		expect(iCalls.isPresent()).toEqual(true);
	});

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
		console.log("Service revenue");
	});



//------------------------NEED callback analysis
//------------------------NEED service contracts
//------------------------NEED excess calls
//------------------------NEED service calls





//tms widgets
	it ('changes to tms tab', function (){
		tms.click();
		expect(browser.getCurrentUrl()).toEqual('https://dev.angusdev.com/#/');
		browser.sleep(5000);
		console.log("TMS widgets");
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
		console.log("Tank monitor performance");
	});

	//------------------------NEED monitor install summary
	//------------------------NEED TMS daily levels
	//------------------------NEED TMS exceptions
	//------------------------NEED Tank monitor delivery efficiency

//-------------------NEED Weather
	//------------------------NEED Heating degree days
	//------------------------NEED 14 day
});