sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'zrap100ih',
            componentId: 'FlightIHObjectPage',
            contextPath: '/FlightIH'
        },
        CustomPageDefinitions
    );
});