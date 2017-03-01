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
    controller : 'photosController'
  })

  .when('/projects', {
    templateUrl : 'views/projects.html',
    controller : 'projectsController'
  })

  .when('/resume', {
    templateUrl : 'views/resume.html',
    controller : 'resumeController'
  });
});


// ======== CONTROLLERS

kyleApp.controller('mainController', function($scope) {
  $scope.message = 'Well hi there.';
});

kyleApp.controller('photosController', function($scope) {
  $scope.message = 'My cool pictures go here';
});

kyleApp.controller('projectsController', function($scope) {
    $scope.message = 'The Projects will go here';
});

kyleApp.controller('resumeController', function($scope) {
    $scope.title = 'Resume';
});


