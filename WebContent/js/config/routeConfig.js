angular.module("listaTelefonica").config(function ($routeProvider){
	$routeProvider.when("/contas",{
		controller: "listaTelefonicaCtrl",
		templateUrl: "view/contas.html",
		resolve: {
			contas: function(contasAPI){
				return contasAPI.getContas();
			}
		}
	});
	
	$routeProvider.when("/novaConta",{
		templateUrl: "view/novaConta.html",
		controller: "novoContaCtrl",
		resolve: {
			
		}
	});

	$routeProvider.when("/detalhesConta/:id",{
		templateUrl: "view/detalhesConta.html",
		//resolve: {
		//	conta: function(contasAPI, $route){
		//		return contasAPI.getConta($route.current.params.id);
		//	}
		//}
		controller: "detalhesContaCtrl"
	});

	$routeProvider.when("/error",{
		templateUrl: "view/error.html"
	});

	$routeProvider.otherwise({
		redirectTo: "/contas"
	});

});