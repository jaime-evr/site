angular.module('Site', ['templates', 'ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'home.html',
      controller: 'HomeCtrl'
    })
  }
]);

