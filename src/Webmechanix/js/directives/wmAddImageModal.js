angular.module('wmApp.wmAddImageModalDirective', [])

.directive('wmAddImageModal', function() {
  return {
    restrict: 'A',
    link: function ($scope, element, $attrs) {
      var anchors = element.find('a');

      angular.forEach(anchors, function (anchor) {
        var a = angular.element(anchor);
        a.attr('data-wm-image-modal', '');
        a.attr('data-toggle', 'modal');
        a.attr('data-target', '#wm-modal');
        a.attr('data-remote', 'false');
      });
    }
  }; 
});