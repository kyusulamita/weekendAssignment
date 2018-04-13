app.directive('productList', function(){
    // Runs during compile
    return {
        scope: {}, // {} = isolate, true = child, false/undefined = no change
        controller: function($scope, ProductService) {
            $scope.products = ProductService.products;
            $scope.save = function(){
                $scope.$broadcast('save')
            },
            $scope.cancel = function(){
                $scope.$broadcast('cancel')
            }

            $scope.submit = function(){
                ProductService.addProduct($scope.newProduct);
                $scope.newProduct = "";
            }
        },
        templateUrl: '/templates/productList.directive.html',
    };
});