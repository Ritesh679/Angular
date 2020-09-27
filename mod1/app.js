(function () {
	'use strict';
	angular.module('LunchCheck',[])
	.controller('LunchCheckController', LunchCheckController);
	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope){
		$scope.message="";
		$scope.namesOfDishes="";
		$scope.checkDishes = function(){
			$scope.message = messageForDishes($scope.namesOfDishes);
		};
	}
	function messageForDishes(namesOfDishes){
		if (namesOfDishes.split(',')=="") {
			return "Enter the data first";
		} else if (numberOfDishes(namesOfDishes) <= 3) {
			return "Enjoy";
		} else {
			return "Too much!";
		}
	}
	function numberOfDishes(namesOfDishes){
		var items = namesOfDishes.split(',');
		var numberOfItems = 0;
		for (var i = 0; i < items.length; i++) {
			if (items[i].trim()!=""){
				numberOfItems++;
			}
		}
		return numberOfItems;
	}
					
	
})();