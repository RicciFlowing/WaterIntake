'use strict';

/**
 * @ngdoc function
 * @name waterintakeApp.controller:IntakecreatectrlCtrl
 * @description
 * # IntakecreatectrlCtrl
 * Controller of the waterintakeApp
 */
angular.module('waterintakeApp')
  .controller('IntakeCreateCtrl', function ($scope, $timeout, MapService) {

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

      $scope.newIntake = {
        location: "",
        type: "underground"
      };

       $scope.addIntake = function (){
        this.intakes.push({
          lat: MapService.getEditMarkerLat(),
          long: MapService.getEditMarkerLng(),
          location: this.newIntake.location,
          type: this.newIntake.type
        });
        console.log(this.intakes);

      }

    $timeout(function(){
      MapService.iniate($scope.user);
      MapService.drawUser();
      MapService.drawIntakes($scope.intakes);
      MapService.drawEditMarker();

    });

  });
