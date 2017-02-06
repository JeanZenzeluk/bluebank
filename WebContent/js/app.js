angular.module("transferencia", ["ngMessages", "serialGenerator", "ui", "ngRoute"])
.run(function($rootScope) {
    $rootScope.contas = [];
})