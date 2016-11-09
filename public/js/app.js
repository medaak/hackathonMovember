angular.module('app', ['ngRoute'])
        .service('todoService', todoService)
        .controller('mainController', mainController)
        .controller('photoController', photoController)
        .config(routes)
        ;
