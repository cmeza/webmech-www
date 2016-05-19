angular.module('wmApp.resumeService', [])

.factory('ResumeSvc', function($http, wmConstants) {

  console.log('ResumeSvc');

  return {
    apiUrl: wmConstants.webmech.api.url,
    apiKey: wmConstants.webmech.api.key,
    config: {},

    getSummary: function () {
      var url = this.apiUrl + '/resume/summary';

      return $http.get(url, this.config).then(function (data) {
        // console.log('summary svc data', data.data);
        return data.data;
      });
    },

    getJobsList: function () {
      var url = this.apiUrl + '/resume/jobs/min';

      return $http.get(url, this.config).then(function (data) {
        // console.log('list svc data', data.data);
        return data.data;
      })
    },

    getJobDetail: function (jobId) {
      var url = this.apiUrl + '/resume/detail/' + jobId;

      return $http.get(url, this.config).then(function (data) {
        // console.log('detail svc data', data.data);
        return data.data;
      })
    },

    getResumeFile: function(emailAddress) {
      var url = this.apiUrl + '/resume/file',
          params = {emailAddress: emailAddress};

      return $http.post(url, params, {responseType: 'arraybuffer'}).then(function(data) {
        console.log('resume', data);
        return data.data;
      });
    }
  };
});