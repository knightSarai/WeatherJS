import RootComponent from './root.component.js';

const RootModule = angular.module('root', []);
RootModule.component('rootCom', RootComponent);
export default RootModule;