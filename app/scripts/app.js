'use strict';

/**
 * @ngdoc overview
 * @name waterintakeApp
 * @description
 * # waterintakeApp
 *
 * Main module of the application.
 */
angular
  .module('waterintakeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        name: 'Home'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        name: 'About'
      })
      .when('/locate', {
        templateUrl: 'views/intakecreate.html',
        controller: 'IntakeCreateCtrl',
        name: 'Locate'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
