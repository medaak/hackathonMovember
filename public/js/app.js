angular.module('app', ['ngRoute'])
        .service('todoService', todoService)
        .service('membreService', membreService)
        .controller('mainController', mainController)
        .controller('creerMembreController',creerMembreController)
        .config(routes)
        ;
