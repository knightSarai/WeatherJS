import RootComponent from './root.component.js';
import WeatherModule from './components/weather.module.js';
const RootModule = angular
    .module('root', [WeatherModule.name])
    .component('rootCom', RootComponent);

export default RootModule;