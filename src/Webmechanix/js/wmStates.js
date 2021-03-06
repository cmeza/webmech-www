angular.module('wmApp.wmStates', [])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('resume', {
      url: '/resume',
      templateUrl: 'ng/views/resume/resumeSummary.html',
      controller: 'ResumeSummaryCtrl'
    })
    .state('resume.summary', {
      url: '/summary',
      templateUrl: 'ng/views/resume/resumeSummary.html',
      controller: 'ResumeSummaryCtrl'
    })
    .state('resume.contact', {
      url: '/contact',
      templateUrl: 'ng/views/resume/resumeContact.html',
      controller: 'ResumeSummaryCtrl'
    })
    .state('resume.skills', {
      url: '/skills',
      templateUrl: 'ng/views/resume/resumeSkills.html',
      controller: 'ResumeSummaryCtrl'
    })
    .state('resume.portfolio', {
      url: '/porfolio',
      templateUrl: 'ng/views/resume/resumePortfolio.html',
      controller: 'ResumePortfolioCtrl'
    })
    .state('resume.history', {
      url: '/history',
      templateUrl: 'ng/views/resume/resumeJobHistory.html',
      controller: 'ResumeJobHistoryCtrl'
    })
    .state('resume.history.detail', {
      url: '/:jobId',
      templateUrl: 'ng/views/resume/resumeJobDetail.html',
      controller: 'ResumeJobDetailCtrl'
    })
    .state('resume.download', {
      url: '/download',
      templateUrl: 'ng/views/resume/resumeDownload.html',
      controller: 'ResumeDownloadCtrl'
    })
    .state('resume.download.doc', {
      url: '/doc',
      templateUrl: 'ng/views/resume/resumeDownload.html',
      controller: 'ResumeDownloadCtrl'
    })
    .state('resume.sourceCode', {
      url: '/sourceCode',
      templateUrl: 'ng/views/resume/resumeSourceCode.html',
      controller: 'ResumeSourceCodeCtrl'
    })
  ;

  $urlRouterProvider.otherwise('/resume/summary');
})
.run(function($rootScope, $state) {
  // $state.go('resume');
  // console.log('Current State: ', $state.current);

  $rootScope.$state = $state;
})
;
