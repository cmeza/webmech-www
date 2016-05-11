angular.module('wmApp.wmDateDirective', [])

.directive('wmDate', function($filter) {
  return {
    link: function($scope, $element, $attrs) {
      $element.text($filter('date')(new Date(), $attrs.wmDate))
    }
  };
});