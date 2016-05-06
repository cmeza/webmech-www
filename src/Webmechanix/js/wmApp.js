'use strict';

angular.module('wmApp', [
    // ext dependencies
    'ui.router',

    // config
    'wmApp.wmStates',

    // constants
    'wmApp.wmConstants',

    // services
    'wmApp.resumeService',

    // controllers
    'wmApp.ResumeSummaryController',
    'wmApp.ResumeListController',
    'wmApp.ResumeDetailController'

    // directives
])

.run(function (
    $rootScope,
    $location
) {
    console.log ('App Loaded');// [', $location.state(), ']');

    // debug info
    $rootScope.$on("$stateChangeError", console.log.bind(console));
})
;
