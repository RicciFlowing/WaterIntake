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

    $scope.intakes = [
      {
        lat: 54.27 ,
        long: 13.121,
        location: 'Mainstreet 16',
        type: 'overground'
      },
      {
        lat: 54.268,
        long: 13.124,
        location: 'second street 2',
        type: 'underground'
      }];

      $scope.user = {
        name : 'benjamin',
        lat: 54.27,
        long: 13.12
      };

    $timeout(function(){
      MapService.iniate($scope.user);
      MapService.drawUser($scope.user);
      MapService.drawIntake($scope.intakes);
    });



  });
