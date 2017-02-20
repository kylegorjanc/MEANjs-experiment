var kyleApp = angular.module('kyleApp', ['ngRoute']);

kyleApp.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider

  .when('/', {
    templateUrl : 'views/home.html',
    controller : 'mainController'
  })

  .when('/photos', {
    templateUrl : 'views/photos.html',
    controller : 'mainController'
  })

  .when('/projects', {
    templateUrl : 'views/projects.html',
    controller : 'mainController'
  })

  .when('/resume', {
    templateUrl : 'views/resume.html',
    controller : 'mainController'
  });
});


// ======== CONTROLLERS

kyleApp.controller('mainController', function($scope) {
  $scope.message = 'check me out!';
});

kyleApp.controller('photoController', function($scope) {
  $scope.message = 'check me out!';
});

kyleApp.controller('projectsController', function($scope) {
    $scope.message = 'Look! I am projects page.';
});



