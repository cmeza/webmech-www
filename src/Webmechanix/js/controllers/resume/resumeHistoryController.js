angular.module('wmApp.resumeJobHistoryController', [])

.controller('ResumeJobHistoryCtrl', function($scope, $state, ResumeSvc) {
  console.log('ResumeJobHistoryCtrl');

  function getList() {
    return ResumeSvc.getJobsList().then(function(data) {
      $scope.jobs = data;
    })
  }

  $scope.gotoDetail = function(jobId) {
    $state.go('resume.history.detail', {jobId: jobId}, {location: true});
  };

/*  $scope.$on('$stateChangeStart ', function() {
    console.log('stateChangeStart');
    getList();
  });*/

  getList();
});
