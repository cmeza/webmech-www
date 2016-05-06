angular.module('wmApp.wmStates', [])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('resume', {
      url: '/resume',
      templateUrl: 'ng/views/resume/resumeSummary.html',
      controller: 'ResumeSummaryCtrl'
    })
    .state('resume.list', {
      url: '/list',
      templateUrl: 'ng/views/resume/resumeList.html',
      controller: 'ResumeListCtrl'
    })
    .state('resume.detail', {
      url: '/detail',
      templateUrl: 'ng/views/resume/resumeDetail.html',
      controller: 'ResumeDetailCtrl'
    })
  ;

  $urlRouterProvider.otherwise('/resume');
})
.run(function($state) {
  // $state.go('resume');
  // console.log('Current State: ', $state.current);
})
;
