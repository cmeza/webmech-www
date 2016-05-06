angular.module('wmApp.ResumeController', [])

.controller('ResumeCtrl', function($scope,
                                   wmConstants) {

  console.log('ResumeCtrl', wmConstants.webmech.api.url);

  $scope.data = 'omg data';
});
