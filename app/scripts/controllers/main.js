'use strict';

/**
 * @ngdoc function
 * @name waterintakeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the waterintakeApp
 */
angular.module('waterintakeApp')
  .controller('MainCtrl', function ($scope,$timeout, MapService, distanceFilter) {

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
      },
      {
        lat: 54.25 ,
        long: 13.1,
        location: 'Far away 19',
        type: 'overground'
      }];

      $scope.user = {
        name : 'benjamin',
        lat: 54.27,
        long: 13.12
      };

      $scope.distance = function(intake){
        var latDist = intake.lat - $scope.user.lat;
        var longDist = intake.long - $scope.user.long;
        var dist = Math.sqrt( Math.pow(latDist, 2) +Math.pow(longDist, 2)  );
        // convert distence in meter (from Degree/nautical miles)
        return Math.round(1850*60*dist);
      };

    $timeout(function(){
      MapService.iniate($scope.user);
      MapService.drawUser();
      MapService.drawIntakes($scope.intakes);
    });



  });
