angular.module("listaTelefonica").controller("novaContaCtrl", function ($scope, contasAPI, serialGenerator, $location, $rootScope){

			$scope.cores = [
				{nome: "Vermelho", corcss: "#FA8072"},
				{nome: "Azul", corcss: "#87CEFA"},
				{nome: "Amarelo", corcss: "#FFD700"}
			];

			$scope.adicionarConta = function(conta){
				conta.serial = serialGenerator.generate();
				conta.data = new Date();
				conta.id = $rootScope.contas.length +1;
				contasAPI.saveConta(conta).success(function (data){
					$rootScope.contas.push(angular.copy(conta));
					alert($scope.conta.nome + " adicionado com sucesso!");
					console.log("rootScope.contas = " + $rootScope.contas.length);
					delete $scope.conta;
					//Volta o contaForm ao estado 'Pristine' (pristine é quando os campos não foram tocados ainda)
					$scope.contaForm.$setPristine();
					$location.path("/contas");
					//carregarContas();
				});

				//adiciona no array, e depois deleta o conta do escopo
				//$scope.contas.push(angular.copy(conta)); 
				
			};

			/*
			$scope.adicionarConta = function(conta){
				conta.data = new Date();
				//adiciona no array, e depois deleta o conta do escopo
				$scope.contas.push(angular.copy(conta)); 
				delete $scope.conta;
				//Volta o contaForm ao estado 'Pristine' (pristine é quando os campos não foram tocados ainda)
				$scope.contaForm.$setPristine();
			}; 
			*/

		});