angular.module("listaTelefonica").controller("detalhesContaCtrl", function ($scope, contasAPI, $routeParams){

	var carregaDetalhamentoConta = function(){
		contasAPI.getConta($routeParams.id).success(function (data){
			$scope.conta = data;
		});
	}

	/*Pode também passar o conta Provider se for adicionar o resolve do 
	  mesmo recebendo o retorno do serviço do contaAPI, deixando o código aqui assim:
	   
		$scope.conta = conta.data.
	*/

	carregaDetalhamentoConta();
});