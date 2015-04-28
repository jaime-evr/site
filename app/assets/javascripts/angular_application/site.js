angular.module('Site', ['templates', 'ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'home.html'
    }).when('/about', {
      templateUrl: 'about.html'
    }).when('/blog', {
      templateUrl: 'blog.html'
    }).when('/contact', {
      templateUrl: 'contact.html'
    })
  }
]);

