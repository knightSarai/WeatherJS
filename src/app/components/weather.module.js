import WeatherComponent from './weather.component.js';
import Header from './header/header.component.js'
import Form from './form/form.component.js';
import Forcast from './forcast/forcast.component.js';

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
            .state('forcast', {
                url: '/forcast',
                component: 'forcast'
            })
    })
    .component('weatherForm', WeatherComponent)
    .component('header', Header)
    .component('cityForm', Form)
    .component('forcast', Forcast);

export default WeatherModule;