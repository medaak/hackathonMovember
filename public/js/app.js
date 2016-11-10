angular.module('app', ['ngRoute'])
        .service('todoService', todoService)
        .service('membreService', membreService)
        .controller('mainController', mainController)
        .controller('mapController', mapController)
        .controller('membreController', membreController)
        .controller('membreEditController', membreEditController)
        .config(routes)
        ;
