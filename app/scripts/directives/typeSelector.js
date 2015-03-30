angular.module('waterintakeApp')
.directive('wiTypeSelect', function() {
  return {
    replace: true,
    restrict: "E",
    require: "?ngModel",
    templateUrl: '/views/directives/wi-typeSelect.html',
    scope: {
      activeType: "="
    },
    link: function(scope, element, attrs, ngModelCtrl){
      var activeType = {};
      scope.types =  [{id:1, name: 'overground'}, {id:2, name: 'underground'}, {id:1, name: 'open water'}];

      scope.isActive = function(type){
        return activeType && activeType.id === type.id;
      }

      scope.toggleType = function(type){
        if(type === activeType) {
          activeType = {};
        } else {
          activeType = type;
          window.t = type;
        }
        ngModelCtrl.$setViewValue(activeType);
      }
      ngModelCtrl.$render = function() {
        activeType = ngModelCtrl.$viewValue;
      }
    },
    controller: function($scope){
      $scope.types = [{id:1, name: 'overground'}, {id:2, name: 'underground'}, {id:1, name: 'open water'}];
    }
      };
  });
