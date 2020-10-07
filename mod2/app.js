(function () {
	'use strict';
	angular.module('ShoppingListCheckOff',[])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject=['ShoppingListCheckOffService'];

	function ToBuyController(ShoppingListCheckOffService){
		var toBuyList = this;
		toBuyList.items = ShoppingListCheckOffService.gettoBuyItems();
		toBuyList.buyItem = function(itemIndex){
			ShoppingListCheckOffService.buyItem(itemIndex);
		};
	}

	AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService){
		var AlreadyBoughtList = this;
		AlreadyBoughtList.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
	}

	function ShoppingListCheckOffService(){
		var service = this;
		var toBuyItems = [
			{ name: "cookies", quantity: 10 },
            { name: "cokes", quantity: 2 },
            { name: "beers", quantity: 6 },
            { name: "apples", quantity: 4 },
            { name: "bananas", quantity: 7 }
        ];
        var AlreadyBoughtItems = [];

        service.buyItem = function(itemIndex){
        	var item = toBuyItems[itemIndex];

        	AlreadyBoughtItems.push(item);
        	toBuyItems.splice(itemIndex,1);
        };
        service.gettoBuyItems = function(){
        	return toBuyItems;
        };

        service.getAlreadyBoughtItems = function(){
        	return AlreadyBoughtItems;
        };
	}
})();