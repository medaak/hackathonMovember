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
        .when('/createMember', {
            templateUrl: 'views/creerMembre.html',
            controller: 'membreController',
            controllerAs: 'vm'
        })
        .when('/profilMember', {
            templateUrl: 'views/editProfilMembre.html',
            controller: 'membreEditController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        })

}
