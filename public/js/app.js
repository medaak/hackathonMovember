angular.module('app', ['ngRoute'])
        .service('todoService', todoService)
        .service('membreService', membreService)
        .controller('mainController', mainController)
        .controller('photoController', photoController)
        .controller('membreController', membreController)
        .controller('membreEditController', membreEditController)
        .config(routes)
        ;
