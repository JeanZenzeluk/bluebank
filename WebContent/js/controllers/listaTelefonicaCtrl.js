angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contas, serialGenerator, $rootScope){

			$scope.app = "Lista Telefonica";
			$scope.errorMessage = "Não foi possível carregar os dados!";	

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