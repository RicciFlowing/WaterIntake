'use strict';

/**
 * @ngdoc service
 * @name waterintakeApp.RouteService
 * @description
 * # RouteService
 * Service in the waterintakeApp.
 */

angular.module('waterintakeApp')
  .service('routeService', function ($route) {

    var routes = [];
    angular.forEach($route.routes, function (route, path) {
      if (route.name) {
        routes.push({
          path: path,
          name: route.name
        });

      }
    });
    return {
      routes: routes,
  };

  });
