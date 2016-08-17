var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
			.when('/', {
				templateUrl:'views/main.html',
				controller: 'mainController'
			})
			.when('/movie/:movie', {
				templateUrl:'views/home.html',
				controller: 'movieProfile'
			})
			$locationProvider.html5Mode(true);
});
