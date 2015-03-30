'use strict';

/**
 * @ngdoc function
 * @name waterintakeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the waterintakeApp
 */
angular.module('waterintakeApp')
  .controller('MainCtrl', function ($scope,$timeout, MapService, distanceFilter, typeFilter) {

    var over = {id:1, name:'overground'};
    var under = {id:2, name:'underground'};
    var open = {id:3, name:'open water'};
    $scope.intakes = [
      {
        lat: 54.277 ,
        long: 13.121,
        location: 'Mainstreet 16',
        type: over
      },
      {
        lat: 54.268,
        long: 13.124,
        location: 'second street 2',
        type: under
      },
      {
        lat: 54.258,
        long: 13.124,
        location: 'second  4',
        type: open
      },
      {
        lat: 54.268,
        long: 13.134,
        location: 'first street 7',
        type: over
      },
      {
        lat: 54.25 ,
        long: 13.1,
        location: 'Far away 19',
        type: over
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
        // convert distance in meter (from Degree/nautical miles)

        return   Math.round(1850*60*dist);
      };

      $scope.direction = function(intake){
        var latDist = intake.lat - $scope.user.lat;
        var longDist = intake.long - $scope.user.long;
        var dist = Math.sqrt( Math.pow(latDist, 2) +Math.pow(longDist, 2)  );
        return   {x: latDist/dist ,y: longDist/dist};
      };

    $timeout(function(){
      MapService.iniate($scope.user);
      MapService.drawUser();
      MapService.drawIntakes($scope.intakes);
    });



  });
