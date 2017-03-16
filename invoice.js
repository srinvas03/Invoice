var myApp = angular.module("myModule",[]);

myApp.controller("myController",function($scope){

});


myApp.directive("myInvoice",function(){

	return{
  
    templateUrl: "invoiceTemplate.html",

    restrict: 'A',

    scope:{     // scope object starts here //
    
    description: '@', 

    quantity:'@',

    cost:'@',

    result:'@'

    }, // scope object closes here //

    controller: function($scope){

    var items = [ // creating an array //

    {nameOfItem: "", quantityOfItem: 0, costOfItem:0},

    ];

    $scope.items = items;
     
    $scope.value = true;  // for ng-show and ng-hide //

    // FUNCTION 1 //

    $scope.additems = function(){ // add items //

    $scope.items.push({nameOfItem: "",quantityOfItem: "",costOfItem: ""});

    }  // add function ends here// 


    // FUNCTION 2 //

    $scope.removeitems = function(item){  // remove items

    var eachItem = $scope.items.indexOf(item);

    $scope.items.splice(eachItem,1);
 
    } // remove items function ends here //


    // FUNCTION 3 //

    $scope.Subtotal = function(){  // subtotal function starts here //

        var priceTotal = 0;

        angular.forEach($scope.items,function(item){

            priceTotal += item.quantityOfItem * item.costOfItem; 
        })

        return priceTotal;

    }  // subtotal function ends here //


    // FUNCTION 4 //
    
    $scope.taxMoney = function(){
    console.log($scope.taxP); 
   // $scope.taxP = 9;

    //  return (1);
    return (($scope.taxP * $scope.Subtotal())/100);

    }  // tax function //


    // FUNCTION 5 //

    $scope.grandTotal = function(){ // grandTotal function starts here //

     return($scope.Subtotal()+$scope.taxMoney());

    }  // grandTotal function ends here //


    // ALL FUNCTION END HERE //


    }    // controller function //

	}; // return function close //

}); // custom directive closes here //

