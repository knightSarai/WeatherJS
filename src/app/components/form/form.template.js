const template = `
    <div id="home" class="row justify-content-center">
    <div class="col-md-6">
        <h4>Forcast by City</h4>
        <form ng-submit="submit()">
            <div class="form-group">
                <input type="text" ng-model="city" class="form-control">
                <input class="btn btn-primary my-2" value="Get Forcast" type="submit" />
            </div>
        </form>
    </div>
    </div>
`;

export default template;