angular.module("exercicio4").controller("exercicio4Ctrl", function ($scope, $http){

			$scope.tipos = [{codigo: 1, nome: "Web"},
			               {codigo: 2, nome: "Desktop"}];
			
			$scope.tecnicas = [{codigo: 1, nome: "Técnica Web"},
			         		{codigo: 2, nome: "Técnica Desktop"}];
			
			$scope.funcionalidades = [{nome:'AF-2', descricao:'Uma funcionalidade de teste'},
                         {nome:'BH3', descricao:'Funcionalidade para fim de teste'},
                         {nome:'ED-8', descricao:'Usada no teste'}];

			$scope.plataformas = [{nome:'Plataforma X1', descricao:'Uma plataforma de teste'},
                         {nome:'Plataforma ABC', descricao:'Plataforma para fim de teste'},
                         {nome:'plataforma EDR', descricao:'Usada no teste'}];            

            $scope.filtroBusca = "";
            $scope.habilitaAdicionarFuncionalidade = false;
            $scope.habilitaTabelaListagem = true;
            $scope.tipoFuncionalidade = false;

            $scope.clickProdutos = function(){
            	$scope.habilitaTabelaListagem = true;
            	$scope.tipoFuncionalidade = !$scope.tipoFuncionalidade;
            	$scope.saveSuccess = false;
				$scope.saveError = false;
            }

            $scope.adicionarPlataforma = function(){
            	limpaFormulario($scope.plataforma);
            	$scope.plataformaForm.$setPristine();
            	$scope.habilitaAdicionarFuncionalidade = false;
            	$scope.habilitaTabelaListagem = false;
            	$scope.tipoFuncionalidade = false;
            }

            $scope.adicionarFuncionalidade = function(){
            	limpaFormulario($scope.funcionalidade);
            	$scope.funcionalidadeForm.$setPristine();
            	$scope.habilitaAdicionarFuncionalidade = true;
            	$scope.habilitaTabelaListagem = false;
            	$scope.tipoFuncionalidade = true;
            }

            $scope.listarFuncionalidades = function(){
            	$scope.tipoFuncionalidade = true;
            	habilitarListagem();
            }

            $scope.listarPlataformas = function(){
            	$scope.tipoFuncionalidade = false;
            	habilitarListagem();
            }

            var habilitarListagem = function(){
            	$scope.habilitaAdicionarFuncionalidade = false;
            	$scope.habilitaTabelaListagem = true;
            }
			
			$scope.salvarFuncionalidade = function(funcionalidade){
				$http.post("http://localhost:8083/APIRESTAngularJS/REST/funcionalidade", funcionalidade).success(function (data){
					$scope.saveSuccess = true;
					$scope.saveError = false;
					$scope.listarFuncionalidades();
					$scope.funcionalidades.push(angular.copy(funcionalidade));
					$scope.filtroBusca = "";
				}).error(function (data){
					$scope.saveSuccess = false;
					$scope.saveError = true;
				});
			};

			$scope.salvarPlataforma = function(plataforma){
				$http.post("http://localhost:8083/APIRESTAngularJS/REST/plataforma", plataforma).success(function (data){
					$scope.saveSuccess = true;
					$scope.saveError = false;
					$scope.listarPlataformas();
					$scope.plataformas.push(angular.copy(plataforma));
					$scope.filtroBusca = "";
				}).error(function (data){
					$scope.saveSuccess = false;
					$scope.saveError = true;
				});
			};
			
			
			$scope.carregarFuncionalidade = function(){
				$scope.saveSuccess = false;
				$scope.saveError = false;
				
				var urlServico = "";
				if($scope.funcionalidade == undefined || $scope.funcionalidade.nome != "teste erro"){
					urlServico = "http://localhost:8083/APIRESTAngularJS/REST/funcionalidade";
				}else{
					urlServico = "http://localhost:8083/APIRESTAngularJS/REST/Funcionalidade/geterror";
				}
				
				$http.get(urlServico).success(function (data, status){
					$scope.funcionalidade = data;
					$scope.carregarError = false;
				}).error(function (data, status){
					$scope.carregarError = true;
				});
			};

			$scope.carregarPlataforma = function(){
				$scope.saveSuccess = false;
				$scope.saveError = false;
				
				var urlServico = "";
				if($scope.plataforma == undefined || $scope.plataforma.nome != "teste erro"){
					urlServico = "http://localhost:8083/APIRESTAngularJS/REST/plataforma";
				}else{
					urlServico = "http://localhost:8083/APIRESTAngularJS/REST/Plataforma/geterror";
				}
				
				$http.get(urlServico).success(function (data, status){
					$scope.plataforma = data;
					$scope.carregarError = false;
				}).error(function (data, status){
					$scope.carregarError = true;
				});
			};
			
			$scope.limparDados = function (objeto, formulario){
				formulario.$setPristine();
				limpaFormulario(objeto);
			}

			$scope.okCancel = function (funcionalidade){
				$scope.listarFuncionalidades();
				okInicializaValores(funcionalidade, $scope.funcionalidadeForm);
			}
			
			$scope.okCancelPlataforma = function (plataforma){
				$scope.listarPlataformas();
				okInicializaValores(plataforma, $scope.plataformaForm);
			}

			var okInicializaValores = function(objeto, formulario){
				$scope.salvoComSucesso = false;
				formulario.$setPristine();
				limpaFormulario(objeto);
				$scope.filtroBusca = "";
			}

			var limpaFormulario = function (objeto) {
				if(objeto != undefined){
					objeto.nome = null;
					objeto.tipo = null;
					objeto.identificacao = null;
					objeto.tecnica = null;
					objeto.descricao = null;
				}
				$scope.saveSuccess = false;
				$scope.saveError = false;
				$scope.carregarError = false;
			}

		});