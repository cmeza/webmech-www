angular.module('wmApp.ResumeDetailController', [])

.controller('ResumeDetailCtrl', function($scope, $stateParams, ResumeSvc) {
  console.log('ResumeDetailCtrl');

  function getDetail() {
    return ResumeSvc.getJobDetail($stateParams.jobId).then(function(data) {
      console.log('scope detail');
      $scope.jobDetails = data;
    });
  }

  getDetail();
});
