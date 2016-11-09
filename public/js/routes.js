const routes = ($routeProvider, $httpProvider) => {

    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'mainController',
            controllerAs: 'vm'
        })
        .when('/selectphoto', {
            templateUrl: 'views/selectphoto.html',
            controller: 'photoController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        })

}
