import template from './weather.template.js';

const WeatherComponent = {
    binding: {},
    template,
    controller: class WeatherController {
        constructor() {
            this.city = "Amman"
        }
    }
}

export default WeatherComponent;