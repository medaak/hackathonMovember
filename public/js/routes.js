const routes = ($routeProvider, $httpProvider) => {

    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'mainController',
            controllerAs: 'vm'
        })
        .when('/selectphoto', {
            templateUrl: 'views/selectphotopc.html',
            controller: 'photoController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        })

}
