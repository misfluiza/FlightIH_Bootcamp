sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'fiorileaveapp',
            componentId: 'LeaveDetailsObjectPage',
            contextPath: '/LeaveRequest/_LeaveDetailsIH'
        },
        CustomPageDefinitions
    );
});