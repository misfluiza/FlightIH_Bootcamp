sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"fiorileaveapp/test/integration/pages/LeaveRequestList",
	"fiorileaveapp/test/integration/pages/LeaveRequestObjectPage",
	"fiorileaveapp/test/integration/pages/LeaveDetailsObjectPage"
], function (JourneyRunner, LeaveRequestList, LeaveRequestObjectPage, LeaveDetailsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('fiorileaveapp') + '/test/flp.html#app-preview',
        pages: {
			onTheLeaveRequestList: LeaveRequestList,
			onTheLeaveRequestObjectPage: LeaveRequestObjectPage,
			onTheLeaveDetailsObjectPage: LeaveDetailsObjectPage
        },
        async: true
    });

    return runner;
});

