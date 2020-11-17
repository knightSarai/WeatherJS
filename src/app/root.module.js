import RootComponent from './root.component.js';

const RootModule = angular
    .module('root', [])
    .component('rootCom', RootComponent);

export default RootModule;