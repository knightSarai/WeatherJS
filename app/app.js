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
// SERVICES
WeatherApp.service('cityService', function () {
    this.city = "New York, NY";
})
//CONTROLLER
WeatherApp.controller('homeController', ['$scope', 'cityService', function ($scope, cityService) {
    $scope.city = cityService.city;
    $scope.$watch('city', () => {
        cityService.city = $scope.city;
    })
}]);

WeatherApp.controller('forcastController', ['$scope', 'cityService', function ($scope, cityService) {
    $scope.city = cityService.city;
}]);

