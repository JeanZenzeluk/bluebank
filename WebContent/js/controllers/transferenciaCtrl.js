angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contas, contasAPI, serialGenerator, $location, $rootScope){

			$scope.app = "Lista Telefonica";
			$scope.errorMessage = "Não foi possível carregar os dados!";	

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

			
			if($scope.contas.length == 0){
				//contas.data.forEach(function(item){
				//	$scope.contas.push(item);
				//});
			}

			var generateSerial = function (contas) {
				contas.forEach(function (item){
					item.serial = serialGenerator.generate();
				});
			}

			$scope.apagarContatos = function(contas){
				
				$rootScope.contas = contas.filter(function (conta){
					if(!conta.selecionado) return conta;
				});
			};

			$scope.isContatoSelecionado = function (contas){
				return contas.some(function (conta){
					return conta.selecionado;
				});
			}

			$scope.ordenarPor = function(campo){
				$scope.criterioDeOrdenacao = campo;
				$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
			};

			//carregarContatos();
			generateSerial($scope.contas);

		});