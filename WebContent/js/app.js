angular.module("listaTelefonica", ["ngMessages", "serialGenerator", "ui", "ngRoute"])
.run(function($rootScope) {
    $rootScope.contas = [];
})