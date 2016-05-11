angular.module('wmApp.ResumeDetailController', [])

.controller('ResumeDetailCtrl', function($scope,
                                         $stateParams,
                                         $filter,
                                         ResumeSvc) {
  console.log('ResumeDetailCtrl');

  function getDetail() {
    return ResumeSvc.getJobDetail($stateParams.jobId).then(function(data) {
      console.log('scope detail');

      var dates = data.id;
      dates = dates.split('-');

      function createDate(dateStr) {
        return new Date(dateStr.substring(0,4) + '-' + dateStr.substring(dateStr.length - 2, dateStr.length) + '-02');
      }

      dates = dates.map(createDate);

      $scope.dateStart = $filter('date')(dates[0], 'MMMM yyyy');
      $scope.dateEnd = $filter('date')(dates[1], 'MMMM yyyy');

      console.log('dates', dates, $scope.dateStart, $scope.dateEnd);
      $scope.jobDetails = data;
    });
  }

  getDetail();
});
