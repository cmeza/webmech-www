angular.module('wmApp.resumeDownloadController', [])

.controller('ResumeDownloadCtrl', function($scope, $http) {
  $scope.showResumeLink = false;

  $scope.setShowResumeLink = function() {
    console.log('show link');
    $scope.showResumeLink = true;
  };

  $scope.returnResumeFile = function() {
    alert('COMING SOON!');
  };
});