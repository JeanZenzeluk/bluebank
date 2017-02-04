angular.module("listaTelefonica").config(function ($routeProvider){
	$routeProvider.when("/contatos",{
		controller: "listaTelefonicaCtrl",
		templateUrl: "view/contatos.html",
		resolve: {
			contatos: function(contatosAPI){
				return contatosAPI.getContatos();
			}
		}
	});
	
	$routeProvider.when("/novoContato",{
		templateUrl: "view/novoContato.html",
		controller: "novoContatoCtrl",
		resolve: {
			operadoras: function(operadorasAPI) {
				return operadorasAPI.getOperadoras();
			}
		}
	});

	$routeProvider.when("/detalhesContato/:id",{
		templateUrl: "view/detalhesContato.html",
		//resolve: {
		//	contato: function(contatosAPI, $route){
		//		return contatosAPI.getContato($route.current.params.id);
		//	}
		//}
		controller: "detalhesContatoCtrl"
	});

	$routeProvider.when("/error",{
		templateUrl: "view/error.html"
	});

	$routeProvider.otherwise({
		redirectTo: "/contatos"
	});

});