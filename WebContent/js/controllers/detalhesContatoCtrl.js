angular.module("listaTelefonica").controller("detalhesContatoCtrl", function ($scope, contatosAPI, $routeParams){

	var carregaDetalhamentoContato = function(){
		contatosAPI.getContato($routeParams.id).success(function (data){
			$scope.contato = data;
		});
	}

	/*Pode também passar o contato Provider se for adicionar o resolve do 
	  mesmo recebendo o retorno do serviço do contatoAPI, deixando o código aqui assim:
	   
		$scope.contato = contato.data.
	*/

	carregaDetalhamentoContato();
});