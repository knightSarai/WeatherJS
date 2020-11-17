import WeatherComponent from './weather.component.js';

const WeatherModule = angular
    .module('components.weather', [
        'ui.router'
    ])
    .config($stateProvider => {
        $stateProvider
            .state('weather', {
                url: '',
                component: 'weatherForm'
            })
    })
    .component('weatherForm', WeatherComponent)

export default WeatherModule;