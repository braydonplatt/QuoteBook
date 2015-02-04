var app = angular.module('quoteBook');

	app.controller('mainCtrl', function($scope, dataService){
		$scope.quotes = dataService.getData();

        $scope.addNewData = function(){
        	dataService.addData($scope.newData);
        };
        
        $scope.removeOldData = function(){
        	dataService.removeData($scope.oldData);
        };

	});