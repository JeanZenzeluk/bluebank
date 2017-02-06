angular.module("transferencia").factory("timestampInterceptor", function(){

	return{
		request: function(config){
			var url = config.url;
			if(url.indexOf('view') > -1) return config;
			var timestamp = new Date().getTime();

			//Burla mecanismos de cache
			config.url = url + "?timestamp=" + timestamp;
			return config;
		}
	};

});