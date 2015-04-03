angular.module('waterintakeApp')
.directive('intakeDisplay', function() {
  return {
    restrict: "E",
    scope: {
      intake: "=",
      user: "="
    },
    templateUrl: '/views/directives/intake.html',
  link: function(scope){
    window.s = scope;
    scope.distance = function(intake){
      var latDist = intake.lat - scope.user.lat;
      var longDist = intake.long - scope.user.long;
      var dist = Math.sqrt( Math.pow(latDist, 2) +Math.pow(longDist, 2)  );
      // convert distance in meter (from Degree/nautical miles)

      return   Math.round(1850*60*dist);
    };

    scope.direction = function(intake){
      var latDist = intake.lat - scope.user.lat;
      var longDist = intake.long - scope.user.long;
      var dist = Math.sqrt( Math.pow(latDist, 2) +Math.pow(longDist, 2)  );
      return   {x: latDist/dist ,y: longDist/dist};
    };
    }

  };
});
