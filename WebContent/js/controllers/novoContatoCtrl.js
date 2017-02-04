angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, contatosAPI, serialGenerator, $location, $rootScope, operadoras){

			$scope.operadoras = operadoras.data;
			$scope.cores = [
				{nome: "Vermelho", corcss: "#FA8072"},
				{nome: "Azul", corcss: "#87CEFA"},
				{nome: "Amarelo", corcss: "#FFD700"}
			];

			/*
			var carregarOperadoras = function () {
				operadorasAPI.getOperadoras().success(function (data, status){
					$scope.operadoras = data;
				});
			} */

			$scope.adicionarContato = function(contato){
				contato.serial = serialGenerator.generate();
				contato.data = new Date();
				contato.id = $rootScope.contatos.length +1;
				contatosAPI.saveContato(contato).success(function (data){
					$rootScope.contatos.push(angular.copy(contato));
					alert($scope.contato.nome + " adicionado com sucesso!");
					console.log("rootScope.contatos = " + $rootScope.contatos.length);
					delete $scope.contato;
					//Volta o contatoForm ao estado 'Pristine' (pristine é quando os campos não foram tocados ainda)
					$scope.contatoForm.$setPristine();
					$location.path("/contatos");
					//carregarContatos();
				});

				//adiciona no array, e depois deleta o contato do escopo
				//$scope.contatos.push(angular.copy(contato)); 
				
			};

			/*
			$scope.adicionarContato = function(contato){
				contato.data = new Date();
				//adiciona no array, e depois deleta o contato do escopo
				$scope.contatos.push(angular.copy(contato)); 
				delete $scope.contato;
				//Volta o contatoForm ao estado 'Pristine' (pristine é quando os campos não foram tocados ainda)
				$scope.contatoForm.$setPristine();
			}; 
			*/

		});