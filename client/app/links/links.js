angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};

  $scope.getLinks = function () {
    Links.getLinks()
    .then(function (promise) {
      $scope.data.links = promise.data;
    });

    // .then(function (token) {
    //   $window.localStorage.setItem('com.shortly', token);
    //   $location.path('/links');
    // })
    // .catch(function (error) {
    //   console.error(error);
    // });
  };
  $scope.getLinks();

});
