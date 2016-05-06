'use strict';

var wmApp = angular.module('wmApp', [
    // dependencies
    'ui.router',

    // constants
    'wmApp.wmConstants',

    // services

    // controllers
    'wmApp.ResumeController'

    // directives
])

.run(function (
    $rootScope,
    $location,
    $state,
    wmConstants
) {
    console.log ('App Loaded [', $location.state(), ']');

    // $state.go('resume');

  // debug info
  //   $rootScope.$on("$stateChangeError", console.log.bind(console));
})
;