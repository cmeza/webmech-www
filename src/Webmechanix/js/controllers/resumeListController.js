angular.module('wmApp.ResumeListController', [])

.controller('ResumeListCtrl', function($scope, ResumeSvc) {
  console.log('ResumeListCtrl');

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
