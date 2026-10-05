sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"urapproductreg/test/integration/pages/UraProductRegList.gen",
	"urapproductreg/test/integration/pages/UraProductRegObjectPage.gen"
], function (JourneyRunner, UraProductRegListGenerated, UraProductRegObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('urapproductreg') + '/test/flp.html#app-preview',
        pages: {
			onTheUraProductRegListGenerated: UraProductRegListGenerated,
			onTheUraProductRegObjectPageGenerated: UraProductRegObjectPageGenerated
        },
        async: true
    });

    return runner;
});

