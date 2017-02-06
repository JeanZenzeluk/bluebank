angular.module("transferencia").config(function ($httpProvider){
	$httpProvider.interceptors.push("timestampInterceptor");
	$httpProvider.interceptors.push("errorInterceptor");
});