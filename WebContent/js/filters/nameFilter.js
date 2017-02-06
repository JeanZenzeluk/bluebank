angular.module("transferencia").filter("name", function(){
	return function (input){
		var listaDeNomes = input.split(" ");
		var transferencia = listaDeNomes.map(function (nome){
			if(/(de|da)/.test(nome)) return nome;
			return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
		});
		
		return transferencia.join(" ");
	};
});