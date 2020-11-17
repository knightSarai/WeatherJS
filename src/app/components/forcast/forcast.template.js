const template = `
    <h1 class="my-2 text-info ">Forcast for {{city}}</h1>
    <a class="btn btn-secondary my-4" href="#!/">Back To Search</a>
    <hr />
    Days: <a class="weather-link" href="#!/forcast/2">2</a> | <a class="weather-link" href="#!/forcast/5">5</a> | <a
        class="weather-link" href="#!/forcast/7">7</a>
    <hr />
    <h1 ng-show="!weatherResult">No Match Found</h1>
    <div ng-repeat="weather in weatherResult.list">
        <weather-card weather-day="weather" convert-to-celsius="convertToCelsius(degK)"></weather-card>
    </div>
`;

export default template;