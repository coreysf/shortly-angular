angular.module('shortly.shorten', [])

.controller('ShortenController', function ($http, $scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function () {
    // console.log("$scope.longUrl: " + $scope.longUrl);
    Links.addLink($scope.link)
    .then(function (res) {
      $location.path('/links');     // $location is Angular module. Keeps this a single-page
    })                          // app & prevents controllers from being reloaded.
    .catch(function (err) {
      console.log(err);
    });
  };
});