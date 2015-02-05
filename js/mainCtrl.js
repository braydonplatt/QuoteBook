var app = angular.module('quoteBook'); //controls the view

	app.controller('mainCtrl', function($scope, dataService){
		$scope.quotes = dataService.getData();

        $scope.addNewData = function(){
            var emptyObj = {};
            emptyObj.text = $scope.newData;
            emptyObj.author = $scope.authorData;

            dataService.addData(emptyObj);
        };
        
        $scope.removeOldData = function(){
        	dataService.removeData($scope.oldData);
        };

	});


	//translating view data to service data.
	//translating service data to view data.
	//we use scope to do this. 


