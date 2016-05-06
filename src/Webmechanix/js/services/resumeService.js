angular.module('wmApp.resumeService', [])

.factory('ResumeSvc', function(wmConstants) {

  console.log('ResumeSvc');

  return {
    apiUrl: wmConstants.webmech.api.url,
    apiKey: wmConstants.webmech.api.key,

    getSummary: function() {
      return this.apiUrl;
    }
  };
});