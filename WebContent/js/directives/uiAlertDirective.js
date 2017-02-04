angular.module("listaTelefonica").directive("uiAlert", function(){
	return {
		templateUrl: "view/alert.html",
		replace: true,
		restrict: "AE",
		scope: {
			title : "@", //@ é uma atalho, é o mesmo = title: "@title"
			error: "=message"
		}
		//transclude: true
	};
});

//Restrict: 
//A - Atributo
//E - Elemento
//C - Classe
//M - Comentário