angular.module('wmApp.ResumeSummaryController', [])

.controller('ResumeSummaryCtrl', function($scope, ResumeSvc) {
  console.log('ResumeSummaryCtrl');

  function getSummary() {
    return ResumeSvc.getSummary().then(function(data) {
      $scope.summary = data;
    })
  }

  $scope.$on('$viewContentLoading', function() {
    getSummary();
  });

  $scope.showContact = true;
});
