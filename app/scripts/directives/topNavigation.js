angular.module('waterintakeApp')
.directive('wiTopNav', function(routeService, $location) {
  return {
    replace: true,
    restrict: "E",
    templateUrl: '/views/directives/wiTopNav.html',
    controller: function($scope, routeService){

      $scope.routes = routeService.routes;
      $scope.isActive = function(route){
        return route.path === $location.path();
      };

    }


      };
  });
