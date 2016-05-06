angular.module('wmApp.ResumeSummaryController', [])

.controller('ResumeSummaryCtrl', function($scope, ResumeSvc) {
  console.log('ResumeSummaryCtrl');

  $scope.$on('$viewContentLoading', function() {
    $scope.data = ResumeSvc.apiUrl + '/' + ResumeSvc.apiKey;
  })
});
