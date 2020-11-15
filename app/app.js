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
        .when('/forcast/:days', {
            templateUrl: 'pages/forcast.html',
            controller: 'forcastController'
        })
});
// SERVICES
WeatherApp.service('cityService', function () {
    this.city = "Amman";
});
// DIRECTIVES
WeatherApp.directive('weatherCard', [() => {
    return {
        restrict: 'E',
        templateUrl: 'directives/weatherCard.html',
        replace: true,
        scope: {
            weatherDay: '=',
            convertToCelsius: '&'
        }
    }
}])
//CONTROLLER
WeatherApp.controller('homeController', ['$scope', 'cityService',
    function ($scope, cityService) {
        $scope.city = cityService.city;

        $scope.$watch('city', function () {
            cityService.city = $scope.city;
        })
    }]);

WeatherApp.controller('forcastController', ['$scope', '$http', '$routeParams', 'cityService',
    function ($scope, $http, $routeParams, cityService) {
        $scope.city = cityService.city;
        /** API request */
        const appid = 'bd46242ed283bdb91ab51b08972175c3';
        const days = $routeParams.days | 2;
        $http
            .get(`http://api.openweathermap.org/data/2.5/forecast?q=${$scope.city}&cnt=${days}&appid=${appid}`)
            .then(res => $scope.weatherResult = res.data)
            .then(() => console.log($scope.weatherResult));
        $scope.convertToCelsius = degK => Math.round(degK - 273.15)
        /**Watcher */
    }
]);

