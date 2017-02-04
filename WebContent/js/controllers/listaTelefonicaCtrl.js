angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatos, serialGenerator, $rootScope){

			$scope.app = "Lista Telefonica";
			$scope.errorMessage = "Não foi possível carregar os dados!";	

			if($scope.contatos.length == 0){
				contatos.data.forEach(function(item){
					$scope.contatos.push(item);
				});
			}

			var generateSerial = function (contatos) {
				contatos.forEach(function (item){
					item.serial = serialGenerator.generate();
				});
			}

			// ------------- $scope.operadoras = operadoras.data;

			/*
				$scope.contatos = [
							{nome: "Pedro", telefone: "99998888", operadora: {nome: "TIM", codigo: 41, categoria: "Celular"}, 
								data: new Date(), cor: "#FA8072"},
							{nome: "Ana", telefone: "99998877", operadora: {nome: "TIM", codigo: 41, categoria: "Celular"},
								data: new Date(), cor: "#87CEFA"},
							{nome: "Maria", telefone: "99998866", operadora: {nome: "TIM", codigo: 41, categoria: "Celular"},
							data: new Date(), cor: "# "}
						];
			*/

			//$scope.contatos = [];

			/*$scope.operadoras = [
				{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
				{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
				{nome: "TIM", codigo: 41, categoria: "Celular", preco: 3},
				{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 2},
				{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 1}
			];*/
/*
			var carregarContatos = function () {
				//TODO Corrigir URL Abaixo!
				contatosAPI.getContatos().success(function (data, status){
					data.forEach(function (item){
						item.serial = serialGenerator.generate();
					});
					
					//TODO OBS: Só vai buscar quando nao tiver registro porque não
					//esta persistindo os dados de verdade. Quando implementar a real persistência
					//o if abaixo pode ser retirado, deixando apenas o $rootScope.contatos = data;
					if($rootScope.contatos.length == 0){
						$rootScope.contatos = data;
					}
				}).error(function (data, status){
					$scope.errorMessage = "Não foi possível carregar os dados!"
				});
				console.log("rootScope.contatos carregar = " + $rootScope.contatos.length);
			}
*/
			/*
			var carregarOperadoras = function () {
				operadorasAPI.getOperadoras().success(function (data, status){
					$scope.operadoras = data;
				});
			}*/


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

			$scope.apagarContatos = function(contatos){
				
				$rootScope.contatos = contatos.filter(function (contato){
					if(!contato.selecionado) return contato;
				});
			};

			$scope.isContatoSelecionado = function (contatos){
				return contatos.some(function (contato){
					return contato.selecionado;
				});
			}

			$scope.ordenarPor = function(campo){
				$scope.criterioDeOrdenacao = campo;
				$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
			};

			//carregarContatos();
			generateSerial($scope.contatos);

		});