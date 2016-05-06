angular.module('wmApp.wmStates', [])

.config(function($stateProvider,
                 $urlRouterProvider) {

  $stateProvider
      .state('resume', {
        url: '/',
        views: {
          "resumeView": {
            templateUrl: 'resume.html',
            controller: 'ResumeCtrl'
          }
        }
      })
  ;

  $urlRouterProvider.otherwise('/');
})
.run(function($state) {
  // $state.go('resume');
  console.log('Current State: ', $state.current);
})
;