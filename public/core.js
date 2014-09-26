myApp = angular.module("syncTube")

  myApp = angular.module('textInputExample', [])


    myApp.controller('ExampleController', ['$scope', function($scope) {
      $scope.text = 'guest';
      $scope.word = /^\s*\w*\s*$/;
    }]);
