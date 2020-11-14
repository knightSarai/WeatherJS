// MODULE
let WeatherApp = angular.module("weatherApp", ['ngRoute', 'ngResource']);
//ROUTE
WeatherApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })
        .when('/forcast', {
            templateUrl: 'pages/forcast.html',
            controller: 'forcastController'
        })
});
//CONTROLLER
WeatherApp.controller('homeController', ['$scope', function ($scope) {

}]);

WeatherApp.controller('forcastController', ['$scope', function ($scope) {

}]);

