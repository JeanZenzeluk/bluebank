angular.module("listaTelefonica").factory("contasAPI", function($http, config){
	var _getContas = function(){
		return $http.get(config.baseUrl + "/conta/contas");
	};

	var _getConta = function(id){
		return $http.get(config.baseUrl + "/conta/contas/" + id);
	};

	var _saveConta = function(conta){
		return $http.post(config.baseUrl + "/conta/", conta);
	};
	
	return {
		getContas: _getContas,
		getConta: _getConta,
		saveConta: _saveConta
	};
});