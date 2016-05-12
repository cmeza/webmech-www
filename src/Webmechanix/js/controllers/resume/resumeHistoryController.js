angular.module('wmApp.resumeJobHistoryController', [])

.controller('ResumeJobHistoryCtrl', function($scope, ResumeSvc) {
  console.log('ResumeJobHistoryCtrl');

  function getList() {
    return ResumeSvc.getJobsList().then(function(data) {
      $scope.jobs = data;
    })
  }

/*  $scope.$on('$stateChangeStart ', function() {
    console.log('stateChangeStart');
    getList();
  });*/

  getList();
});
