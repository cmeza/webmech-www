angular.module('wmApp.wmDateDirective', [])

.directive('wmDate', function($filter) {
  return {
    restrict: 'A',
    link: function($scope, $element, $attrs) {
      $element.text($filter('date')(new Date(), $attrs.wmDate))
    }
  };
});