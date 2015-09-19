angular.module('shortly.shorten', [])

.controller('ShortenController', function ($http, $scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function (link) {
    $http({
      method: 'POST',
      url: '/api/links',
      data: link
    })
    .then(function (resp) {
      return resp.status;
    });
  };
});
