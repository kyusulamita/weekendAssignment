app.directive('productList', function(){
    // Runs during compile
    return {
        scope: {}, // {} = isolate, true = child, false/undefined = no change
        controller: function($scope, ProductService) {
            $scope.products = ProductService.products;

            $scope.canAdd = () => !!$scope.add;
            $scope.save = () => $scope.$broadcast('save');
            $scope.cancel = () => $scope.$broadcast('cancel');
            $scope.canSave = () => !!$scope.triggerSave;
            $scope.triggerAdd = () => {
                $scope.add = !$scope.add;
                $scope.newProduct = '';
            }

            $scope.allowSaveCheck = () => {
                $scope.triggerSave = false;
                $scope.$broadcast('checkStatus');
                return true;
            };

            $scope.submit = function(){
                ProductService.addProduct($scope.newProduct);
                $scope.triggerAdd();
            };

            $scope.$on('change', function(eve, isDifferent){
                if (isDifferent){
                    $scope.triggerSave = true;
                }

            })
        },
        templateUrl: '/templates/productList.directive.html',
    };
});
