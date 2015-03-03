'use strict';

/**
 * @ngdoc function
 * @name waterintakeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the waterintakeApp
 */
angular.module('waterintakeApp')
  .controller('MainCtrl', function ($scope,$timeout, MapService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $timeout(function(){MapService.iniate();});



  });
