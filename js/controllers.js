app.controller('mainController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope){
	$rootScope.main = true;
	$scope.view = {};
	$scope.view.message = "Jello";
	$scope.view.data1 = [];
	$scope.view.data2 = [];
	$scope.searchInput;
	$scope.searchMovies = function(){
		$scope.view.data1 = [];
		$scope.view.data2 = [];
		$http.get(`http://www.omdbapi.com/?s=${$scope.searchInput}`).then(function(data){
			var arr = data.data.Search;
			for (var i = 0; i < arr.length; i++) {
				if(i % 2 === 0){
					$scope.view.data1.push(arr[i])
				} else {
					$scope.view.data2.push(arr[i])
				}
			}
		})
	}
}]);

app.controller('movieProfile', ['$scope', '$http', '$routeParams', '$rootScope', '$location', function($scope, $http, $routeParams, $rootScope, $location){
	var searchMov = function(input){
		$http.get(`http://www.omdbapi.com/?i=${input}`).then(function(data){
			$scope.view.data = data.data;
			$rootScope.main = false;
		})
	}
	searchMov($routeParams.movie)
	$scope.view = {};
	$scope.view.main = "Jello";
	$scope.view.back = function(){
		$rootScope.main = true;
		$location.path('/');
		$location.replace();
	}

}])
