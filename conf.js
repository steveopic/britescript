exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	capabilities: {
		'browserName': 'chrome'
	},
	//browser:getCapabilities().then(function(c) {
    //            console.log(c.get('browserName'));
	//}),
	//capabilites.get('chrome'),
	specs: [
		'santa.js'
	],
	framework: 'jasmine2',
	onPrepare: function() {
    	var jasmineReporters = require('jasmine-reporters');
    	jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        	consolidateAll: true,
        	savePath: 'testresults',
        	filePrefix: 'xmloutput'
    }));
}
};