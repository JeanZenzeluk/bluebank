//Foi incluído o $q porque ira pegar o Response
angular.module("transferencia").factory("errorInterceptor", function($q, $location){
	return {
		responseError: function (rejection){
			if(rejection.status === 500){
				$location.path("/error");
			}
			return $q.reject(rejection);
		}
	};
});