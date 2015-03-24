angular.module('waterintakeApp')
.directive('wiTypeSelect', function() {
  return {
    replace: true,
    restrict: "E",
    templateUrl: '/views/directives/wi-typeSelect.html',
      };
  });
