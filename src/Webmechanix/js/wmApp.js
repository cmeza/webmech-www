'use strict';

angular.module('wmApp', [
    // ext dependencies
    'ui.router',
    'ngMessages',
    'ngFileSaver',

    // config
    'wmApp.wmStates',

    // constants
    'wmApp.wmConstants',

    // services
    'wmApp.resumeService',

    // controllers
    'wmApp.resumeSummaryController',
    'wmApp.resumeJobHistoryController',
    'wmApp.resumeJobDetailController',
    'wmApp.resumeDownloadController',
    'wmApp.resumeSourceCodeController',
    'wmApp.resumePortfolioController',

    // directives
    'wmApp.wmDateDirective'
  ]
)

.config(function($httpProvider, wmConstants) {
  $httpProvider.defaults.headers.common['X-WEBMECHANIX-APIKEY'] = wmConstants.webmech.api.key;
})

.run(function($rootScope) {
  console.log('App Loaded');// [', $location.state(), ']');

  // debug info
  $rootScope.$on("$stateChangeError", console.log.bind(console));
})
;
