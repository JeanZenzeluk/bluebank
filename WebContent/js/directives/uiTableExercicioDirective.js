angular.module("tabelaExercicio", []);

angular.module("tabelaExercicio").directive("uiFuncionalidades", function(){
	return {
		controller: function ($scope, $element, $attrs){
			
			this.inicializaOrdenacao = function (scope) {
				scope.criterioOrdenacao = "nome";
				scope.direcaoOrdenacao = false;
			};

		}
	};
});

angular.module("tabelaExercicio").directive("uiTableExercicio", function(){
	return {
		templateUrl: "view/table-exercicio3.html",
		replace: true,
		restrict: "AE",
		require: "^uiFuncionalidades",
		scope: {
			funcionalidadesLista : "=",
			nameFirstColumn : "@",
			totalDeRegistros : "="
		},
		link: function(scope, element, attrs, ctrl){
			ctrl.inicializaOrdenacao(scope);
			scope.buscarPorFiltro = function(){
				scope.filtroBusca = scope.inputBusca;
			};
			scope.ordenarPor = function(campo){
 				scope.criterioOrdenacao = campo;
				scope.direcaoOrdenacao = !scope.direcaoOrdenacao;
			};

		}
	};
});