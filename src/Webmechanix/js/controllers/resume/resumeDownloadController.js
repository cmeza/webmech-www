angular.module('wmApp.resumeDownloadController', [])

.controller('ResumeDownloadCtrl', function($scope, ResumeSvc, FileSaver, Blob) {
  console.log('ResumeDownloadCtrl');

  $scope.showResumeLink = true;

  $scope.userEmail = '';

  $scope.setShowResumeLink = function() {
    console.log('show link');
    $scope.showResumeLink = true;
  };

  $scope.returnResumeFile = function() {
    return ResumeSvc.getResumeFile($scope.userEmail).then(function(data) {
      console.log('get file', $scope.userEmail, data);
      var file = new Blob([data], {type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'});
      FileSaver.saveAs(file, 'ChrisMeza_resume.docx');
      // return data.data;
    });
  };
});
