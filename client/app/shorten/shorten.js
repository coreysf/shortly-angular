angular.module('shortly.shorten', [])

.controller('ShortenController', function ($http, $scope, $location, Links) {
  $scope.link = {};
  $scope.longUrl = "";
  $scope.addLink = function (link) {
    $http({
      method: 'POST',
      url: '/api/links',
      data: link
    })
    .then(function (res) {
      // return res.status;
      // return res.redirect(301, '/links');
      $location.url('/links');
    });
  };
});