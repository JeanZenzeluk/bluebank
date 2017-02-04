//Foi incluído o $q porque ira pegar o Response
angular.module("listaTelefonica").factory("errorInterceptor", function($q, $rootScope, $timeout){
	return{
		request: function (config){
			//Ativa o Loading
			$rootScope.loading = true;
			//$rootScope.loading = false;
			return config;
		},
		requestError: function (rejection){
			$rootScope.loading = false;
			return $q.reject(rejection);
		},
		response: function(response){
			$timeout(function(){
				$rootScope.loading = false;
			}, 500);
			return response;
		},
		responseError: function(rejection){
			$rootScope.loading = false;
			return $q.rejection;
		}
	};
});