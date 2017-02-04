angular.module("exercicio3", []);

angular.module("exercicio3").directive("uiFuncionalidades", function(){
	return {
		controller: function ($scope, $element, $attrs){
			this.carregaFuncionalidades = function (scope) {
				
				scope.totalRegistros = scope.funcionalidadesLista.length;
			};
			
			/*
			this.retornaTotalRegistros = function(){
				console.log("chamou retorna total registros");
            	return this.funcionalidades.length;
            }*/

		}
	};
});

angular.module("exercicio3").directive("uiTableExercicio", function(){
	return {
		templateUrl: "view/table-exercicio3.html",
		replace: true,
		restrict: "AE",
		require: "^uiFuncionalidades",
		scope: {
			funcionalidadesLista : "="
		},
		link: function(scope, element, attrs, ctrl){
			ctrl.carregaFuncionalidades(scope);
			scope.buscarPorFiltro = function(){
				scope.filtroBusca = scope.inputBusca;
			}
		}
	};
});