sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"zrap100ih/test/integration/pages/FlightIHList",
	"zrap100ih/test/integration/pages/FlightIHObjectPage",
	"zrap100ih/test/integration/pages/FlightDetailsObjectPage"
], function (JourneyRunner, FlightIHList, FlightIHObjectPage, FlightDetailsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('zrap100ih') + '/test/flp.html#app-preview',
        pages: {
			onTheFlightIHList: FlightIHList,
			onTheFlightIHObjectPage: FlightIHObjectPage,
			onTheFlightDetailsObjectPage: FlightDetailsObjectPage
        },
        async: true
    });

    return runner;
});

