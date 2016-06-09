angular.module('wmApp.wmImageModalDirective', [])

.directive('wmImageModal', function($compile) {
  return {
    restrict: 'A',
    link: function($scope, element, $attrs) {
      element.bind('click', function(event) {
        event.preventDefault();

        var imgUrl = window.location.origin + '/' + $attrs.href,
            // content = '<div class="modal-header"><h3 class="modal-title">' + $attrs.title + '</h3></div><div class="modal-body"><img src="' + imgUrl + '" width="100%"></div>';
            content = '<h3>' + $attrs.title + '</h3><img width="100%" src="' + imgUrl + '">';

        $('#wm-modal .modal-content').html(content);

        /*var modal = angular.element(document.querySelector('#wm-modal .modal-content'));

        modal.append(content);*/
      });
    }
  };
});